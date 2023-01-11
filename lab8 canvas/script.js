// array to store the balls
let balls = [];

// get the canvas and buttons
let canvas = document.getElementById("canvas");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");

// set the canvas dimensions to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get the canvas context for drawing
let ctx = canvas.getContext("2d");

// create a ball object with x, y, velocityX, velocityY, and radius properties
function Ball(x, y, velocityX, velocityY, radius) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = radius;
}

// function to draw a ball on the canvas
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

// function to update the ball's position based on its velocity
Ball.prototype.update = function() {
    this.x += this.velocityX;
    this.y += this.velocityY;
}

// function to check if the ball hits the edge of the canvas
Ball.prototype.checkBounds = function() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.velocityX = -this.velocityX;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.velocityY = -this.velocityY;
    }
}

// function to check the distance between two balls
function checkDistance(ball1, ball2) {
    let xDistance = ball2.x - ball1.x;
    let yDistance = ball2.y - ball1.y;
    let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    if (distance < Y) {
        // draw a line between the two balls
        ctx.beginPath();
        ctx.moveTo(ball1.x,
            ball1.y);
ctx.lineTo(ball2.x, ball2.y);
ctx.strokeStyle = "black";
ctx.stroke();
}
}

// function to create and add X number of balls to the balls array
function createBalls(X) {
for (let i = 0; i < X; i++) {
let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;
let velocityX = (Math.random() - 0.5) * 5;
let velocityY = (Math.random() - 0.5) * 5;
let radius = 20;
let ball = new Ball(x, y, velocityX, velocityY, radius);
balls.push(ball);
}
}

// function to animate the balls on the canvas
function animate() {
requestAnimationFrame(animate);

// clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// loop through the balls array
for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].checkBounds();

    // check the distance between this ball and every other ball
    for (let j = i + 1; j < balls.length; j++) {
        checkDistance(balls[i], balls[j]);
    }
}
}

// define Y as 20% of the canvas width
let Y = canvas.width * 0.2;

// create and add X number of balls to the balls array (X is defined by the user)
let X = 10;
createBalls(X);

// start the animation when the start button is clicked
startButton.addEventListener("click", function() {
animate();
});

// reset the position of the balls when the reset button is clicked
resetButton.addEventListener("click", function() {
balls = [];
createBalls(X);
});