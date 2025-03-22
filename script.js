// Typing animation
const text = `> Initializing Dante Corso's Portfolio...
> Loading system components...
> Welcome to my digital space.
> I'm a Full Stack Developer passionate about creating secure and efficient applications.
> Type 'help' to see available commands.`;

const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');
let currentText = '';
let currentIndex = 0;

function typeText() {
    if (currentIndex < text.length) {
        currentText += text[currentIndex];
        typingText.textContent = currentText;
        currentIndex++;
        setTimeout(typeText, 50);
    } else {
        cursor.style.display = 'none';
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});

// Terminal-like command handling
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentIndex >= text.length) {
        const command = prompt('> ');
        if (command) {
            handleCommand(command.toLowerCase());
        }
    }
});

function handleCommand(command) {
    switch(command) {
        case 'help':
            alert(`Available commands:
- portfolio: View my portfolio
- projects: See my projects
- contact: Get in touch
- clear: Clear the terminal
- help: Show this help message`);
            break;
        case 'portfolio':
            window.location.href = '#portfolio';
            break;
        case 'projects':
            window.location.href = '#projects';
            break;
        case 'contact':
            window.location.href = '#contact';
            break;
        case 'clear':
            currentText = '';
            typingText.textContent = '';
            currentIndex = 0;
            typeText();
            break;
        default:
            alert('> Command not found. Type "help" for available commands.');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Add animation class to cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Glitch effect on hover
const glitchText = document.querySelector('.glitch');
glitchText.addEventListener('mouseover', () => {
    glitchText.style.animation = 'none';
    glitchText.offsetHeight; // Trigger reflow
    glitchText.style.animation = 'glitch 725ms infinite';
});

// Add some random movement to shapes
function randomizeShapes() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

// Call randomizeShapes every 5 seconds
setInterval(randomizeShapes, 5000);

// Add a subtle gradient animation to the background
document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
let gradientAngle = 0;

function animateGradient() {
    gradientAngle = (gradientAngle + 1) % 360;
    document.body.style.background = `linear-gradient(${gradientAngle}deg, #1a1a1a 0%, #2a2a2a 100%)`;
    requestAnimationFrame(animateGradient);
}

animateGradient(); 