function createStar() {
    const container = document.querySelector('body');
    
    // Estrellas normales
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        container.appendChild(star);
    }
    
    const messages = ["❤️ Te adoro", "💞 Eres única", "🌠 Mi estrella", "💫 Para ti todo", "💥 Tus ojos", 
        "🌟 Mi universo", "🔥 Eres mi sol", "🌌 Mi mundo", "🤍 Me encantas"
    ];
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.textContent = messages[Math.floor(Math.random() * messages.length)];
        shootingStar.style.top = Math.random() * 100 + '%';
        shootingStar.style.left = Math.random() * 100 + '%';
        container.appendChild(shootingStar);
        
        setTimeout(() => {
            shootingStar.remove();
        }, 5000);
    }, 1500);
}

createStar();