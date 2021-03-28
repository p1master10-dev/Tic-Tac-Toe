var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var playerNumber = 0;

const player1 = prompt('Enter Player 1 name');
const player2 = prompt('Enter Player 2 name');

if(player1 == ""){
    
}else{
    playerNumber = playerNumber += 1;
}
if(player2 == ""){
   
}else{
    playerNumber = playerNumber += 1;
}

const myElement = document.getElementById("box_message");

if(playerNumber == 2){
    myElement.innerHTML += '<h3 id="game-started" class="styling-compute">⚬   Game Started !!   ⚬</h3>'
}

const player_chance = [player1 , player2];
const playerOX = ["X" , "O"];

var player_chance_show = Math.floor(Math.random() * player_chance.length);

const player1OX = Math.floor(Math.random() * playerOX.length);
const player2OX = Math.floor(Math.random() * playerOX.length);

var player1OX_show = playerOX[player1OX];
var player2OX_show = playerOX[player2OX];

if(player1OX_show == "O" && player2OX_show == "O"){
    player1OX_show = "X";
}else{
    if(player1OX_show == "X" && player2OX_show == "X"){
        player1OX_show = "O";
    }
}

console.log(player_chance[player_chance_show]);
var real1 = console.log(player1 + "(" + player1OX_show + ")");
var real2 = console.log(player2 + "(" + player2OX_show + ")");

myElement.innerHTML += '<h2 id="user1-selections" class="styling-compute">' + player1 + '(' + player1OX_show + ')</h2>';
myElement.innerHTML += '<h2 id="user2-selections" class="styling-compute">' + player2 + '(' + player2OX_show + ')</h2>'

const player = document.getElementById("player_chance");

player.innerHTML = player_chance[player_chance_show];




var forever = setInterval( function(){










   if(player.innerHTML == player1){
        box1.onclick = function(){
            if(box1.innerHTML == ""){
                box1.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box2.onclick = function(){
            if(box2.innerHTML == ""){
                box2.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box2.onclick = function(){
            if(box2.innerHTML == ""){
                box2.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }
    
    if(player.innerHTML == player1){
        box3.onclick = function(){
            if(box3.innerHTML == ""){
                box3.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box4.onclick = function(){
            if(box4.innerHTML == ""){
                box4.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box5.onclick = function(){
            if(box5.innerHTML == ""){
                box5.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box6.onclick = function(){
            if(box6.innerHTML == ""){
                box6.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box7.onclick = function(){
            if(box7.innerHTML == ""){
                box7.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box8.onclick = function(){
            if(box8.innerHTML == ""){
                box8.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }

    if(player.innerHTML == player1){
        box9.onclick = function(){
            if(box9.innerHTML == ""){
                box9.innerHTML = player1OX_show;
                player.innerHTML = player2;
            }
        };
    }















    if(player.innerHTML == player2){
        box1.onclick = function(){
            if(box1.innerHTML == ""){
            box1.innerHTML = player2OX_show;
            player.innerHTML = player1;
            }
        };
    }

    if(player.innerHTML == player2){
        box2.onclick = function(){
            if(box2.innerHTML == ""){
            box2.innerHTML = player2OX_show;
            player.innerHTML = player1;
            }
        };

        }

        if(player.innerHTML == player2){
            box3.onclick = function(){
                if(box3.innerHTML == ""){
                box3.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

        if(player.innerHTML == player2){
            box4.onclick = function(){
                if(box4.innerHTML == ""){
                box4.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

        if(player.innerHTML == player2){
            box5.onclick = function(){
                if(box5.innerHTML == ""){
                box5.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

        if(player.innerHTML == player2){
            box6.onclick = function(){
                if(box6.innerHTML == ""){
                box6.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

        if(player.innerHTML == player2){
            box7.onclick = function(){
                if(box7.innerHTML == ""){
                box7.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

        if(player.innerHTML == player2){
            box8.onclick = function(){
                if(box8.innerHTML == ""){
                box8.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

        if(player.innerHTML == player2){
            box9.onclick = function(){
                if(box9.innerHTML == ""){
                box9.innerHTML = player2OX_show;
                player.innerHTML = player1;
                }
            };
        }

    } , 100);