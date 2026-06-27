// ===== Elements =====
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const heartScene = document.getElementById("heartScene");
const letter = document.getElementById("letter");
const tiles = document.querySelectorAll(".tile");
const message = document.getElementById("message");
const openLetter = document.getElementById("openLetter");
const again = document.getElementById("again");

// ===== Random Heart Location =====
let heartTile = Math.floor(Math.random() * 16) + 1;
let gameOver = false;

// ===== Start =====
startBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    game.classList.remove("hidden");
});

// ===== Puzzle =====
tiles.forEach(tile => {

    tile.addEventListener("click", () => {

        if (gameOver) return;

        let id = Number(tile.dataset.id);

        if (id === heartTile) {

            gameOver = true;

            tile.classList.add("correct");

            message.innerHTML =
                "❤️ You found the Heart Box...";

            setTimeout(() => {

                game.classList.add("hidden");

                heartScene.classList.remove("hidden");

            }, 1800);

        } else {

            tile.classList.add("wrong");

            message.innerHTML =
                "💔 Empty... My heart isn't here.";

            setTimeout(() => {

                tile.classList.remove("wrong");

            }, 500);

        }

    });

});

// ===== Heart Opening =====
openLetter.addEventListener("click", () => {

    document.querySelector(".heartBox").style.transform =
        "scale(1.2) rotateX(20deg)";

    document.querySelector(".heartBox").style.boxShadow =
        "0 0 80px hotpink";

    setTimeout(() => {

        heartScene.classList.add("hidden");

        letter.classList.remove("hidden");

        hearts();

    }, 1400);

});

// ===== Falling Hearts =====
function hearts() {

    setInterval(() => {

        let heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-40px";
        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";
        heart.style.opacity = Math.random();
        heart.style.pointerEvents = "none";
        heart.style.animation =
            "fall 6s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 350);

}

// ===== Play Again =====
again.addEventListener("click", () => {

    location.reload();

});

// ===== Falling Animation =====
const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{

transform:translateY(-30px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);