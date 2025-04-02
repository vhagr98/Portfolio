// Copyright in footer
const year = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${year} Parth. All Rights Reserved.`;

// Scroll to top functionality
const scrollButton = document.createElement('a');
scrollButton.className = 'scroll-top';
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollButton);

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Darsh";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

scrollButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading animation - only on first visit
const loading = document.createElement('div');
loading.className = 'loading';
loading.innerHTML = '<div class="loading-spinner"></div>';
document.body.appendChild(loading);

// Check if this is the first load in this session
if (!sessionStorage.getItem('hasVisited')) {
    loading.classList.add('visible');
    setTimeout(() => {
        loading.classList.remove('visible');
        // Mark that user has visited
        sessionStorage.setItem('hasVisited', 'true');
    }, 500);
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
