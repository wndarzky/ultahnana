const happyBirthdayText = document.getElementById('happyBirthdayText');
const catEmojis = ['🐱', '😻', '🐾']; // Emojis kucing

document.body.addEventListener('click', (event) => {
    // Create a cat emoji element
    const cat = document.createElement('span');
    cat.classList.add('cat-emoji');
    cat.textContent = catEmojis[Math.floor(Math.random() * catEmojis.length)];

    // Set initial position to where the user clicked
    cat.style.left = `${event.clientX}px`;
    cat.style.top = `${event.clientY}px`;

    // Append to body
    document.body.appendChild(cat);

    // Generate random destination and rotation for animation
    const targetX = Math.random() * window.innerWidth * (Math.random() < 0.5 ? 1 : -1);
    const targetY = Math.random() * window.innerHeight * (Math.random() < 0.5 ? 1 : -1);
    const rotation = Math.random() * 720 - 360; // -360 to 360 degrees

    cat.style.setProperty('--x', `${targetX}px`);
    cat.style.setProperty('--y', `${targetY}px`);
    cat.style.setProperty('--rot', `${rotation}deg`);

    // Remove the cat emoji after animation ends to prevent accumulation
    cat.addEventListener('animationend', () => {
        cat.remove();
    });
});

// Optional: Trigger some cats on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            document.body.dispatchEvent(new MouseEvent('click', {
                clientX: randomX,
                clientY: randomY,
                bubbles: true
            }));
        }, i * 500); // Stagger the appearance
    }
});