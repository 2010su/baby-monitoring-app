img="";
objects=[];
status=""


function preload(){
    img=loadImage("canvas image.jpg");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video.hide();
    video=createCanva(VIDEO);
    video.size(380,380);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHtml="status:Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded!")
    status=true;
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}
function draw(){
    image(video,0,0,380,380);
    if(status!=""){
        objectDetector.detect(video,gotResult);
        r=random(250);
        g=random(250);
        b=random(250);
        for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHtML="status;objectDetected";
        document.getElementById("number_of_objects").innerHtml="number_of_objects_detected_are="+objects.length;
        fill(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}

}

    