const clock = document.getElementById('clock');
setInterval(() => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 100);