//initial code for canvas 
var aa=innerHeight
var bb = innerWidth
var tr=true
var changer=0; 

import {joke,aboutme,activities} from "./data.js"
var activity=activities

var downl=true;

function createImage(imageSrc){
    const image= new Image()

 image.onload=function(){
    
}
  image.src= imageSrc
return image

}


var myAudio = new Audio('./music/mario.mp3'); 
var myAudio1 = new Audio('./music/jump.mp3'); 
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 1;
        this.play();
    }, false);
}

var dow=document.getElementById('pddf')
dow.href ='./pdf/thanks.pdf'
var credit=createImage('./img/credits.png')
var music=createImage('./img/music.png')
var flag =createImage('./img/flag.png')
var chess1=createImage('./img/chess12.png')
var signhobby =createImage('./img/signhobby.png')
var signcontactme =createImage('./img/signboard7.png')
var book=createImage('./img/book.png')
var platform= createImage('./img/platform.png')
var matlab =createImage('./img/matlab.png')
var charger=createImage('./img/charger.png')
var game1=createImage('./img/game11.png')
var game2=createImage('./img/game12.png')
var robot =createImage('./img/robot.png')
var skills =createImage('./img/signskills.png')
var signproject=createImage('./img/project1.png')
var cpp =createImage('./img/skillc.png')
var httml =createImage('./img/html.png')
var python =createImage('./img/python.png')
var background = createImage('./img/backg.png')

var signboard= createImage('./img/signboard.png')
var signboard1= createImage('./img/signboard2.png')
var perf=createImage('./img/perf10.png')
var perf1=createImage('./img/perf1.png')
var perf2=createImage('./img/perf3.png')
var ach=createImage('./img/signboard4.png')
var exp=createImage('./img/signboard5.png')
var born=createImage('./img/hawamahal.png')
var school=createImage('./img/school.png')
var ach1=createImage('./img/quiz.png')
var ach2=createImage('./img/chess.png')
var ach3=createImage('./img/robotics.png')
var ach4=createImage('./img/hackathon.png')
var exp1=createImage('./img/exprob1.png')
var exp2 =createImage('./img/exp2.png')
var exp3 =createImage('./img/tcsexp.png')
var linkedin=createImage('./img/linkedin.png')
var gmail=createImage('./img/gmail.png')
var github=createImage('./img/github.png')
var telegram=createImage('./img/telegram.png')


// sprite running 
const spriteleft=createImage( './img/spriteMarioRunLeft.png')
const spriteright=createImage('./img/spriteMarioRunRight.png')
const spritestandleft=createImage('./img/spriteMarioStandLeft.png')
const spritestandright=createImage('./img/spriteMarioStandRight.png')

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width= innerWidth;
canvas.height= innerHeight;

var jumpp=document.getElementById("d-up");
var texxt=document.getElementById("textareaa");
var leftb=document.getElementById("left-btn");
var rightb=document.getElementById("right-btn");
jumpp.onmousedown=jump;
jumpp.ontouchstart=jump;

leftb.onmousedown=leftbu;
rightb.onmousedown=rightbu;

leftb.onmouseup=leftbu1;
rightb.onmouseup=rightbu1;

leftb.ontouchstart=leftbu;
rightb.ontouchstart=rightbu;

leftb.ontouchend=leftbu1;
rightb.ontouchend=rightbu1;
jumpp.onmouseup=jump1;
jumpp.ontouchend=jump1;
var musicbutton=false

let xran = Math.floor((Math.random() * 6) );


const gravity=0.5; 

