#!/bin/bash
# Generate web-optimized icons with macOS-style rounded corners from source PNG

set -euo pipefail

SOURCE="icon_source.png"
DEST_DIR="pages/assets/images"

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
  echo "Rounded corner masks require ImageMagick"
  echo "Install: brew install imagemagick (macOS) or apt install imagemagick (Linux)"
  exit 1
fi

generate_rounded_icon() {
  local size=$1
  local output=$2
  local radius=$((size * 22 / 100))

  $MAGICK_CMD "$SOURCE" -resize ${size}x${size} \
    \( +clone -alpha extract \
       -draw "fill black polygon 0,0 0,$radius $radius,0 fill white circle $radius,$radius $radius,0" \
       \( +clone -flip \) -compose Multiply -composite \
       \( +clone -flop \) -compose Multiply -composite \
    \) -alpha off -compose CopyOpacity -composite \
    "$output"
}

mkdir -p "$DEST_DIR"

echo "Generating web icons with rounded corners from $SOURCE..."

generate_rounded_icon 1024 "$DEST_DIR/logo.png"
generate_rounded_icon 512 "$DEST_DIR/logo-512.png"
generate_rounded_icon 192 "$DEST_DIR/logo-192.png"
generate_rounded_icon 180 "$DEST_DIR/apple-touch-icon.png"
generate_rounded_icon 32 "$DEST_DIR/favicon-32x32.png"
generate_rounded_icon 16 "$DEST_DIR/favicon-16x16.png"

echo "✓ Generated PNG icons with rounded corners"

$MAGICK_CMD "$DEST_DIR/favicon-16x16.png" \
        "$DEST_DIR/favicon-32x32.png" \
        -colors 256 "$DEST_DIR/favicon.ico"
echo "✓ Generated multi-size favicon.ico"

if command -v optipng &> /dev/null; then
  optipng -o7 "$DEST_DIR"/*.png
  echo "✓ Optimized PNG files with optipng"
elif command -v pngquant &> /dev/null; then
  pngquant --ext .png --force "$DEST_DIR"/*.png
  echo "✓ Optimized PNG files with pngquant"
fi

echo "✓ All web icons generated successfully in $DEST_DIR"
ls -lh "$DEST_DIR"
