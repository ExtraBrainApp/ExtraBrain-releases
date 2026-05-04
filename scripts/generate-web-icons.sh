#!/bin/bash
# Generate web-optimized icons from the canonical transparent source PNG.

set -euo pipefail

SOURCE="icon_source-transparent.png"
PUBLIC_DIR="public/assets/images"

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: Source file '$SOURCE' not found"
  exit 1
fi

if command -v magick &> /dev/null; then
  MAGICK_CMD="magick"
elif command -v convert &> /dev/null; then
  MAGICK_CMD="convert"
else
  echo "Error: ImageMagick not found"
  echo "Transparent icon generation requires ImageMagick"
  echo "Install: brew install imagemagick (macOS) or apt install imagemagick (Linux)"
  exit 1
fi

generate_icon() {
  local size=$1
  local output=$2

  $MAGICK_CMD "$SOURCE" \
    -background none \
    -resize "${size}x${size}" \
    -gravity center \
    -extent "${size}x${size}" \
    -strip \
    "$output"
}

mkdir -p "$PUBLIC_DIR"

echo "Generating web icons from $SOURCE..."

generate_icon 512 "$PUBLIC_DIR/logo-512.png"
generate_icon 192 "$PUBLIC_DIR/logo-192.png"
generate_icon 180 "$PUBLIC_DIR/apple-touch-icon.png"
generate_icon 32 "$PUBLIC_DIR/favicon-32x32.png"
generate_icon 16 "$PUBLIC_DIR/favicon-16x16.png"

echo "Generated PNG icons"

$MAGICK_CMD "$PUBLIC_DIR/favicon-16x16.png" \
        "$PUBLIC_DIR/favicon-32x32.png" \
        -colors 256 "$PUBLIC_DIR/favicon.ico"
echo "Generated multi-size favicon.ico"

if command -v optipng &> /dev/null; then
  optipng -o7 "$PUBLIC_DIR"/*.png
  echo "Optimized PNG files with optipng"
elif command -v pngquant &> /dev/null; then
  pngquant --ext .png --force "$PUBLIC_DIR"/*.png
  echo "Optimized PNG files with pngquant"
fi

echo "All web icons generated successfully in $PUBLIC_DIR"
ls -lh "$PUBLIC_DIR"
