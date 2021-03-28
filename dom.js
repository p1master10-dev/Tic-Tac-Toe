
function reload(){
    location.reload();
}


var checker = setInterval( function(){

    if(box4.innerHTML == player1OX_show && box5.innerHTML == player1OX_show && box6.innerHTML == player1OX_show){
        console.log("GAME FINISHED");
        myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
        myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
        myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
        clearInterval(checker);
        clearInterval(forever);
        box1 = 0;
        box2 = 0;
        box3 = 0;
        box4 = 0;
        box5 = 0;
        box6 = 0;
        box7 = 0;
        box8 = 0;
        box9 = 0;

        document.getElementById('box4').style.background = "lightgrey";
        document.getElementById('box5').style.background = "lightgrey";
        document.getElementById('box6').style.background = "lightgrey";

        document.getElementById("player-text__display-text").style.display = "none";
        myElement.style.float = "none";

        document.getElementById('box_message').scrollTo(0 , 200);
    }else {
        if(box4.innerHTML == player2OX_show && box5.innerHTML == player2OX_show && box6.innerHTML == player2OX_show){
            console.log("GAME FINISHED");
            myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
            myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
            myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
            clearInterval(forever);
            box1 = 0;
            box2 = 0;
            box3 = 0;
            box4 = 0;
            box5 = 0;
            box6 = 0;
            box7 = 0;
            box8 = 0;
            box9 = 0;

            document.getElementById('box4').style.background = "lightgrey";
            document.getElementById('box5').style.background = "lightgrey";
            document.getElementById('box6').style.background = "lightgrey";


            document.getElementById("player-text__display-text").style.display = "none";
            myElement.style.float = "none";

            document.getElementById('box_message').scrollTo(0 , 200);
        }else{
            if(box1.innerHTML == player1OX_show && box2.innerHTML == player1OX_show && box3.innerHTML == player1OX_show){
                console.log("GAME FINISHED");
                myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                clearInterval(checker);
                clearInterval(forever);
                box1 = 0;
                box2 = 0;
                box3 = 0;
                box4 = 0;
                box5 = 0;
                box6 = 0;
                box7 = 0;
                box8 = 0;
                box9 = 0;
        
                document.getElementById('box1').style.background = "lightgrey";
                document.getElementById('box2').style.background = "lightgrey";
                document.getElementById('box3').style.background = "lightgrey";
        
                document.getElementById("player-text__display-text").style.display = "none";
                myElement.style.float = "none";

                document.getElementById('box_message').scrollTo(0 , 200);
            }else {
                if(box1.innerHTML == player2OX_show && box2.innerHTML == player2OX_show && box3.innerHTML == player2OX_show){
                    console.log("GAME FINISHED");
                    myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                    myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                    myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                    clearInterval(forever);
                    box1 = 0;
                    box2 = 0;
                    box3 = 0;
                    box4 = 0;
                    box5 = 0;
                    box6 = 0;
                    box7 = 0;
                    box8 = 0;
                    box9 = 0;
        
                    document.getElementById('box1').style.background = "lightgrey";
                    document.getElementById('box2').style.background = "lightgrey";
                    document.getElementById('box3').style.background = "lightgrey";
        
        
                    document.getElementById("player-text__display-text").style.display = "none";
                    myElement.style.float = "none";

                    document.getElementById('box_message').scrollTo(0 , 200);
                }else{
                    if(box7.innerHTML == player1OX_show && box8.innerHTML == player1OX_show && box9.innerHTML == player1OX_show){
                        console.log("GAME FINISHED");
                        myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                        myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                        myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                        clearInterval(checker);
                        clearInterval(forever);
                        box1 = 0;
                        box2 = 0;
                        box3 = 0;
                        box4 = 0;
                        box5 = 0;
                        box6 = 0;
                        box7 = 0;
                        box8 = 0;
                        box9 = 0;
                
                        document.getElementById('box7').style.background = "lightgrey";
                        document.getElementById('box8').style.background = "lightgrey";
                        document.getElementById('box9').style.background = "lightgrey";
                
                        document.getElementById("player-text__display-text").style.display = "none";
                        myElement.style.float = "none";

                        document.getElementById('box_message').scrollTo(0 , 200);                    
                    }else {
                        if(box7.innerHTML == player2OX_show && box8.innerHTML == player2OX_show && box9.innerHTML == player2OX_show){
                            console.log("GAME FINISHED");
                            myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                            myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                            myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                            clearInterval(forever);
                            box1 = 0;
                            box2 = 0;
                            box3 = 0;
                            box4 = 0;
                            box5 = 0;
                            box6 = 0;
                            box7 = 0;
                            box8 = 0;
                            box9 = 0;
                
                            document.getElementById('box7').style.background = "lightgrey";
                            document.getElementById('box8').style.background = "lightgrey";
                            document.getElementById('box9').style.background = "lightgrey";
                
                
                            document.getElementById("player-text__display-text").style.display = "none";
                            myElement.style.float = "none";

                            document.getElementById('box_message').scrollTo(0 , 200);
                        }else{
                            if(box1.innerHTML == player1OX_show && box4.innerHTML == player1OX_show && box7.innerHTML == player1OX_show){
                                console.log("GAME FINISHED");
                                myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                                myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                clearInterval(checker);
                                clearInterval(forever);
                                box1 = 0;
                                box2 = 0;
                                box3 = 0;
                                box4 = 0;
                                box5 = 0;
                                box6 = 0;
                                box7 = 0;
                                box8 = 0;
                                box9 = 0;
                        
                                document.getElementById('box1').style.background = "lightgrey";
                                document.getElementById('box4').style.background = "lightgrey";
                                document.getElementById('box7').style.background = "lightgrey";
                        
                                document.getElementById("player-text__display-text").style.display = "none";
                                myElement.style.float = "none";

                                document.getElementById('box_message').scrollTo(0 , 200);
                            }else {
                                if(box1.innerHTML == player2OX_show && box4.innerHTML == player2OX_show && box7.innerHTML == player2OX_show){
                                    console.log("GAME FINISHED");
                                    myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                    myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                                    myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                    clearInterval(forever);
                                    box1 = 0;
                                    box2 = 0;
                                    box3 = 0;
                                    box4 = 0;
                                    box5 = 0;
                                    box6 = 0;
                                    box7 = 0;
                                    box8 = 0;
                                    box9 = 0;
                        
                                    document.getElementById('box1').style.background = "lightgrey";
                                    document.getElementById('box4').style.background = "lightgrey";
                                    document.getElementById('box7').style.background = "lightgrey";
                        
                        
                                    document.getElementById("player-text__display-text").style.display = "none";
                                    myElement.style.float = "none";

                                    document.getElementById('box_message').scrollTo(0 , 200);
                                }else{
                                    if(box3.innerHTML == player1OX_show && box6.innerHTML == player1OX_show && box9.innerHTML == player1OX_show){
                                        console.log("GAME FINISHED");
                                        myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                        myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                                        myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                        clearInterval(checker);
                                        clearInterval(forever);
                                        box1 = 0;
                                        box2 = 0;
                                        box3 = 0;
                                        box4 = 0;
                                        box5 = 0;
                                        box6 = 0;
                                        box7 = 0;
                                        box8 = 0;
                                        box9 = 0;
                                
                                        document.getElementById('box3').style.background = "lightgrey";
                                        document.getElementById('box6').style.background = "lightgrey";
                                        document.getElementById('box9').style.background = "lightgrey";
                                
                                        document.getElementById("player-text__display-text").style.display = "none";
                                        myElement.style.float = "none";
        
                                        document.getElementById('box_message').scrollTo(0 , 200);
                                    }else {
                                        if(box3.innerHTML == player2OX_show && box6.innerHTML == player2OX_show && box9.innerHTML == player2OX_show){
                                            console.log("GAME FINISHED");
                                            myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                            myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                                            myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                            clearInterval(forever);
                                            box1 = 0;
                                            box2 = 0;
                                            box3 = 0;
                                            box4 = 0;
                                            box5 = 0;
                                            box6 = 0;
                                            box7 = 0;
                                            box8 = 0;
                                            box9 = 0;
                                
                                            document.getElementById('box3').style.background = "lightgrey";
                                            document.getElementById('box6').style.background = "lightgrey";
                                            document.getElementById('box9').style.background = "lightgrey";
                                
                                
                                            document.getElementById("player-text__display-text").style.display = "none";
                                            myElement.style.float = "none";
        
                                            document.getElementById('box_message').scrollTo(0 , 200);
                                        }else{
                                            if(box2.innerHTML == player1OX_show && box5.innerHTML == player1OX_show && box8.innerHTML == player1OX_show){
                                                console.log("GAME FINISHED");
                                                myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                                myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                                                myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                                clearInterval(checker);
                                                clearInterval(forever);
                                                box1 = 0;
                                                box2 = 0;
                                                box3 = 0;
                                                box4 = 0;
                                                box5 = 0;
                                                box6 = 0;
                                                box7 = 0;
                                                box8 = 0;
                                                box9 = 0;
                                        
                                                document.getElementById('box2').style.background = "lightgrey";
                                                document.getElementById('box5').style.background = "lightgrey";
                                                document.getElementById('box8').style.background = "lightgrey";
                                        
                                                document.getElementById("player-text__display-text").style.display = "none";
                                                myElement.style.float = "none";
                
                                                document.getElementById('box_message').scrollTo(0 , 200);
                                            }else {
                                                if(box2.innerHTML == player2OX_show && box5.innerHTML == player2OX_show && box8.innerHTML == player2OX_show){
                                                    console.log("GAME FINISHED");
                                                    myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                                    myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                                                    myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                                    clearInterval(forever);
                                                    box1 = 0;
                                                    box2 = 0;
                                                    box3 = 0;
                                                    box4 = 0;
                                                    box5 = 0;
                                                    box6 = 0;
                                                    box7 = 0;
                                                    box8 = 0;
                                                    box9 = 0;
                                        
                                                    document.getElementById('box2').style.background = "lightgrey";
                                                    document.getElementById('box5').style.background = "lightgrey";
                                                    document.getElementById('box8').style.background = "lightgrey";
                                        
                                        
                                                    document.getElementById("player-text__display-text").style.display = "none";
                                                    myElement.style.float = "none";
                
                                                    document.getElementById('box_message').scrollTo(0 , 200);
                                                }else{
                                                    if(box1.innerHTML == player1OX_show && box5.innerHTML == player1OX_show && box9.innerHTML == player1OX_show){
                                                        console.log("GAME FINISHED");
                                                        myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                                        myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                                                        myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                                        clearInterval(checker);
                                                        clearInterval(forever);
                                                        box1 = 0;
                                                        box2 = 0;
                                                        box3 = 0;
                                                        box4 = 0;
                                                        box5 = 0;
                                                        box6 = 0;
                                                        box7 = 0;
                                                        box8 = 0;
                                                        box9 = 0;
                                                
                                                        document.getElementById('box1').style.background = "lightgrey";
                                                        document.getElementById('box5').style.background = "lightgrey";
                                                        document.getElementById('box9').style.background = "lightgrey";
                                                
                                                        document.getElementById("player-text__display-text").style.display = "none";
                                                        myElement.style.float = "none";
                        
                                                        document.getElementById('box_message').scrollTo(0 , 200);
                                                    }else {
                                                        if(box1.innerHTML == player2OX_show && box5.innerHTML == player2OX_show && box9.innerHTML == player2OX_show){
                                                            console.log("GAME FINISHED");
                                                            myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                                            myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                                                            myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                                            clearInterval(forever);
                                                            box1 = 0;
                                                            box2 = 0;
                                                            box3 = 0;
                                                            box4 = 0;
                                                            box5 = 0;
                                                            box6 = 0;
                                                            box7 = 0;
                                                            box8 = 0;
                                                            box9 = 0;
                                                
                                                            document.getElementById('box1').style.background = "lightgrey";
                                                            document.getElementById('box5').style.background = "lightgrey";
                                                            document.getElementById('box9').style.background = "lightgrey";
                                                
                                                
                                                            document.getElementById("player-text__display-text").style.display = "none";
                                                            myElement.style.float = "none";
                        
                                                            document.getElementById('box_message').scrollTo(0 , 200);
                                                        }else{
                                                            if(box3.innerHTML == player1OX_show && box5.innerHTML == player1OX_show && box7.innerHTML == player1OX_show){
                                                                console.log("GAME FINISHED");
                                                                myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                                                myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player1 + ' Won the GAME !!   ⚬</h2>';
                                                                myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                                                clearInterval(checker);
                                                                clearInterval(forever);
                                                                box1 = 0;
                                                                box2 = 0;
                                                                box3 = 0;
                                                                box4 = 0;
                                                                box5 = 0;
                                                                box6 = 0;
                                                                box7 = 0;
                                                                box8 = 0;
                                                                box9 = 0;
                                                        
                                                                document.getElementById('box3').style.background = "lightgrey";
                                                                document.getElementById('box5').style.background = "lightgrey";
                                                                document.getElementById('box7').style.background = "lightgrey";
                                                        
                                                                document.getElementById("player-text__display-text").style.display = "none";
                                                                myElement.style.float = "none";
                                
                                                                document.getElementById('box_message').scrollTo(0 , 200);
                                                            }else {
                                                                if(box3.innerHTML == player2OX_show && box5.innerHTML == player2OX_show && box7.innerHTML == player2OX_show){
                                                                    console.log("GAME FINISHED");
                                                                    myElement.innerHTML += '<h2 id="game-finished" class="styling-compute">⚬   Game Finished !   ⚬</h2>';
                                                                    myElement.innerHTML += '<h2 id="game-finished-user" class="styling-compute">⚬   ' + player2 + ' Won the GAME !!   ⚬</h2>';
                                                                    myElement.innerHTML += '<button id="game-finished-user" class="styling-compute" onclick="reload()"><h2>RESET</h2></button>';
                                                                    clearInterval(forever);
                                                                    box1 = 0;
                                                                    box2 = 0;
                                                                    box3 = 0;
                                                                    box4 = 0;
                                                                    box5 = 0;
                                                                    box6 = 0;
                                                                    box7 = 0;
                                                                    box8 = 0;
                                                                    box9 = 0;
                                                        
                                                                    document.getElementById('box3').style.background = "lightgrey";
                                                                    document.getElementById('box5').style.background = "lightgrey";
                                                                    document.getElementById('box7').style.background = "lightgrey";
                                                        
                                                        
                                                                    document.getElementById("player-text__display-text").style.display = "none";
                                                                    myElement.style.float = "none";
                                
                                                                    document.getElementById('box_message').scrollTo(0 , 200);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} , 100);

