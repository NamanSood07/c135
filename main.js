status="";
objects=[];
numberofobjects=""
function preload(){
    vid=createVideo("video.mp4") ;
        
  }
  function setup(){
      canvas=createCanvas(450,400);
      canvas.position(550,100);
      vid.hide();
  }  
  function draw(){
   image(vid,0,0,450,400);
   if(status!= ""){
     objectDetector.detect(vid,gotResult)
    r=random(255);
    g=random(255)
    b=random(255)
    for(i=0; i<objects.length;i++){
      document.getElementById("statuss").innerHTML="Status : Objects Detected"
      document.getElementById("number_of_objects").innerHTML="Number Of Objects are:"+objects.length
      fill (r,g,b)
      percent= floor(objects[i].confidence*100);
      text(objects[i].label+" "+  percent+" % ",objects[i].x,objects[i].y);
      noFill();
      stroke(r,g,b)
      strokeWeight(3)
      rect(objects[i].x , objects[i].y, objects[i].width,objects[i].height)

    }
  }



  }
  function start(){
      
   objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
   document.getElementById("statuss").innerHTML="Status : Detecting Objects";
  }
  function modelLoaded(){
    console.log("Model Loaded!!")
    status=true;
    vid.loop();
    vid.volume(0);
    vid.speed(1);
 
  }
  function gotResult(error,results){
    if(error){
      console.log(error);
  
  
    }
    console.log(results)
    objects=results;
  }