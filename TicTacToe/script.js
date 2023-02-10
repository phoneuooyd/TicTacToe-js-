let q = 0;
let point = ['0','0','0','0','0','0','0','0','0'];
ifwin = false;
p1 = 0;
p2 = 0;
// document.addEventListener('DOMContentLoaded', player());
        function newGame(){
            for (let i = 0; i < point.length; i++) {
                let bh = document.getElementById(i).style.backgroundImage="url(images/)"; 
                point[i] = '0';    
            }
            ifwin = false;
            document.getElementById("winner").innerHTML = "";
        }

        function win(){
            
            if(point[0] == 'x' && point[1] == 'x' && point[2] == 'x'||
               point[3] == 'x' && point[4] == 'x' && point[5] == 'x'||
               point[6] == 'x' && point[7] == 'x' && point[8] == 'x'||
               point[0] == 'x' && point[3] == 'x' && point[6] == 'x'||
               point[1] == 'x' && point[4] == 'x' && point[7] == 'x'||
               point[2] == 'x' && point[5] == 'x' && point[8] == 'x'||
               point[0] == 'x' && point[4] == 'x' && point[8] == 'x'||
               point[2] == 'x' && point[4] == 'x' && point[6] == 'x')
               {
                    document.getElementById("winner").innerHTML = "Gracz 2 wygrał!";
                    p2+=1;
                    document.getElementById('pt2').innerHTML = p2;
                    ifwin = true;
               }
            if(point[0] == 'o' && point[1] == 'o' && point[2] == 'o'||
               point[3] == 'o' && point[4] == 'o' && point[5] == 'o'||
               point[6] == 'o' && point[7] == 'o' && point[8] == 'o'||
               point[0] == 'o' && point[3] == 'o' && point[6] == 'o'||
               point[1] == 'o' && point[4] == 'o' && point[7] == 'o'||
               point[2] == 'o' && point[5] == 'o' && point[8] == 'o'||
               point[0] == 'o' && point[4] == 'o' && point[8] == 'o'||
               point[2] == 'o' && point[4] == 'o' && point[6] == 'o')
               {
                    document.getElementById("winner").innerHTML = "Gracz 1 wygrał!";
                    p1+=1;
                    document.getElementById('pt1').innerHTML = p1;
                    ifwin = true;
               }
            
        }

        function player(){
            document.getElementById("curr_play").innerHTML = "Gracz 1";
                if (q % 2 == 0) {
                    document.getElementById("curr_play").innerHTML = "Gracz 1";
                }
                else {
                    document.getElementById("curr_play").innerHTML = "Gracz 2";
                }
        }

        function change(id){    
            gameSeq = 0;
            if(ifwin == false){
                if (gameSeq == 0 && point[id] == "0") {
                    if(q % 2 == 0){
                        let bh = document.getElementById(id).style.backgroundImage="url(images/img2.jpg)"; 
                        point[id] = 'o';
                    }
                    else{
                        let bh = document.getElementById(id).style.backgroundImage="url(images/img.jpg)";
                        point[id] = 'x';
                    }
                    q = q +1;
                    gameSeq+=1;
                }
                if (gameSeq == 1) {
                    player()
                    win();
                    gameSeq = 0;
                }
            }
        }
                