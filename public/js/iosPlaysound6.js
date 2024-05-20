let lastParticipantsCount = 0;
let userInteracted = false;

function simulateInteraction() {
    userInteracted = true;
    lastInteraction = Date.now();
    console.log("simulateInteraction userInteracted : ", userInteracted);
    console.log("simulateInteraction lastInteraction : ", lastInteraction);
}



function sendPeersCountToAPI(participantsCount) {
    // Your logic to send participantsCount to the API goes here
    console.log("Sending participants count to API:", participantsCount);
}

// Simulate interaction on any document click
document.addEventListener('click', simulateInteraction);

// Sample function to get participants count (replace with your own logic)
function getParticipantsCount() {
    // Example: return the number of elements with class 'participant'
    // return document.querySelectorAll('.participant').length;
    return getId('videoMediaContainer').childElementCount;
}

// Function to check if participantsCount changed and trigger action accordingly
function checkParticipantsCount(participantsCount) {
    if (participantsCount !== lastParticipantsCount) {
        sendPeersCountToAPI(participantsCount);
        lastParticipantsCount = participantsCount;
        console.log("checkParticipantsCount lastParticipantsCount : ", lastParticipantsCount);
        console.log("checkParticipantsCount participantsCount : ", participantsCount);
        
        // Attempt to play sound if user has interacted
        if (userInteracted) {
            playSound('addPeer2');
        }
    }
}

// Initial check for participants count
checkParticipantsCount(getParticipantsCount());

// Check for changes in participants count periodically
setInterval(() => {
    const participantsCount = getParticipantsCount();
    console.log('setInterval participantsCount : ', participantsCount)
    checkParticipantsCount(participantsCount);
}, 1000);
