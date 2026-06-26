// Play background music
function playMusic() {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(() => {
            console.log("Autoplay blocked by browser.");
        });
    }
}
window.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");

    music.play().catch(err => console.log(err));

}, { once: true });

window.onload = function () {

    // Love counter
    const startDate = new Date("2021-02-06");
    const today = new Date();

    const difference = today - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("loveDays").innerHTML =
        days + " Days Together";

    // Fireworks after 60 seconds
    setTimeout(() => {

        document.getElementById("fireworks").style.display = "block";

        document.getElementById("finalMessage").style.display = "block";

        const container = document.getElementById("fireworks");

        const fw = new Fireworks.default(container, {
            autostart: true,
            speed: 3,
            acceleration: 1.05,
            friction: 0.98,
            gravity: 1.5,
            particles: 120,
            traceLength: 4,
            explosion: 8
        });

        fw.start();

    }, 60000);

};
