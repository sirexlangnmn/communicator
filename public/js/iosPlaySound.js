let audioContext;
let userInteracted = false;

// Initialize AudioContext on user interaction
function initializeAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    userInteracted = true;
}

// Keep AudioContext Active
function keepAudioContextActive() {
    if (!audioContext) return;
    const silentAudio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA='); // Silent audio data URL
    silentAudio.play();
    setTimeout(keepAudioContextActive, 30000); // Keep context active every 30 seconds
}

// Play sound function
async function playSound7(name, force = false) {
    if (!userInteracted && !force) {
        console.log("User interaction required to play sound.");
        return;
    }
    const sound = '../sounds/' + name + '.mp3';
    const audioToPlay = new Audio(sound);
    try {
        audioToPlay.volume = 0.5;
        await audioToPlay.play();
    } catch (err) {
        console.error("Cannot play sound", err);
    }
}

// Add event listener to initialize AudioContext on any user interaction
document.addEventListener('touchstart', () => {
    initializeAudioContext();
    keepAudioContextActive();
}, { once: true });

// Example of triggering sound play
document.addEventListener('touchstart', () => {
    playSound7('addPeer2');
}, { once: true });


// Add event listener to initialize AudioContext on any user interaction
document.addEventListener('click', () => {
    initializeAudioContext();
    keepAudioContextActive();
}, { once: true });

// Example of triggering sound play
document.addEventListener('click', () => {
    playSound7('addPeer2');
}, { once: true });
