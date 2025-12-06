# Activity Preprocessing Guide

This guide explains how to extract browser activity data and preprocess it into activity blocks.

## Overview

The `preprocess_activity.py` script processes a file of timestamps and groups them into activity blocks. An activity block ends when there's a gap of specified duration (default: 1 hour) with no activity.

## Step 1: Generate Input Data from Browser History

### Extract Timestamps from Brave Browser

Use the following command to extract visit timestamps from your Brave browser history:

```bash
sqlite3 History "SELECT strftime('%Y-%m-%d %H:%M:%S', datetime(visits.visit_time/1000000-11644473600, 'unixepoch')) FROM visits WHERE visits.visit_time >= ((strftime('%s', 'now', '-8 days') + 11644473600) * 1000000);" > brave_activity_log.txt
```

**What this command does:**
- Opens the `History` SQLite database (Brave browser history file)
- Extracts visit timestamps from the last 8 days
- Converts Chrome/Brave's timestamp format (microseconds since 1601-01-01) to readable format
- Outputs timestamps in `YYYY-MM-DD HH:MM:SS` format
- Saves results to `brave_activity_log.txt`

**Location of History file:**
- **macOS**: `~/Library/Application Support/BraveSoftware/Brave-Browser/Default/History`
- **Linux**: `~/.config/BraveSoftware/Brave-Browser/Default/History`
- **Windows**: `%LOCALAPPDATA%\BraveSoftware\Brave-Browser\User Data\Default\History`

**Note:** You may need to close Brave browser before accessing the History file, or make a copy first:

```bash
cp ~/Library/Application\ Support/BraveSoftware/Brave-Browser/Default/History ./History
sqlite3 History "SELECT ..." > brave_activity_log.txt
```

### Customize Time Range

To extract data for a different time period, modify the `-8 days` part:

```bash
# Last 24 hours
sqlite3 History "SELECT strftime('%Y-%m-%d %H:%M:%S', datetime(visits.visit_time/1000000-11644473600, 'unixepoch')) FROM visits WHERE visits.visit_time >= ((strftime('%s', 'now', '-1 days') + 11644473600) * 1000000);" > brave_activity_log.txt

# Last 30 days
sqlite3 History "SELECT strftime('%Y-%m-%d %H:%M:%S', datetime(visits.visit_time/1000000-11644473600, 'unixepoch')) FROM visits WHERE visits.visit_time >= ((strftime('%s', 'now', '-30 days') + 11644473600) * 1000000);" > brave_activity_log.txt
```

## Step 2: Preprocess Activity Log

### Basic Usage

Process the activity log with default settings (1-hour gap threshold):

```bash
python3 preprocess_activity.py brave_activity_log.txt -o activity_blocks.txt
```

This will:
- Read timestamps from `brave_activity_log.txt`
- Group them into activity blocks (gaps > 1 hour end a block)
- Output to `activity_blocks.txt` in START/END format

### Command Line Options

```
python3 preprocess_activity.py INPUT_FILE [OPTIONS]

Required:
  INPUT_FILE              Input file containing timestamps (one per line)

Options:
  -o, --output FILE       Output file name (default: activity_blocks.txt)
  -g, --gap HOURS         Gap duration in hours to end an activity block (default: 1.0)
  -s, --stats             Print statistics about the activity blocks
  -h, --help              Show help message
```

### Examples

**1. Process with default 1-hour gap:**
```bash
python3 preprocess_activity.py brave_activity_log.txt -o activity_blocks.txt
```

**2. Use 30-minute gap threshold:**
```bash
python3 preprocess_activity.py brave_activity_log.txt -o blocks.txt -g 0.5
```

**3. Use 2-hour gap threshold:**
```bash
python3 preprocess_activity.py brave_activity_log.txt -o blocks.txt -g 2
```

**4. Show detailed statistics:**
```bash
python3 preprocess_activity.py brave_activity_log.txt -o blocks.txt -s
```

The statistics will show:
- Number of activity blocks
- Start and end time for each block
- Duration of each block
- Total activity duration
- Activity percentage over the time span

### Output Format

The script generates output in the following format:

```
START: 2025-11-27 10:02:15
END: 2025-11-27 12:23:34
START: 2025-11-27 22:25:37
END: 2025-11-28 02:26:02
START: 2025-11-28 08:15:23
END: 2025-11-28 11:45:12
```

Each START/END pair represents one continuous activity block.

## Complete Workflow Example

```bash
# 1. Copy browser history (to avoid locking issues)
cp ~/Library/Application\ Support/BraveSoftware/Brave-Browser/Default/History ./History

# 2. Extract timestamps from last 8 days
sqlite3 History "SELECT strftime('%Y-%m-%d %H:%M:%S', datetime(visits.visit_time/1000000-11644473600, 'unixepoch')) FROM visits WHERE visits.visit_time >= ((strftime('%s', 'now', '-8 days') + 11644473600) * 1000000);" > brave_activity_log.txt

# 3. Process into activity blocks with statistics
python3 preprocess_activity.py brave_activity_log.txt -o activity_blocks.txt -s

# 4. View the results
cat activity_blocks.txt
```

## Troubleshooting

### "database is locked" error
- Close your Brave browser, or
- Make a copy of the History file first

### No valid timestamps found
- Check that `brave_activity_log.txt` contains timestamps in the format `YYYY-MM-DD HH:MM:SS`
- Verify the History database path is correct

### Empty output file
- Ensure there is browser activity in the selected time range
- Check the input file has valid data

## Input File Format

The input file should contain one timestamp per line in the format:

```
2025-12-01 10:15:23
2025-12-01 10:16:45
2025-12-01 10:18:12
...
```

Blank lines are ignored. Any line that doesn't match the expected format will be skipped.


To get details from history (& not just timestamps)
sqlite3 History -separator '|' "SELECT strftime('%Y-%m-%d %H:%M:%S', datetime(v.visit_time/1000000-11644473600, 'unixepoch')), u.url, u.title FROM visits v JOIN urls u ON v.url = u.id WHERE v.visit_time >= ((strftime('%s', 'now', '-8 days') + 11644473600) * 1000000) ORDER BY v.visit_time;" > output_file.txt
