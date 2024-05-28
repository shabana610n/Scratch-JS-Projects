const btns = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Get the id of the audio associated with the clicked button
        const audioId = btn.getAttribute('aria-controls');
        const audio = document.getElementById(audioId);

        // Pause all audios
        audios.forEach(aud => {
            if (aud !== audio) {
                aud.pause();
                aud.currentTime = 0; // Reset the audio to the beginning
            }
        });

        // Play the selected audio
        audio.play();
    });
});