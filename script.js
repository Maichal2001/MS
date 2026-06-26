function playMusic(){
    document.getElementById("bgMusic").play();
}

const startDate = new Date("2024-01-01");

const today = new Date();

const difference = today - startDate;

const days = Math.floor(difference / (1000 * 60 * 60 * 24));

document.getElementById("loveDays").innerHTML =
days + " Days Together";
