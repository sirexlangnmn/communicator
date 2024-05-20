let localConnection;
let remoteConnection;
const lastInteractionKey = 'lastUserInteraction';
const interactionTimeout = 15 * 60 * 1000; // 15 minutes in milliseconds

// Function to handle incoming call
function onIncomingCall() {
    console.log("Incoming call detected!");
    if (isUserInteractionRecent()) {
        playSound('addPeer2');
    } else {
        alert('Please interact with the page to enable sound playback.');
        playSound('addPeer2');
    }
}

// Function to play sound
// async function playSound(elementId) {
//     const audioElement = document.getElementById(elementId);
//     try {
//         await audioElement.play();
//     } catch (err) {
//         console.error("Cannot play sound", err);
//     }
// }

// Mock function to simulate incoming call detection
function simulateIncomingCall() {
    setTimeout(() => {
        onIncomingCall();
    }, 5000); // Simulates an incoming call after 5 seconds
}

// WebRTC signaling logic to detect incoming calls
// This is a simplified example, you should replace it with your actual WebRTC signaling implementation
function setupWebRTC() {
    // Your WebRTC setup code here
    // ...

    // Simulate an incoming call for demonstration purposes
    simulateIncomingCall();
}

// Save the timestamp of the last user interaction to localStorage
function updateLastUserInteraction() {
    const now = Date.now();
    localStorage.setItem(lastInteractionKey, now.toString());
}

// Check if the last user interaction is within the allowed time window
function isUserInteractionRecent() {
    const lastInteraction = parseInt(localStorage.getItem(lastInteractionKey), 10);
    if (isNaN(lastInteraction)) {
        return false;
    }
    const now = Date.now();
    return now - lastInteraction <= interactionTimeout;
}

// Add event listeners to capture user interactions
document.addEventListener('touchstart', updateLastUserInteraction, { passive: true });
document.addEventListener('mousedown', updateLastUserInteraction, { passive: true });

// On page load, check if user interaction was recent
window.onload = () => {
    if (isUserInteractionRecent()) {
        console.log('User interaction was recently granted.');
        setupWebRTC();
    } else {
        alert('Please interact with the page to enable sound playback.');
    }
};
