// ===============================
// Happy Birthday Shanvi ❤️
// Complete script.js
// ===============================

window.onload = function () {

    // -----------------------------
    // Love Counter
    // -----------------------------
    const startDate = new Date("2021-02-06");
    const today = new Date();

    const difference = today - startDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("loveDays").innerHTML =
        days + " Days Together ❤️";

    // -----------------------------
    // Music (First Tap)
    // -----------------------------
    function startMusic() {

        const music = document.getElementById("bgMusic");

        if (music) {

            music.volume = 1;

            music.play().catch(err => {
                console.log("Music blocked:", err);
            });

        }

    }

    document.addEventListener("click", startMusic, { once: true });

    document.addEventListener("touchstart", startMusic, { once: true });

    // -----------------------------
    // Floating Hearts & Roses
    // -----------------------------
    const container = document.createElement("div");

    container.className = "hearts";

    document.body.appendChild(container);

    const emojis = ["❤️", "🌹"];

    function createLove() {

        const love = document.createElement("div");

        love.className = "heart";

        love.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        love.style.left = Math.random() * 100 + "vw";

        love.style.fontSize =
            (20 + Math.random() * 20) + "px";

        love.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        container.appendChild(love);

        setTimeout(() => {

            love.remove();

        }, 9000);

    }

    setInterval(createLove, 300);

    // -----------------------------
    // Fireworks
    // -----------------------------
    setTimeout(() => {

        const fwContainer =
            document.getElementById("fireworks");

        document.getElementById("finalMessage").style.display = "block";

        fwContainer.style.display = "block";

        const fireworks = new Fireworks.default(fwContainer, {

            speed: 2,

            acceleration: 1.05,

            friction: 0.98,

            gravity: 1.5,

            particles: 120,

            traceLength: 4,

            explosion: 8

        });

        fireworks.start();

        // Stop after 10 sec

        setTimeout(() => {

            fireworks.stop();

        }, 100000);

    }, 1000);

};
// Birthday Countdown
const birthday = new Date("2026-08-07T00:00:00");

function updateCountdown() {

    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Shanvi! ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
