// Get all date and time elements
const dates = document.querySelectorAll('.rp10kf');
const times = document.querySelectorAll('.H3Q9vf.XTnvW');
const activities = document.querySelectorAll('.QTGV3c');

let result = '';

// Process each time element with its corresponding date
times.forEach((timeElement, index) => {
  // Check if the corresponding activity is "Used Digital Wellbeing"
  const activityElement = activities[index];
  if (!activityElement || activityElement.innerText.trim() !== 'Used Digital Wellbeing') {
    return; // Skip this one
  }
  
  // Get the time text and extract just the time part (before the •)
  const timeText = timeElement.innerText.split('•')[0].trim();
  
  // Find the corresponding date (dates appear less frequently, so find the most recent one)
  let dateIndex = 0;
  for (let i = 0; i < dates.length; i++) {
    if (dates[i].compareDocumentPosition(timeElement) & Node.DOCUMENT_POSITION_FOLLOWING) {
      dateIndex = i;
    } else {
      break;
    }
  }
  
  const dateText = dates[dateIndex].innerText.trim();
  
  // Parse the date
  let date;
  if (dateText === 'Today') {
    throw new Error('ERROR: Please update the "Today" date in digital_wellbeing.js before running this script. Replace the hardcoded date with the current date.');
  } else if (dateText === 'Yesterday') {
    throw new Error('ERROR: Please update the "Yesterday" date in digital_wellbeing.js before running this script. Replace the hardcoded date with yesterday\'s date.');
  } else {
    // Format: "November 28"
    date = new Date(`${dateText}, 2025`);
  }
  
  // Parse the time (format: "8:35 PM" or "1:20 AM")
  const timeParts = timeText.match(/(\d+):(\d+)\s*(AM|PM)/i);
  
  if (timeParts) {
    let hours = parseInt(timeParts[1]);
    let minutes = parseInt(timeParts[2]);
    const period = timeParts[3].toUpperCase();
    
    // Convert to 24-hour format
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    // Create a date object with the parsed date and time
    const datetime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes, 0);
    
    // Add 8 hours
    datetime.setHours(datetime.getHours() + 8);
    
    // Format as YYYY-MM-DD HH:MM:SS
    const year = datetime.getFullYear();
    const month = String(datetime.getMonth() + 1).padStart(2, '0');
    const day = String(datetime.getDate()).padStart(2, '0');
    const formattedHours = String(datetime.getHours()).padStart(2, '0');
    const formattedMinutes = String(datetime.getMinutes()).padStart(2, '0');
    
    result += `${year}-${month}-${day} ${formattedHours}:${formattedMinutes}:00\n`;
  }
});

console.log(result);