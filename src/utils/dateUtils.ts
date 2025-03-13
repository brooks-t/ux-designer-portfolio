import { format, formatInTimeZone } from 'date-fns-tz';

// Get build time from environment or use current time
export const getBuildTime = () => {
  // In production, this would be set during the build process
  // For now, we'll use a static date that would be replaced during deployment
  const buildTimeEnv = import.meta.env.VITE_BUILD_TIME;
  
  // If the build time environment variable exists, use it
  // Otherwise default to the time when the JavaScript file was last modified
  return buildTimeEnv ? new Date(buildTimeEnv) : new Date(document.lastModified);
};

// Format the last updated date in a user-friendly format
export const formatLastUpdated = (date: Date, timeZone = 'America/New_York') => {
  try {
    return formatInTimeZone(date, timeZone, "h:mm a d MMMM yyyy");
  } catch (error) {
    console.error('Error formatting date:', error);
    return format(date, "h:mm a d MMMM yyyy");
  }
};
