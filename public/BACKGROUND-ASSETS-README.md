# Background Assets Guide

This folder contains background assets for the dual-theme system.

## Current Assets

- `joker-bg.png` - Joker theme background image
- `login-bg.png` - Login page background image

## Required Video Assets (Not Included)

The following video assets are needed for the girl theme background but are not included in this repository due to file size:

- `bg-full.webm` - Girl theme video background (WebM format, recommended)
- `bg-full.mp4` - Girl theme video background (MP4 fallback)

### Instructions to Add Video

1. Export your "Marooned" video in WebM format (VP9 codec recommended)
2. Optionally export an MP4 fallback
3. Place the files in this `public/` directory
4. Name them `bg-full.webm` and `bg-full.mp4`

### Recommended Video Settings

- Resolution: 1920x1080 or higher
- Codec: VP9 for WebM, H.264 for MP4
- Bitrate: 2-5 Mbps for good quality/size balance
- Loop: The video will play on loop automatically

## Theme System

The site uses two themes:

1. **Girl Theme** - Plays the video background (`bg-full.webm`)
2. **Joker Theme** - Shows the static image background (`joker-bg.png`)

Themes are toggled using the ThemeToggle component in the bottom-left corner.

## License Notes

- [ ] Verify you have the license to use these background assets
- [ ] If licensing restricts redistribution, host images on a private CDN and update URLs in CSS
