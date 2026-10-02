/**
 * Calculate Mother Kelley's real-time operating status based on US Central Time (Texarkana, AR)
 * Regular hours: Monday–Friday 10:30 AM – 2:50 PM (Closed Sat & Sun)
 */
export function getRestaurantStatus() {
  // Get current time in Central Time (Texarkana, AR timezone)
  const now = new Date();
  
  // Format to Central Time components
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const getPart = (type) => parts.find((p) => p.type === type)?.value;

  const weekdayStr = getPart('weekday'); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
  const currentHour = parseInt(getPart('hour') || '0', 10);
  const currentMinute = parseInt(getPart('minute') || '0', 10);
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  // 10:30 AM = 10 * 60 + 30 = 630 minutes
  const openTimeInMinutes = 10 * 60 + 30;
  // 2:50 PM = 14 * 60 + 50 = 890 minutes
  const closeTimeInMinutes = 14 * 60 + 50;

  const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekdayStr);
  const isWeekend = ['Sat', 'Sun'].includes(weekdayStr);

  let isOpen = false;
  let statusBadgeText = '';
  let statusBadgeColor = 'red';
  let nextOpenText = '';
  let activeDayKey = 1; // 1 for Mon, 2 for Tue, etc.

  const dayMap = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
  const currentDayKey = dayMap[weekdayStr] || 1;

  // Determine active special day default (if weekend, default to Monday)
  activeDayKey = isWeekday ? currentDayKey : 1;

  if (isWeekday) {
    if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
      isOpen = true;
      const minutesRemaining = closeTimeInMinutes - currentTimeInMinutes;
      if (minutesRemaining <= 30) {
        statusBadgeText = `Open Now • Closes in ${minutesRemaining} min (2:50 PM)`;
        statusBadgeColor = 'amber';
      } else {
        statusBadgeText = 'Open Now • Lunch Served Until 2:50 PM';
        statusBadgeColor = 'emerald';
      }
      nextOpenText = 'Closing today at 2:50 PM';
    } else if (currentTimeInMinutes < openTimeInMinutes) {
      isOpen = false;
      statusBadgeText = 'Opens Today at 10:30 AM';
      statusBadgeColor = 'amber';
      nextOpenText = 'Pre-orders welcome by phone at 10:00 AM';
    } else {
      // After 2:50 PM on weekday
      isOpen = false;
      if (weekdayStr === 'Fri') {
        statusBadgeText = 'Closed • Opens Monday at 10:30 AM';
        statusBadgeColor = 'stone';
        nextOpenText = 'Enjoy your weekend! See you Monday morning';
      } else {
        statusBadgeText = 'Closed for Lunch • Opens Tomorrow at 10:30 AM';
        statusBadgeColor = 'stone';
        nextOpenText = 'Kitchen preps fresh daily starting early';
      }
    }
  } else {
    // Weekend
    isOpen = false;
    statusBadgeText = 'Closed Weekends • Opens Monday at 10:30 AM';
    statusBadgeColor = 'stone';
    nextOpenText = 'Open Monday–Friday, 10:30 AM – 2:50 PM';
  }

  return {
    isOpen,
    statusBadgeText,
    statusBadgeColor,
    nextOpenText,
    weekdayStr,
    activeDayKey,
    timeString: `${currentHour % 12 || 12}:${currentMinute.toString().padStart(2, '0')} ${currentHour >= 12 ? 'PM' : 'AM'} CT`,
  };
}
