---
title: "Personal Website"
description: "A minimal, performant portfolio with real-time visitor analytics."
date: "Apr 10 2025"
repoURL: "https://github.com/GuillermoEJ/GuillermoEJ.github.io"
---

## Technical Architecture

The site runs on Astro, a static site generator that compiles everything to plain HTML at build time. Static generation means every page loads in milliseconds. The entire site is served directly from GitHub Pages with zero server infrastructure. View Transitions provide smooth page navigation without full page reloads, creating a single-page application experience from static files.

## Content Organization

Everything is structured using Astro's Content Collections system. Blog posts, projects, and work experience all live as markdown files with frontmatter, giving me version control, git history, and the ability to write and update content without touching code.

The same markdown compilation that powers the blog also validates schema on every build, preventing accidental data structure inconsistencies.

## Design Philosophy

The visual design embraces constraints. A fixed dark color palette (stone-900 background), single font (Inter), minimal decorative elements. What could feel limiting instead creates coherence and reduces cognitive load.

The CRT effect toggle is partly nostalgia, partly a statement: technology doesn't need to be slick to be engaging. Sometimes the interesting part is the implementation, not the polish.

## Visitor Analytics Through Supabase

One interesting technical challenge: implementing a global visitor counter without running a backend server. The solution uses Supabase's PostgreSQL database accessed directly from the client via their REST API.

Each visitor increments a counter, with session storage preventing double-counting. The architecture is intentionally simple—no complex state management, just a database query and update on button click.

This demonstrates how to integrate real-time data persistence into a static site without sacrificing the simplicity of static hosting.

## Performance Characteristics

Because it's static HTML with minimal JavaScript, this site achieves:

- Sub-100ms first contentful paint
- Lighthouse score consistently above 95
- Zero layout shifts (no ads, no unexpected reflows)
- Instant navigation with View Transitions
- No external dependencies except Supabase for the counter

The entire site is about 200KB compressed, comparable to a single image on most websites.

## Technology Stack

- Astro 5.x with View Transitions
- Tailwind CSS for styling
- Supabase for visitor counter persistence
- GitHub Pages for deployment
- GitHub Actions for CI/CD
- Markdown with frontmatter for content
