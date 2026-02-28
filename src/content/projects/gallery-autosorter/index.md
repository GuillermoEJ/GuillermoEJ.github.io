---
title: "Gallery Manager Tool"
description: "Gallery organization tool that sorts images."
date: "December 9 2025"
demoURL: ""
repoURL: "https://github.com/GuillermoEJ/gallery-autosorter"
---

# Gallery Autosorter

A Python application that automatically organizes photos into a year/month folder structure based on EXIF metadata or file timestamps. 

## Features

- **Automatic Organization**: Sorts photos into `YYYY/MM` folder structure based on image date
- **Smart Date Detection**: Multiple fallback methods to extract dates:
  - EXIF metadata (IFD DateTime, DateTimeOriginal, DateTimeDigitized)
  - PIL EXIF extraction
  - File modification timestamp
  - Current time (last resort)
- **Date Range Filtering**: Optionally copy only photos from a specific date range
- **Graphical Interface**: User-friendly folder and date selection dialogs
- **Safe Operation**: Skips duplicate files instead of overwriting
- **Debug Tools**: Included utilities to inspect image metadata

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.bmp`
- `.tiff`

## Tech Stack

| Component | Technology |
| :--- | :--- |
| **Language** | Python 3.7+ |
| **Image Processing** | Pillow |
| **EXIF Handling** | piexif, PIL |
| **UI** | Tkinter (standard dialogs) |

## Usage

### Main Application
```bash
python src/main.py
```
The application will guide you through:
1. Select source folder (where your photos are)
2. Select destination folder (where organized photos will be copied)
3. Optionally specify a date range to filter photos
4. Confirm and start the copy process

## How It Works

1. **Date Detection**: Tries multiple EXIF methods, then falls back to file timestamp
2. **Organization**: Copies photos to `destination/YYYY/MM/filename`
3. **Safety**: Skips files that already exist to prevent overwrites

## Dependencies

- **Pillow**: Image processing and EXIF extraction
- **piexif**: Additional EXIF metadata support


