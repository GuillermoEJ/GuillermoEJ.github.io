import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Guillermo",
  EMAIL: "guillermo.esp.jim@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software engineer passionate about building scalable systems and learning new technologies.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Technical articles, engineering insights, and learning experiences.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Professional experience and internships.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Featured projects demonstrating technical skills and problem-solving.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/guillermoej",
  },
  {
    NAME: "github",
    HREF: "https://github.com/GuillermoEJ",
  },
  {
    NAME: "email",
    HREF: "mailto:guillermo.esp.jim@gmail.com",
  }
];
