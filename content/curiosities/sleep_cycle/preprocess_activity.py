#!/usr/bin/env python3
"""
Activity Block Preprocessor

Reads a file of timestamps and outputs only the start and end times of activity blocks.
An activity block ends when there's a gap of specified duration (default: 1 hour) with no activity.

Output format:
    START: 2025-11-27 10:02:15
    END: 2025-11-27 12:23:34
    START: 2025-11-27 22:25:37
    END: 2025-11-28 02:26:02
    ...
"""

import argparse
from datetime import datetime, timedelta
import sys

def parse_timestamp(line):
    """Parse a timestamp line, returns datetime object or None if invalid."""
    line = line.strip()
    if not line:
        return None
    
    try:
        # Try parsing as UTC timestamp (assumes format like "2025-11-27 10:02:15")
        return datetime.strptime(line, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return None

def process_activity_log(input_file, gap_hours=1.0):
    """
    Process activity log and identify activity blocks.
    
    Args:
        input_file: Path to input file with timestamps
        gap_hours: Gap duration in hours to consider end of activity block
    
    Returns:
        List of tuples (block_start, block_end)
    """
    timestamps = []
    
    # Read and parse all timestamps
    with open(input_file, 'r') as f:
        for line in f:
            ts = parse_timestamp(line)
            if ts:
                timestamps.append(ts)
    
    if not timestamps:
        print("ERROR: No valid timestamps found in input file.", file=sys.stderr)
        return []
    
    # Sort timestamps
    timestamps.sort()
    
    # Identify activity blocks
    blocks = []
    gap_duration = timedelta(hours=gap_hours)
    
    block_start = timestamps[0]
    block_end = timestamps[0]
    
    for i in range(1, len(timestamps)):
        current = timestamps[i]
        gap = current - block_end
        
        if gap > gap_duration:
            # Gap is too large, end current block and start new one
            if block_start == block_end:
                print(block_start)
            blocks.append((block_start, block_end))
            block_start = current
            block_end = current
        else:
            # Continue current block
            block_end = current
    
    # Don't forget the last block
    blocks.append((block_start, block_end))
    
    return blocks

def main():
    parser = argparse.ArgumentParser(
        description='Preprocess activity log into activity blocks',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Process with default 1-hour gap
  python3 preprocess_activity.py brave_activity_log.txt -o activity_blocks.txt
  
  # Use 30-minute gap threshold
  python3 preprocess_activity.py brave_activity_log.txt -o blocks.txt -g 0.5
  
  # Use 2-hour gap threshold
  python3 preprocess_activity.py brave_activity_log.txt -o blocks.txt -g 2
        """
    )
    
    parser.add_argument('input_file', help='Input file containing timestamps')
    parser.add_argument('-o', '--output', default='activity_blocks.txt',
                        help='Output file for activity blocks (default: activity_blocks.txt)')
    parser.add_argument('-g', '--gap', type=float, default=1.0,
                        help='Gap duration in hours to consider end of activity (default: 1.0)')
    parser.add_argument('-s', '--stats', action='store_true',
                        help='Print statistics about the activity blocks')
    
    args = parser.parse_args()
    
    # Process the log
    print(f"Processing {args.input_file}...")
    print(f"Gap threshold: {args.gap} hours")
    
    blocks = process_activity_log(args.input_file, args.gap)
    
    if not blocks:
        print("No activity blocks found.")
        return 1
    
    # Write output
    with open(args.output, 'w') as f:
        for start, end in blocks:
            # Write start timestamp with label
            f.write(f"START: {start.strftime('%Y-%m-%d %H:%M:%S')}\n")
            # Write end timestamp with label
            f.write(f"END: {end.strftime('%Y-%m-%d %H:%M:%S')}\n")
    
    print(f"\n✓ Processed {len(blocks)} activity blocks")
    print(f"✓ Output written to: {args.output}")
    
    # Print statistics if requested
    if args.stats:
        print("\n" + "="*60)
        print("ACTIVITY BLOCK STATISTICS")
        print("="*60)
        
        total_activity_duration = timedelta()
        
        for i, (start, end) in enumerate(blocks, 1):
            duration = end - start
            total_activity_duration += duration
            print(f"\nBlock {i}:")
            print(f"  Start: {start.strftime('%Y-%m-%d %H:%M:%S')}")
            print(f"  End:   {end.strftime('%Y-%m-%d %H:%M:%S')}")
            print(f"  Duration: {duration}")
        
        print("\n" + "="*60)
        print(f"Total activity blocks: {len(blocks)}")
        print(f"Total activity duration: {total_activity_duration}")
        
        if len(blocks) > 1:
            first_timestamp = blocks[0][0]
            last_timestamp = blocks[-1][1]
            total_time_span = last_timestamp - first_timestamp
            activity_percentage = (total_activity_duration.total_seconds() / total_time_span.total_seconds()) * 100
            
            print(f"Total time span: {total_time_span}")
            print(f"Activity percentage: {activity_percentage:.1f}%")
        
        print("="*60)
    
    return 0

if __name__ == '__main__':
    sys.exit(main())