class Player{
    constructor (){
        this.speed=10
        this.position={
            x:100,
            y:0
        }
        this.velocity={
            x:0,
            y:1
        }
        this.scale = 0.27
        this.width = 370 * this.scale
        this.height = 353 * this.scale
        this.image=spritestandright
        this.frame=0
        this.sprites={
            stand:{
                right:spritestandright,
                left:spritestandleft,

                cropWidth:398,
                width: 398*0.25
            },
            run: {
                right: spriteright,
                left: spriteleft,
                cropWidth:398,
                width:398*0.25
            }

        }
        this.currentSprite=this.sprites.stand.right
        this.currentCropWidth=398

    }
    draw(){
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth*this.frame,0,this.currentCropWidth,353,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
           
        
    }
    update(){
        this.frame+=1
        if (this.frame>58 && (this.currentSprite == this.sprites.stand.right || this.currentSprite==this.sprites.stand.left)){
            this.frame=0;
        }
        else if (this.frame>28 &&( this.currentSprite==this.sprites.run.right || this.currentSprite==this.sprites.run.left)){
            this.frame=0;
        }
        this.draw()
        this.position.y+=this.velocity.y;
        this.position.x+=this.velocity.x;
        if(this.position.y+this.height+this.velocity.y<=canvas.height)
        {
            this.velocity.y+=gravity;
        }
        else{
            
        }
    }
}
class Platform{
    constructor({x,y,image}){
        this.position={
            x,
            y
        }
        this.image=image
        this.width=image.width
        this.height=576
       
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}

function drow(str="hello"){
        c.font = 'italic 40px serif';
        c.fillStyle="#275BE7"
        c.fillText(str,110,230)
        
    }

function drowmusic(img,x,y,w,h){
    c.drawImage(img,x,y,w,h)
}


class Clock{
    constructor(){
    
       
    }
     draw () {
        let time = (function () {
                let midnight = new Date();
                midnight.setHours(0);
                midnight.setMinutes(0);
                midnight.setSeconds(0);
                midnight.setMilliseconds(0);
                return Date.now() - midnight.getTime();
            })(),
            hours = time / (60 * 60 * 1000),
            minutes = hours * 60 % 60,
            seconds = minutes * 60 % 60,
            ct = {x: 110 , y: 110};
    
       
    
        c.lineCap = 'round';
    
        //secondHand();
        minuteHand();
        hourHand();
        face();
        
    
        function face () {
            // Border
            c.lineWidth = 5;
            c.strokeStyle = 'black';
            c.beginPath();
            c.arc(ct.x, ct.y, 100, 0, Math.PI * 2);
            c.stroke();
            
            
           
           
    
            // Dashes
            c.lineWidth = 3;
            for (let i = 0; i < 60; i++) {
                let r = 95, // radius of inner markings 
                    l = 5;
                c.strokeStyle = 'rgba(0, 0, 0, 0.25)';
                if (i % 5 === 0)
                    r -= l,
                    l *= 2,
                    c.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                let v = new Vector(r, Math.PI * 2 * (i / 60) - Math.PI / 2);
                c.beginPath();
                c.moveTo(v.getX() + ct.x, v.getY() + ct.y);
                v.setMag(r + l);
                c.lineTo(v.getX() + ct.x, v.getY() + ct.y);
                c.stroke();
            }
    
            // Numbers
            c.font = '18px Noto Sans';
            c.fillStyle = 'black';
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            for (let i = 1; i <= 12; i++) {
                // here 80 is the radius of number markings 
                let v = new Vector(80, Math.PI * 2 * (i / 12) - Math.PI / 2);
                // above 80 refer to the radius of the number of the clock 
                c.fillText(i, v.getX() + ct.x, v.getY() + ct.y);
            }
    
            // Center button
            c.beginPath();
            c.arc(ct.x, ct.y, 3.75, 0, Math.PI * 2);
            c.fillStyle = 'white';
            c.strokeStyle = 'black';
            c.lineWidth = 2.5;
            c.fill();
            c.stroke();
        }
    
        // function secondHand () {
        //     c.lineWidth = 1.5;
        //     c.strokeStyle = 'black';
        //     c.beginPath();
        //     let a = Math.PI * 2 * (seconds/60) - Math.PI / 2;
        //     // 
        //     let v = new Vector(80, a);
        //     let v2 = new Vector(-20, a);
        //     c.moveTo(v2.getX() + ct.x, v2.getY() + ct.y);
        //     c.lineTo(v.getX() + ct.x, v.getY() + ct.y);
        //     c.stroke();
        // }
    
        function minuteHand () {
            c.lineWidth = 4;
            c.strokeStyle = 'black';
            c.beginPath();
            let a = Math.PI *  (scrollOffset / 133.34) - Math.PI / 2;
            let v = new Vector(80, a);
            c.moveTo(ct.x, ct.y);
            c.lineTo(v.getX() + ct.x, v.getY() + ct.y);
            c.stroke();
        }
    
        function hourHand () {
            c.lineWidth = 4;
            c.strokeStyle = 'black';
            c.beginPath();
            let a = Math.PI *  (scrollOffset / 3200) - Math.PI / 2;
            let v = new Vector(60, a);
            c.moveTo(ct.x, ct.y);
            c.lineTo(v.getX() + ct.x, v.getY() + ct.y);
            c.stroke();
        }
    }
}




class GenericObject{
    constructor({x,y,image,height=1024,width=574}){
        this.position={
            x,
            y
        }
        this.image=image
        this.width=width
        this.height=height
       
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    
};
class GObject{
    constructor({x,y,image,height,width}){
        this.position={
            x,
            y
        }
        this.image=image
        this.width=width
        this.height=height
       
    }
    draww(){
        c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
    }
    
};





let platformImage=platform
let aa1=platformImage.height

let player =new Player();
let clock= new Clock()
let tt1=platformImage.width

let platforms = [ ];
let backgroundImage=background;

let genericObject=[]



let gObject=[]
let currentKey



const keys= {
    right:{
        pressed: false 
    },
    left:{
        pressed: false
    }
}
//player.draw();
let scrollOffset=0
var loader=document.getElementById("preloader");
init()


/// this function activate only if the player fall or dies 
function init(){

 platformImage=platform
 aa1=platformImage.height

 player =new Player();
 tt1=platformImage.width
 platforms = [new Platform({x:tt1*0-1,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*1-5,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*2 -7 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*3 + 200,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*4+198 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*5+196 ,y:aa-aa1,image:platformImage}),
    // this is for third level

    new Platform({x:tt1*6+396 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*7+394 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*8+392 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*9+590 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*10+588 ,y:aa-aa1,image:platformImage}),


    new Platform({x:tt1*11+586 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*12+784 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*13+782 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*14+780 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*15+1006 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*16+1004 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*17+1002 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*17+1206 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*18+1456 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*19+1452 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*20+1448 ,y:aa-aa1,image:platformImage}),

    new Platform({x:tt1*21+1444 ,y:aa-aa1,image:platformImage}),



];


genericObject=[
    new GenericObject({
    x:0,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*2,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*3,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*4,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*5,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*6,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*7,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*7,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*8,
    y:aa-aa1-backgroundImage.height,
    image:background
}),
new GenericObject({
    x:backgroundImage.width*9,
    y:aa-aa1-backgroundImage.height,
    image:background
}),


]



gObject=[
    new GObject({
    x:0,
    y:aa-200-aa1,
    image:signboard,
    width:300,
    height: 200
    }),

    new GObject({
    x:600,
    y:aa-565,
    image:born,
    width:300,
    height: 500
    }),

    new GObject({
    x:1100,
    y:aa-500-aa1,
    image:school,
    width:300,
    height: 500
    }),

    new GObject({
    x:tt1*3+198 ,
    y:aa-200-aa1,
    image:signboard1,
    width:300,
    height: 200
    }),
    
    new GObject({
    x:tt1*4 ,
    y:aa-300-aa1,
    image:perf,
    width:300,
    height: 300
    }),
    new GObject({
     x:tt1*5-10 ,
     y:aa-300-aa1,
     image:perf1,
     width:300,
     height: 300
    }),
    new GObject({
        x:tt1*6-80 ,
        y:aa-300-aa1,
        image:perf2,
        width:300,
        height: 300
       }),
    new GObject({
        x:tt1*6+300 ,
        y:aa-200-aa1+5,
        image:ach,
        width:300,
        height: 200
       }),
       // toweres 
       new GObject({
        x:tt1*7+50 ,
        y:aa-500-aa1+10,
        image:ach1,
        width:300,
        height: 500
       }),
       new GObject({
        x:tt1*7+400 ,
        y:aa-400-aa1+10,
        image:ach2,
        width:300,
        height: 400
       }),
       new GObject({
        x:tt1*8+150 ,
        y:aa-400-aa1+10,
        image:ach3,
        width:300,
        height: 400
       }),
       new GObject({
        x:tt1*8+500 ,
        y:aa-400-aa1+10,
        image:ach4,
        width:300,
        height: 400
       }),
       new GObject({
        x:tt1*9+560 ,
        y:aa-200-aa1+5,
        image:exp,
        width:300,
        height: 200
       }),
       new GObject({
        x:tt1*9+840 ,
        y:aa-300-aa1+5,
        image:exp1,
        width:220,
        height: 300
       }),
       new GObject({
        x:tt1*9+1200 ,
        y:aa-200-aa1+5,
        image:exp2,
        width:300,
        height: 200
       }),
       new GObject({
        x:tt1*9+1700 ,
        y:aa-300-aa1+5,
        image:exp3,
        width:450,
        height: 300
       }),
       new GObject({
        x:7650 ,
        y:aa-200-aa1+5,
        image:skills,
        width:300,
        height: 200
       }),
       new GObject({
        x:8000 ,
        y:aa-200-aa1+5,
        image:cpp,
        width:300,
        height: 200
       }),
       new GObject({
        x:8350 ,
        y:aa-200-aa1+5,
        image:httml,
        width:300,
        height: 200
       }),
       new GObject({
        x:8700 ,
        y:aa-200-aa1+5,
        image:python,
        width:300,
        height: 200
       }),
       new GObject({
        x:9150 ,
        y:aa-200-aa1+5,
        image:matlab,
        width:300,
        height: 200
       }),
       
       new GObject({
        x:9650 ,
        y:aa-200-aa1+5,
        image:signproject,
        width:300,
        height: 200
       }),
       new GObject({
        x:10000 ,
        y:aa-200-aa1+5,
        image:robot,
        width:200,
        height: 200
       }),
       new GObject({
        x:10430 ,
        y:aa-200-aa1+5,
        image:charger,
        width:200,
        height: 200
       }),
       new GObject({
        x:10850 ,
        y:aa-200-aa1+5,
        image:game1,
        width:300,
        height: 200
       }),
       new GObject({
        x:11200 ,
        y:aa-200-aa1+5,
        image:game2,
        width:300,
        height: 200
       }),
       new GObject({
        x:11800 ,
        y:aa-200-aa1+5,
        image:signhobby,
        width:300,
        height: 200
       }),
       new GObject({
        x:12800 ,
        y:aa-200-aa1+5,
        image:signcontactme,
        width:300,
        height: 200
       }),
       
       new GObject({
        x:12060 +player.width,
        y:aa-150-aa1+5,
        image:book,
        width:150,
        height: 150
       }),
       new GObject({
        x:13200 +player.width,
        y:aa-100-aa1+5,
        image:linkedin,
        width:100,
        height: 100
       }),
       new GObject({
        x:13320 +player.width,
        y:aa-100-aa1+5,
        image:gmail,
        width:100,
        height: 100
       }),
       new GObject({
        x:13440 +player.width,
        y:aa-100-aa1+5,
        image:github,
        width:100,
        height: 100
       }),
       new GObject({
        x:13560 +player.width,
        y:aa-100-aa1+5,
        image:telegram,
        width:100,
        height: 100
       }),
       new GObject({
        x:13760 ,
        y:aa-65-aa1+5,
        image:credit,
        width:120,
        height: 45
       }),
       new GObject({
        x:13160 +player.width,
        y:aa-400-aa1+5,
        image:flag,
        width:400,
        height: 200
       }),
       new GObject({
        x:12360 +player.width,
        y:aa-150-aa1+5,
        image:chess1,
        width:200,
        height: 150
       }),
       
       
]

//player.draw();
scrollOffset=0

if(true){
    window.addEventListener("load",function(){
        loader.style.display="none";
        init()
           
       })
    }
 
}

function inner (tr){
    var changer=Math.floor(scrollOffset/1000);
    if (tr){
       
    texxt.innerHTML=aboutme[changer]
    
    // console.log(aboutme[changer])
    }
    else{
        texxt.innerHTML=aboutme[changer]
    }
}



function animate (){
    requestAnimationFrame(animate);
    inner(tr);
    
    c.fillStyle="#87CEEB"
    c.fillRect(0,0,canvas.width,canvas.height);
    genericObject.forEach((genericObject)=>{
       genericObject.draw()
    })
    gObject.forEach((gObject)=>{
        gObject.draww()
    })
    platforms.forEach(platform=>{
        platform.draw()
    })
    player.update()
   
    clock.draw()
    drow(activity[Math.floor(scrollOffset/533)])
    drowmusic(music,230,75,125,45);
    
    // move right motion 
    if ((keys.right.pressed && player.position.x<400) ||
    keys.right.pressed && scrollOffset <=12800 && player.position.x<400 ){
        player.velocity.x= player.speed;
    }
    else if ( (keys.left.pressed && player.position.x>100) ||
    keys.left.pressed && scrollOffset ==0 && player.position.x>0
    ){
        player.velocity.x=- player.speed;
    }
    else {
        player.velocity.x = 0;
        if(keys.right.pressed &&  scrollOffset<12800){
            scrollOffset+=player.speed;
            platforms.forEach(platform=>{
                
                platform.position.x-=player.speed
            })
            genericObject.forEach((genericObject)=>{
                    genericObject.position.x-=player.speed * 0.66;
            })
            gObject.forEach((gObject)=>{
                gObject.position.x-=player.speed *1; 
            })
           
        }
        else if (keys.left.pressed && scrollOffset>0 ){
            scrollOffset-=player.speed
            platforms.forEach(platform=>{
                
                platform.position.x+=player.speed;
            });
            genericObject.forEach((genericObject)=>{
                genericObject.position.x+=player.speed * 0.66;
            });
            gObject.forEach((gObject)=>{
                gObject.position.x+=player.speed *1; 
            });
           
        }
    }
    


    // platform collision detection 
    platforms.forEach(platform=>{
    if (player.position.y+player.height<=
        platform.position.y && 
        player.position.y+player.height+
        player.velocity.y>=platform.position.y
        && player.position.x+player.width>= 
        platform.position.x
        && player.position.x<=platform.position.x+
        platform.width){
            player.velocity.y=0

    }
})

// sprite switching condition 



if ( keys.right.pressed && 
    currentKey=='right'&& player.currentSprite !=player.sprites.run.right){
    player.frame=1
    player.currentSprite=player.sprites.run.right
    player.currentCropWidth=player.sprites.run.cropWidth
    player.width =player.sprites.run.width
}
else if (
    keys.left.pressed && 
    currentKey=='left' && player.currentSprite!=player.sprites.run.left){

    player.currentSprite=player.sprites.run.left
    player.currentCropWidth=player.sprites.run.cropWidth
    player.width =player.sprites.run.width
}
else if (
    !keys.left.pressed && 
    currentKey=='left' && player.currentSprite!=player.sprites.stand.left){

    player.currentSprite=player.sprites.stand.left
    player.currentCropWidth=player.sprites.stand.cropWidth
    player.width =player.sprites.stand.width
}
// else if (
//     !keys.left.pressed && 
//     currentKey=='right' && player.currentSprite!=player.sprites.stand.right){

//     player.currentSprite=player.sprites.stand.
//     player.currentCropWidth=player.sprites.stand.cropWidth
//     player.width =player.sprites.stand.width
// }




// win condition
if (scrollOffset>12000 && downl){
   dow.download="thanks.pdf";
    dow.dispatchEvent(new MouseEvent('click'))
    downl=false
}

// loose condition 

if (player.position.y>canvas.height){
    alert(joke[xran])
    keys.right.pressed=false
    keys.left.pressed=false
    player.velocity.y=0
    init();
 }

 


 // end of update function 
}

animate();
///// event manager for web application 
addEventListener('keydown',({keyCode})=>{
    switch(keyCode){
        case (65):
            keys.left.pressed=true;
            currentKey='left'
            break; 
        case (87):
            if(player.velocity.y==0){           
            player.velocity.y-=10;
            myAudio1.play()
            }
            break;
        case (83):
            break;
        case (68):
            keys.right.pressed=true;
            currentKey='right'
            break;
        case (38):
            if(player.velocity.y==0){           
                player.velocity.y-=10;
                myAudio1.play()
                }
            break;
        case (40):
            break;
        case (39):
            keys.right.pressed=true;
            currentKey='right'
            break;
        case (37):
            keys.left.pressed=true;
            currentKey='left'
            break;
    }
})
addEventListener('keyup',({keyCode})=>{
    switch(keyCode){
        case (65):
            keys.left.pressed=false;
            player.currentSprite=player.sprites.stand.left
            player.currentCropWidth=player.sprites.stand.cropWidth
            player.width =player.sprites.stand.width
            break; 
        case (87):
            player.velocity.y-=3;
            break;
        case (83):
            break;
        case (68):
            keys.right.pressed=false;
            player.currentSprite=player.sprites.stand.right
            player.currentCropWidth=player.sprites.stand.cropWidth
            player.width =player.sprites.stand.width
            break;
        case (38):
            player.velocity.y-=3;
            break;
        case (40):
            break;
        case (39):
            keys.right.pressed=false;
            player.currentSprite=player.sprites.stand.right
            player.currentCropWidth=player.sprites.stand.cropWidth
            player.width =player.sprites.stand.width
            break;
        case (37):
            keys.left.pressed=false;
            player.currentSprite=player.sprites.stand.left
            player.currentCropWidth=player.sprites.stand.cropWidth
            player.width =player.sprites.stand.width
            break;
    }
})

function jump(){
//     player.velocity.y-=10;
//     myAudio1.play()
    if(player.velocity.y==0){           
            player.velocity.y-=10;
            myAudio1.play()
            }

}

function jump1(){
    player.velocity.y+=0;
}
function leftbu(){
    
    keys.left.pressed=true;
    
    currentKey='left'
    
}
function leftbu1(){
    keys.left.pressed=false;
    player.currentSprite=player.sprites.stand.left
    player.currentCropWidth=player.sprites.stand.cropWidth
    player.width =player.sprites.stand.width
}
function rightbu(){
    keys.right.pressed=true;
   
    currentKey='right'
   
}
function rightbu1(){
    keys.right.pressed=false;
    player.currentSprite=player.sprites.stand.right
    player.currentCropWidth=player.sprites.stand.cropWidth
    player.width =player.sprites.stand.width
}

  
  canvas.addEventListener('click',(e)=>{
    const pos={
        x: e.clientX,
        y:e.clientY
    };
    if((pos.y>aa-100-aa1+5)&&(pos.y<aa-aa1+5)){
        if (scrollOffset+pos.x > 13200+player.width &&
            (scrollOffset+pos.x < 13310+player.width ) 
            ){
            window.open('https://www.linkedin.com/in/rootjatin','_blank')
        }

        else if (scrollOffset+pos.x > 13320+player.width &&
            (scrollOffset+pos.x < 13430+player.width ) 
            ){
            window.open('mailto:rootjatin@gmail.com');
        }
        
        else if (scrollOffset+pos.x > 13430+player.width &&
            (scrollOffset+pos.x < 13550+player.width ) 
            ){
            window.open('https://www.github.com/rootjatin',"_bland");
        }
        else if (scrollOffset+pos.x > 13555+player.width &&
            (scrollOffset+pos.x < 13670+player.width ) 
            ){
            window.open("https://telegram.me/rootjatin",'_blank');
        }
        else if (scrollOffset+pos.x > 13758 &&
            (scrollOffset+pos.x < 13880 ) 
            ){
            window.open("./credits.html",'_blank');
        }


    }
    else if ((pos.x+scrollOffset>10000)&& (pos.x+scrollOffset<10200)&& 
    (pos.y>aa-200-aa1+5)&& pos.y<aa-aa1+5){
        window.open("https://youtu.be/bUHOEZJiqfk","_blank")

    }
    else if ((pos.x>230)&& (pos.x<350)&& 
    (pos.y>75)&& pos.y<120){
       musicbutton=!musicbutton
       if (musicbutton){
        myAudio.play();
        myAudio.volume=0.1
        myAudio.loop=true;
        }
        else{
            myAudio.pause();
            myAudio.currentTime = 0;
        }

    }
    console.log(pos.y)
    console.log(pos.x)
  });




