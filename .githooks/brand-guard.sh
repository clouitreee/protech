#!/bin/bash

# Define legacy color patterns
LEGACY_COLOR_PATTERNS=(
  "#3BA9FF"
  "#3ba9ff"
  "rgba(59,169,255,"
  "rgb(59 169 255"
  "from-\[#3BA9FF\]"
  "via-\[#3BA9FF\]"
  "to-\[#3BA9FF\]"
  "fill=\"#3BA9FF\""
  "stroke=\"#3BA9FF\""
)

# Define VAT compliance patterns
VAT_PATTERNS=(
  "MwSt"
  "USt"
  "IVA"
  "VAT"
)

# Exclude files from checks
EXCLUDE_FILES=(
  ".git/hooks/pre-commit"
  ".github/workflows/brand-guard.yml"
  ".githooks/brand-guard.sh"
)

# Convert exclude files to a glob pattern for rg
RG_EXCLUDE_GLOB=""
for file in "${EXCLUDE_FILES[@]}"; do
  RG_EXCLUDE_GLOB+=" --glob '!${file}'"
done

# Check for legacy colors
for pattern in "${LEGACY_COLOR_PATTERNS[@]}"; do
  if eval "rg -n --hidden -S \"${pattern}\" . ${RG_EXCLUDE_GLOB}"; then
    echo "❌ Detected legacy branding pattern: ${pattern}. Blocking commit."
    exit 1
  fi
done

# Check for VAT compliance
for pattern in "${VAT_PATTERNS[@]}"; do
  if eval "rg -n --hidden -S \"${pattern}\" . ${RG_EXCLUDE_GLOB}"; then
    echo "❌ Detected VAT term: ${pattern}. Blocking commit."
    exit 1
  fi
done

exit 0

