const inactivityTimeout = 60000;

let timeoutId;

// Function to reset the inactivity timeout
const resetInactivityTimeout = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    // Redirect to the login page
    window.location.href = '/login';
  }, inactivityTimeout);
};

// Add event listeners to reset the timeout on user activity
document.addEventListener('mousemove', resetInactivityTimeout);
document.addEventListener('keydown', resetInactivityTimeout);
document.addEventListener('click', resetInactivityTimeout);

// Start the initial inactivity timeout
resetInactivityTimeout();
