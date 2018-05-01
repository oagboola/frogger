// Enemies our player must avoid
var score = 0;
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if(Math.abs(player.y - this.y) <= 50 && Math.abs(player.x - this.x) <= 50){
    player.y = 400;
    player.x = 200;
    if (score === 0){
        score = 0;
    }
    else {
        score -= 5;
    }
    $('#input').val(score)
   }
   else{
    if (this.x < 505) {
        this.x = this.x + dt*this.speed;
    }
    else {
        this.x = 0;
    }
}
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.playerImage = 'images/char-boy.png';
};

Player.prototype.update = function() {
    if(Math.abs(player.y - gem_green.y) <= 50 && Math.abs(player.x - gem_green.x) <= 50) {
        score += gem_green.points;
        gem_green.y = -100;
        gem_green.x = -100;
    }

    if(Math.abs(player.y - gem_orange.y) <= 50 && Math.abs(player.x - gem_orange.x) <= 50) {
        score += gem_orange.points;
        gem_orange.y = -100;
        gem_orange.x = -100;
    }
};

Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.playerImage), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys) {
    switch(allowedKeys) {
    case "up":
    if(this.y > 10) {
        this.y = this.y - 80;
    }
    if(this.y <= 0) {
        //this.x === 200;
        score += 5;
        $('#input').val(score)
        this.y = 400;
        this.x = 200;
    }
    break;
    case "down":
    if(this.y < 400) {
        this.y = this.y + 100;
    }
    break;
    case "right":
    if(this.x < 400)
    this.x = this.x + 100;
    break;
    case "left":
    if(this.x > 0){
        this.x = this.x - 100;
    }
    break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(100, 60, 400);
var enemy2 = new Enemy(100, 144, 250);
var enemy3 = new Enemy(100, 228, 300);
var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player(200,400);
var player = new Player(200,400);

var playerImage;
$(document).ready(function() {
    $('div').click(function(){
        if ($(this).attr('id') === "image1") {
            playerImage = $(this).find('img').attr('src');
            player.playerImage = playerImage;
        }
        else if ($(this).attr('id') === "image2") {
            playerImage = $(this).find('img').attr('src');
            player.playerImage = playerImage;
        }

        else if ($(this).attr('id') === "image3") {
            playerImage = $(this).find('img').attr('src');
            player.playerImage = playerImage;
        }

        else if ($(this).attr('id') === "image4") {
            playerImage = $(this).find('img').attr('src');
            player.playerImage = playerImage;
        }

        else if ($(this).attr('id') === "image4") {
            playerImage = $(this).find('img').attr('src');
            player.playerImage = playerImage;
        }

        else if ($(this).attr('id') === "image5") {
            playerImage = $(this).find('img').attr('src');
            player.playerImage = playerImage;
        }

    });
});

var Gems = function(x,y,gem,points) {
    this.x = x;
    this.y = y;
    this.points = points;
    this.gem = gem;
};

Gems.prototype.render = function() {
     ctx.drawImage(Resources.get(this.gem), this.x, this.y);
};
Gems.prototype.update = function() {};

var gem_green = new Gems(200,120,'images/Gem Green.png', 25);
var gem_orange = new Gems(20, 228,'images/Gem Orange.png',50);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});