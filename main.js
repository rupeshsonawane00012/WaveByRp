document.addEventListener('DOMContentLoaded', () => {
    console.log("WaveByRP Website Loaded");
    
    // Smooth transition effect when links are clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.4s ease';
        });
    });
});
// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '🌙' : '☀️';
});

// Back to Top Visibility
const topBtn = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth Scroll Top
const topBtn = document.getElementById('backToTop');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
// Theme Toggle Logic
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('vibe', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved vibe
if(localStorage.getItem('vibe') === 'light') body.classList.add('light-mode');

// Back to Top
const topBtn = document.getElementById('backToTop');
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });