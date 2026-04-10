---
title: "Bibliomania"
description: "CLI tool to automate bibliography collection from study guides."
date: "Mar 17 2026"
demoURL: ""
repoURL: "https://github.com/GuillermoEJ/bibliomania"
---

# Bibliomania

I built Bibliomania because I needed a practical solution to one of the most tedious aspects of university study guides: manually searching, locating, and downloading the recommended reading materials. Bibliomania automates this entire process by combining PDF text extraction, intelligent LLM analysis, and smart search capabilities.

## How It Works

The tool follows a multi-step intelligent pipeline:

1. Extracts structured data from PDF study guides using OCR-resistant text parsing
2. Sends extracted content to Llama 3.3 70B (via Groq's free API) to intelligently identify the subject and catalog all bibliography entries with their metadata
3. Cross-references a local library database and shared index to avoid re-downloading existing materials
4. Searches Anna's Archive for missing books with intelligent format selection (PDF preferred, fallback to EPUB)
5. Maintains a cryptographically verified index using SHA-256 hashes for integrity and MD5 for direct future lookups

The system includes a fallback regex analyzer for cases where the LLM is unavailable, ensuring it works even without API access.

## Technical Learning

Building Bibliomania taught me valuable lessons about:

- Integration with external APIs (Groq, Anna's Archive)
- PDF text extraction challenges and limitations
- Fuzzy matching algorithms for library catalog queries
- Cryptographic integrity verification (SHA-256, MD5)
- CLI application architecture with Node.js
- Graceful degradation (LLM fallback to regex parsing)

## Technology

- Node.js 20+ with async/await patterns
- pdf-parse for reliable text extraction
- Groq API integration with rate limiting
- Fuzzy string matching for robust book matching
- Zlib compression for efficient data storage

