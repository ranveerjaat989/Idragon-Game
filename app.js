
let endgame=0;
let dino1=document.querySelector('.game-dino');
let dragon=document.querySelector('.game-dragon');
let gameOver=document.querySelector('.game-title h2');
let dx,dy,drx,dry,offsetX, offsetY,gameScore,anidur, dino,current,dinoX,score
// let dy
// let drx
// let dry
// let offsetX
// let offsetY
let dragon1=document.querySelector('.game-dragon');
// let gameScore
// let anidur
let song= new Audio('./icon/gameBackground.mp3');
let outSong=new Audio('./icon/gameover.mp3');
// let dino
// let current
// let score
// let dinoX

const start=document.querySelector('.StartButton');

dragon1.classList.remove('run-dragon');
dragon1.style.left="800px";
start.addEventListener('click',()=>{
    if(start.innerText!="Restart"){
        start.style.display="none";
        dragon1.classList.add('run-dragon');
        gameCode();
    }
    else{
       gameOver.style.visibility='hidden';
        dragon1.classList.add('run-dragon');
        dragon.style.animationDuration="6s"
        score=0;
        gameScore.innerText='Game Svore: '+score; 
        dinoleft1();
        gameCode();
        start.style.display="none";
        endgame=0;
    }
})
function dinoleft1(){
    dino.style.bottom='80px';
}

const gameCode=()=>{
     dino=document.querySelector('.game-dino');
    current=true;
   score=0;
 
    document.onkeydown= (e)=>{
        if(endgame!=1){
            outSong.pause();
            song.play();
        }
       
        if(e.keyCode==38)
        {
            console.log(e.keyCode);
            dino.classList.add('dino-up');
            
          
            setTimeout(()=>{
                dino.classList.remove('dino-up');
            },600)
          
        }
        else if(e.keyCode==39&&endgame!=1)
        {
           
            dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinoX+180+'px';
        }
        else if(e.keyCode==37&&endgame!=1)
        {
          dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinoX-180+'px';
        }
    }
    // song.autoplay();
    
    setInterval(()=>{
       //  dino1=document.querySelector('.game-dino');
      //  dragon=document.querySelector('.game-dragon');
        // gameOver=document.querySelector('.game-title h2');
        dx=parseInt(window.getComputedStyle(dino1,null).getPropertyValue('left'));
         dy=parseInt(window.getComputedStyle(dino1,null).getPropertyValue('top'));
     
       drx=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
         dry=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));
         offsetX=Math.abs(drx-dx);
          offsetY=Math.abs(dry-dy);
         if(offsetX<=120 && offsetY<=75){
            gameOver.style.visibility='visible';
            // dragon1=document.querySelector('.game-dragon');
            dragon1.classList.remove('run-dragon');
             dragon1.style.left=offsetX+100+'px';
             dinoleft0();
             dragon1.style.left="800px";
            //  dino1.style.display="none";
              endgame=1;
              song.pause();
              outSong.play();
              start.style.display="inline";
              start.innerText="Restart";
              setTimeout(()=>{
                outSong.pause();
              },6000);
         }
         else if(current&&offsetX<=100)
         {
            Score();
            current=false;
            setTimeout(()=>{
                current=true;
            },500)
            setTimeout(()=>{
                 anidur=parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
                if(anidur>=3.7){
                    console.log(anidur);
                    newdur=anidur-0.1;
                    dragon.style.animationDuration=newdur+'s';
                }
                else{
                    newdur=anidur+2;
                    dragon.style.animationDuration=newdur+'s';
                }
            },400)
         }
    },10)  
    function Score(){
        score++;
        gameScore=document.querySelector('.game-score');
        gameScore.innerText='Game Svore: '+score; 
    }
    function dinoleft0(){
        dino.style.bottom='-80px';
    }
   
}
   