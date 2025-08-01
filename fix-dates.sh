#!/bin/bash

# Directory to scan
DIR="content/photos"

# Loop through all .md files
find "$DIR" -name "*.md" | while read -r file; do
  # Extract the line with the date in "Month, Year" format
  date_line=$(grep -E '^date = "[A-Za-z]+, [0-9]{4}"' "$file")
  
  if [ -n "$date_line" ]; then
    # Extract Month and Year
    month_year=$(echo "$date_line" | cut -d'"' -f2)
    month=$(echo "$month_year" | cut -d',' -f1)
    year=$(echo "$month_year" | cut -d',' -f2 | tr -d ' ')
    
    # Convert "May" to "05"
    month_num=$(date -j -f "%B" "$month" "+%m" 2>/dev/null)

    # Skip if month is invalid
    if [ -z "$month_num" ]; then
      echo "⚠️  Skipping invalid month in $file: $month_year"
      continue
    fi

    # New date string
    new_date="date = \"$year-$month_num-01\""

    # Replace old date line with new one
    sed -i '' "s|$date_line|$new_date|" "$file"
    echo "✅ Fixed date in $file → $new_date"
  fi
done
