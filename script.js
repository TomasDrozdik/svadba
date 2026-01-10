// Wedding Countdown Timer
// Update this date to match your wedding date and time
const weddingDate = new Date('2026-05-22T15:00:00');

function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById('days').textContent = '0';
        return;
    }

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days;
}

// Update countdown on page load
updateCountdown();

