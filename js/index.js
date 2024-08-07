document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    function pulseEffect() {
        title.classList.toggle('pulse');
    }
    setInterval(pulseEffect, 1000);
});
