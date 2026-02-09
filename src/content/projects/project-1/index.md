---
title: "Back to Mp3"
description: "Simple automation tool to download your Spotify and YouTube playlists localy."
date: "Jul 1 2025"
demoURL: ""
repoURL: "https://github.com/GuillermoEJ/Spotify-Youtube-playlist-downloader"
---

# Spotify/YouTube to Local MP3

**Spotify-YouTube Playlist Downloader** is a python automation tool I developed to back up my streaming libraries. I wanted a  streamlined way to download high-quality audio files locally, preserving the playlist functionality Spotify and YouTube offer.

This project leverages a three-step automated pipeline:
1. **Metadata Extraction**: Connects to the **Spotify API** to fetch track names, artists, and album details.
2. **Intelligent Search**: Utilizes advanced search queries to find the most accurate official audio or high quality match on YouTube.
3. **Optimized Download**: Uses **yt-dlp** to extract the audio stream and convert it into a standardized format (MP3/M4A).

---

## Key Features

- **Full Library Sync**: Effortlessly reads all tracks from your private or public playlists.
- **Smart Matching**: Filtering logic to avoid live recordings, covers, or low-quality uploads.
- **Automated Metadata**: Automatically tags files with the correct artist and title information.
- **Batch Processing**: Handles hundreds of songs in a single session without manual intervention.
- **File Sanitization**: Automatically cleans invalid characters from filenames for OS compatibility.
- **MP3 Player**: Built-in mp3 player functionality to oorganize and play tracks.

# Tech Stack

| Component | Technology |
| :--- | :--- |
| **Language** | Python 3.8+ |
| **Spotify Integration** | Spotipy Library |
| **YouTube Engine** | yt-dlp |
| **Media Processing** | FFmpeg |
| **Authentication** | OAuth 2.0 |
| **Environment Management** | python-dotenv |

---
