// Name: Milan Anil Anthore
// File: main.js
// Date: 20 March 2024
// A programme which creates bouncing ball demo

// setup canvas\
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
  
      function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      function randomRGB() {
        return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
      }

      // Ball class is defined here
      class Ball {
        constructor(x, y, velX, velY, color, size) {
          this.x = x;
          this.y = y;
          this.velX = velX;
          this.velY = velY;
          this.color = color;
          this.size = size;
        }
        
        // draw method draws the ball
        draw() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fill();
        }
        
        // the update method updates the position of ball
        update() {
          if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -this.velX;
          }
  
          if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -this.velY;
          }
  
          this.x += this.velX;
          this.y += this.velY;
        }
  
        // It is a method which detects the collision with other balls
        collisionDetect() {
          for (const ball of balls) {
            if (this !== ball) {
              const dx = this.x - ball.x;
              const dy = this.y - ball.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
  
              if (distance < this.size + ball.size) {
                ball.color = this.color = randomRGB();
              }
            }
          }
        }
      }

    // An array is created to hold the balls.
      const balls = [];
   
     // This loop generates balls with random attributes
      while (balls.length < 25) {
        const size = random(10, 20);
        const ball = new Ball(
          random(0 + size, width - size),
          random(0 + size, height - size),
          random(-7, 7),
          random(-7, 7),
          randomRGB(),
          size
        );
        balls.push(ball);
      }

      // This is the loop where the animation occurs
      function loop() {
        ctx.fillStyle = "rgb(0, 0, 0, 0.25)";
        ctx.fillRect(0, 0, width, height);
  
        // This updates and draw each ball and also checks for collision
        for (const ball of balls) {
          ball.draw();
          ball.update();
          ball.collisionDetect();
        }
  
        requestAnimationFrame(loop);
      }
  
      // Starts the animation loop
      loop();

