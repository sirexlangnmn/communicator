let lastParticipantsCount = 0;
let lastInteraction = Date.now();

function simulateInteraction() {
    lastInteraction = Date.now();
}



// Simulate interaction on any document click
document.addEventListener('click', simulateInteraction);

function periodicallyCheckForInteraction(participantsCount) {
    // Periodically check for interaction and play sound
    if (participantsCount !== lastParticipantsCount) {
        lastParticipantsCount = participantsCount;

        setInterval(() => {
            const timeSinceLastInteraction = Date.now() - lastInteraction;
            const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
            if (timeSinceLastInteraction <= thirtyMinutes) {
                playSound('addPeer2');
            }
        }, 1000); // Check every second
    }
}
