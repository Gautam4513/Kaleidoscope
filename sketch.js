let symetry = 6;
let angle = 360/symetry;
let backgroundColor="#555"
let toggel=false;
const button = document.querySelectorAll(".clear");
const bgColor = document.querySelectorAll("#bgColor");
const symetryNumbeInput = document.querySelectorAll("#symetryNumber");
const symetryInput = document.querySelectorAll("#symetry")
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".close");
const menuItem = document.querySelector(".menuItem");


//setup for canvas
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(backgroundColor)
colorMode(HSB)
angleMode(DEGREES)
strokeWeight(3)
}

//draw on canvas
function draw() {
  translate(width/2,height/2);
  
  
  if(mouseX>0&&mouseX<width&&mouseY>0&&mouseY<height){
    let lineStartX = pmouseX-width/2;
    let lineStartY = pmouseY-height/2;
    let lineEndX = mouseX-width/2;
    let lineEndY = mouseY-height/2;
  if(mouseIsPressed){
  
   
    for(let i =0;i<symetry;i++){
      rotate(angle);
      let hue = (mouseX+mouseY)*360/(width+height)
      stroke(hue,90,90)
      line(lineStartX,lineStartY,lineEndX,lineEndY);
  
      push()
      scale(1,-1);
      line(lineStartX,lineStartY,lineEndX,lineEndY);
      pop()
    }
  }
  }
  
  }

  

//for changing background color
function changeBackgroung(){
 
  background(backgroundColor)
}

//update Background of range input slider
function updateBackground() {
  symetryInput.forEach(elem=>{
    let percentage = ((elem.value - elem.min) / (elem.max - elem.min)) * 100;
    elem.style.background = `linear-gradient(90deg, #ff9800 ${percentage}%, #ddd ${percentage}%)`;
  })
  
}
updateBackground()


//for resize of window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//for toggel menu on mobile
function toggelMenu(){
  if(toggel){
    closeElem.style.display="none";
    menu.style.display="block";
    menuItem.style.translate="-200% 0";
  toggel=false;
  }else{
    closeElem.style.display="block";
    menu.style.display="none";
    menuItem.style.translate="0 0";
  toggel=true;
  }
  }


// for listen change color change event for background color  
bgColor.forEach((elem)=>{
  elem.addEventListener("change",(e)=>{
    // console.log(e.target.value)
    backgroundColor=e.target.value
    toggelMenu()
    changeBackgroung()
  })
})


// for listen change in symetry on range input
symetryInput.forEach(elem=>{
  elem.addEventListener("change",(e)=>{
    console.log(e.target.value)
    symetry=e.target.value
    angle=360/symetry
    symetryNumbeInput.forEach(elem=>{
      elem.value=e.target.value
      // toggelMenu()
    })
    
    updateBackground()
    changeBackgroung()
  })
})

//for update symetry on range input
symetryInput.forEach(elem=>{
  elem.value=symetry;
  updateBackground()
})


// for update symetry on number input
symetryNumbeInput.forEach(elem=>{
  elem.value=symetry;
  updateBackground()
})

// for listen change in symetry on Number input
symetryNumbeInput.forEach(elem=>{
  elem.addEventListener("change",(e)=>{
    symetry=e.target.value
    angle=360/symetry
    symetryInput.forEach(elem=>{
      elem.value=e.target.value
    })
    toggelMenu()
    updateBackground()
    changeBackgroung()
  })
})








//for resating the canvas
button.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    // backgroundColor="#555";
    // symetry=6;
    // angle=360/symetry
    symetryInput.forEach(elem=>{
      elem.value=symetry;
    })
    symetryNumbeInput.forEach(elem=>{
      elem.value=symetry;
    })
    updateBackground()
    changeBackgroung()
  })
})





menu.addEventListener("click",toggelMenu);
closeElem.addEventListener("click",toggelMenu)