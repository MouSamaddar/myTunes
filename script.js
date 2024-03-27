// Define the API endpoint for fetching music data
const apiUrl = 'https://api.musicwebsite.com/songs';

// Function to fetch music data from the API
async function fetchMusicData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const musicData = await response.json();
    return musicData;
  } catch (error) {
    console.error('Error fetching music data:', error);
    return null;
  }
}

// Function to handle the "Start Your Trial" button click event
async function startTrialButtonClickHandler() {
  const musicData = await fetchMusicData();
  if (musicData) {
    // Process the music data and store it or perform any other action
    console.log('Music data fetched successfully:', musicData);
    // For demonstration purposes, you can update the button text
    document.querySelector('.primary-btn').textContent = 'Trial Started';
  } else {
    // Handle error or display a message to the user
    console.log('Failed to fetch music data.');
  }
}

// Add event listener to the "Start Your Trial" button
document.querySelector('.primary-btn').addEventListener('click', startTrialButtonClickHandler);
