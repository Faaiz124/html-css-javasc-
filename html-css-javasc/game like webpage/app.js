var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");

// Store the original image sources
var originalImg1Src = img1.src;
var originalImg2Src = img2.src;

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "ArrowRight") {
        movePlayer(player1, -20);
        changeImage(img1, "pic/billyrunn.gif", "250px");
    } else if (key === "ArrowLeft") {
        movePlayer(player1, 20);
        // changeImage(img1, "pic/billyrunn.gif", "250px");
    } else if (key === "m") {
        changeImage(img1, "pic/billy-double-dragon-neogeo-fireball.gif", "300px");

        setTimeout(() => {
            changeImage(img1, originalImg1Src);
        }, 1000);

    } else if (key === "d") {
        movePlayer(player2, -20);
        changeImage(img2, "pic/chip-stancelarge.gif", "230px");
    } else if (key === "d") {
        movePlayer(player2, -20);
        changeImage(img2, "pic/chip-stancelarge.gif", "230px");
    } else if (key === "1") {

        changeImage(img2, "pic/raidenjumpkick.gif", "270px");

        setTimeout(() => {
            changeImage(img2, originalImg2Src);
        }, 1000);

    } else if (key === "a") {
        movePlayer(player2, 20);
        changeImage(img2, "pic/chip-stancelarge.gif", "230px");
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key;
    if (key === "ArrowRight" || key === "ArrowLeft") {
        changeImage(img1, originalImg1Src, "");
    } else if (key === "d" || key === "a") {
        changeImage(img2, originalImg2Src, "");
    }
});

function movePlayer(player, addingPX) {
    let moveRight = parseInt(player.style.right) || 0;
    moveRight += addingPX;

    // Restrict player movement within the specified range
    if (moveRight < 0) {
        moveRight = 0;
    } else if (moveRight > 1140) {
        moveRight = 1160;
    } else if (moveRight === 1200 && addingPX > 0) {
        // Stop adding when moveRight reaches 1200
        return;
    }

    player.style.right = moveRight + "px";
}

function changeImage(imgElement, newSrc, height) {
    imgElement.src = newSrc;
    imgElement.style.height = height;
}




window.onload = function() {
    var guid = "player-1 movement = arrow keys <br />player-1 Power = m <br /><br />player-2 movement = A and D<br /> player-2 Power = 1";
    Swal.fire({
        title: guid,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
    var count = 60;
    var countdownElement = document.getElementById('countdown');

    var countdownInterval = setInterval(function() {
        countdownElement.innerHTML = count;
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            var GameOver = "TIME OVER";
            Swal.fire({
                title: GameOver,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }, 1000);
}

// function() {

//     var guid = "player-1 movement = arrow keys <br />player-1 Power = m <br /><br />player-2 movement = A and D<br /> player-2 Power = 1";
//     Swal.fire({
//         title: guid,
//         showClass: {
//             popup: 'animate__animated animate__fadeInDown'
//         },
//         hideClass: {
//             popup: 'animate__animated animate__fadeOutUp'
//         }
//     })
// }