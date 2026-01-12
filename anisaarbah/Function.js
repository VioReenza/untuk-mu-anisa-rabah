// Music Player Variables
let isPlaying = false;
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

// Toggle Music Function
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.textContent = '▶️';
    } else {
        music.play();
        musicBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Create Stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Create Floating Hearts
const heartsContainer = document.getElementById('heartsBackground');
const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];

setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (10 + Math.random() * 10) + 's';
    heart.style.fontSize = (15 + Math.random() * 15) + 'px';
    heartsContainer.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 15000);
}, 800);

// Show Love Message Function
function showLoveMessage() {
    const messages = [
        '💖 Terimakasih sudah datang didalam hidupku caaa 💖',
        '💝 Kamu mengubah abu-abu menjadi pelangi dalam hidupku 💝',
        '💗 Aku nyaman menjadi diriku sendiri saat bersamamu, tanpa perlu berpura-pura 💗',
        '❤️ Aku sayang kamu hari ini, besok dan seterusnya caaaa ❤️'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Open Photo Modal
function openModal(element) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const img = element.querySelector('img');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
}

// Close Photo Modal
function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

// Scroll Animation for Cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
    observer.observe(card);
});

// Auto Play Music After First Interaction
document.addEventListener('click', function autoPlayMusic() {
    if (!isPlaying) {
        music.play();
        musicBtn.textContent = '⏸️';
        isPlaying = true;
    }
    document.removeEventListener('click', autoPlayMusic);
}, { once: true });