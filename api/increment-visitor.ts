export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/main/api/counter.json`
      );
      const data = await response.json();
      return res.status(200).json({ count: data.count || 42 });
    } catch (error) {
      return res.status(200).json({ count: 42 });
    }
  } else if (req.method === "POST") {
    try {
      // Dispara el workflow de GitHub Actions
      const response = await fetch(
        `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/dispatches`,
        {
          method: "POST",
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
          },
          body: JSON.stringify({
            event_type: "visitor-click",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }

      // Obtener el contador actualizado
      const counterResponse = await fetch(
        `https://raw.githubusercontent.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/main/api/counter.json`
      );
      const data = await counterResponse.json();
      return res.status(200).json({ count: data.count || 42 });
    } catch (error) {
      console.error("Error triggering workflow:", error);
      return res.status(500).json({ error: "Failed to update counter" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
