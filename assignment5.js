var el = document.getElementById('point');

el.addEventListener("click", colorChange);

var isClicked= false;

cosnole.log("isClicked before click:", is Clicked);

function colorChange() {
  console.log("function colorChange is triggered");
  isClicked = true;
  check();
  el.stylebackgroundColor = "blue";

}

function makecolorChange(){

  var circle = document.createElement('body');
  Body.classList.add('colorChange');
  container.appendChild(colorChange);
  colorChange.addEventListener('click', makecolorChange);
}



function makekeyFrames(){
  var rect = document.createElement('@keyframes');
  container.appendChild(keyFrames);
  rect.addEventListener('keyFrames');
}


makekeyframes();
makecolorChange();

for(i = 0; i < 10; i++){
  if(i % 2 == 0){
    makecolorChange();
  }
  else {
    makekeyFrames();
  }
}

//make javascript function to change from keyframe animation change to javascript color change
// make mouse click to trigger the color blue on background color
