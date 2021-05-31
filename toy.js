img="";
status="";
function preload(){
    img= loadImage('spiderman.jpg');
    }
    
function setup(){
canvas = createCanvas(456, 608);
canvas.position();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting objects";
}


function draw(){
image(img, 0, 0, 456, 608);
fill('#FF0000');
text('Toy', 45, 75);
noFill();
stroke('#FF0000');
rect(30, 20, 350, 559);
}

function modelLoaded(){
    console.log('model is loaded');
    status=true;
    objectDetector.detect(img, gotResult);
}

 function gotResult(error, results) {
     if (error){
         console.log(error);
     }
     console.log(results);
 }
