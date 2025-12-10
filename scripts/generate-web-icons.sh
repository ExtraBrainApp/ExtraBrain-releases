#!/bin/bash
# Generate web-optimized icons from source PNG

set -euo pipefail

SOURCE="icon_source.png"
DEST_DIR="pages/assets/images"

# Validate source file exists
if [[ ! -f "$SOURCE" ]]; then
  echo "Error: Source file '$SOURCE' not found"
  exit 1
fi

# Create destination directory
mkdir -p "$DEST_DIR"

echo "Generating web icons from $SOURCE..."

# macOS: Use sips (native tool)
if command -v sips &> /dev/null; then
  sips -z 1024 1024 "$SOURCE" --out "$DEST_DIR/logo.png"
  sips -z 512 512 "$SOURCE" --out "$DEST_DIR/logo-512.png"
  sips -z 192 192 "$SOURCE" --out "$DEST_DIR/logo-192.png"
  sips -z 180 180 "$SOURCE" --out "$DEST_DIR/apple-touch-icon.png"
  sips -z 32 32 "$SOURCE" --out "$DEST_DIR/favicon-32x32.png"
  sips -z 16 16 "$SOURCE" --out "$DEST_DIR/favicon-16x16.png"

  echo "✓ Generated PNG icons using sips"

# Linux/Other: Use ImageMagick
elif command -v convert &> /dev/null; then
  convert "$SOURCE" -resize 1024x1024 "$DEST_DIR/logo.png"
  convert "$SOURCE" -resize 512x512 "$DEST_DIR/logo-512.png"
  convert "$SOURCE" -resize 192x192 "$DEST_DIR/logo-192.png"
  convert "$SOURCE" -resize 180x180 "$DEST_DIR/apple-touch-icon.png"
  convert "$SOURCE" -resize 32x32 "$DEST_DIR/favicon-32x32.png"
  convert "$SOURCE" -resize 16x16 "$DEST_DIR/favicon-16x16.png"

  echo "✓ Generated PNG icons using ImageMagick"
else
  echo "Error: Neither 'sips' (macOS) nor 'convert' (ImageMagick) found"
  echo "Install ImageMagick: brew install imagemagick (macOS) or apt install imagemagick (Linux)"
  exit 1
fi

# Generate multi-size .ico file (requires ImageMagick)
if command -v convert &> /dev/null; then
  convert "$DEST_DIR/favicon-16x16.png" \
          "$DEST_DIR/favicon-32x32.png" \
          -colors 256 "$DEST_DIR/favicon.ico"
  echo "✓ Generated multi-size favicon.ico"
else
  echo "⚠ Skipped favicon.ico generation (requires ImageMagick)"
fi

# Optimize PNGs (optional, requires optipng or pngquant)
if command -v optipng &> /dev/null; then
  optipng -o7 "$DEST_DIR"/*.png
  echo "✓ Optimized PNG files with optipng"
elif command -v pngquant &> /dev/null; then
  pngquant --ext .png --force "$DEST_DIR"/*.png
  echo "✓ Optimized PNG files with pngquant"
fi

echo "✓ All web icons generated successfully in $DEST_DIR"
ls -lh "$DEST_DIR"
