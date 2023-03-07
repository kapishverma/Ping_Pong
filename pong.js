const moveSound = new Audio('media/move.mp3');
const hitsound = new Audio('media/hit.mp3');
const gameOverSound = new Audio('media/gameover.wav');

var red = document.querySelector(".rod_red");
var yellow = document.querySelector(".rod_yellow") ;
const ball = document.getElementById("ball");
var displayScore = document.getElementById('score');
var v_x = document.getElementById("vx");
var v_y = document.getElementById("vy");

var currentScore = 0;
var velocity_x = 4;
var velocity_y = -4;

red.style.left = "440px";
yellow.style.left = "440px";
ball.style.left = "488px";
ball.style.top = "500px";

var score = 0;

const loop = setInterval(gameEngine, 20);

function gameEngine() {
        
    var ball_x = parseFloat(ball.style.left) + velocity_x;
    var ball_y = parseFloat(ball.style.top) + velocity_y;
    
         //computer

         if(ball_x >= 47 && ball_x <= 932){
          red.style.left = (ball_x - 47 ) + "px";    
         }

    // is there any collision with spikes

    if (ball_y <= 25 ){
        velocity_y *= (-1);  // velocity reverse
        velocity_x =  Math.sign(velocity_x)*Math.round(4 + (6 - 4) * Math.random()) ;
        v_x.innerHTML = `Velocity-X : ${velocity_x}`
        // v_y.innerHTML = `Velocity-Y : ${velocity_y}`
    }
      else if(ball_y >= 500){

        if (ball_x < ( parseFloat(yellow.style.left) - 13) || ball_x > (parseFloat(yellow.style.left)  + 173)) {

            gameOverSound.play();
            currentScore = 0;
            displayScore.innerHTML = `Score : ${currentScore}`;

            alert("Game over!!! Press OK to play the game  && Arraw_left and right Keys For Movement");
            
            red.style.left = "440px";
            yellow.style.left = "420px";
            ball_x = 488;
            ball_y = 500;
            
            // velocity_x = 3;
            velocity_y = -4;
            currentScore = 0;
            displayScore.innerHTML = `Score : ${currentScore}`;
            v_x.innerHTML = `Velocity-X : ${velocity_x}`
            // v_y.innerHTML = `Velocity-Y : ${velocity_y}`

        } else {
            //  speed badhega
            currentScore++;
            velocity_y = (velocity_y)*(-1);  // velocity reverse
            velocity_x =  Math.sign(velocity_x)*Math.round(4 + (6 - 4) * Math.random()) ;

            displayScore.innerHTML = `Score : ${currentScore}`;
            v_x.innerHTML = `Velocity-X : ${velocity_x}`
            // v_y.innerHTML = `Velocity-Y : ${velocity_y}`
        }
    }

    // nahi laga and kya diwal se laga?

    if (ball_x <= 0 || ball_x >= 975) {
        velocity_x *= (-1);
        v_x.innerHTML = `Velocity-X : ${velocity_x}`
    }


    ball.style.left = ball_x + "px";
    ball.style.top = ball_y + "px";

};

window.addEventListener('keydown', element => {
    switch (element.key) {

        case "a":
            moveSound.play();
            leftMove();
            break;

        case "d":
            moveSound.play();
            rightMove();
            break;

        case "ArrowLeft":
            moveSound.play();
            leftMove();
            break;

        case "ArrowRight":
            moveSound.play();
            rightMove();
            break;
    }
});


function leftMove() {
    var horizontal = parseFloat(yellow.style.left );
    if (horizontal <= 10) {
        return;
    } else {
        yellow.style.left  = (parseFloat(yellow.style.left ) - 20) + "px";
    }
};

function rightMove() {
    var horizontal = parseFloat(yellow.style.left );
    if (horizontal >= 840) {
        return;
    } else {
        yellow.style.left  = (parseFloat(yellow.style.left ) + 20) + "px";
    }
};
