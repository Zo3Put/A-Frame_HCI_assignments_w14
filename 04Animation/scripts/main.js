

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.10;
var rotationSpeedX = 0.05;
var myOtherBox = document.getElementById('myOtherBox');


function spin(){
  myOtherBox.object3D.rotation.x += rotationSpeedX;
  myOtherBox.object3D.rotation.y -= rotationSpeed;
  myOtherBox.object3D.rotation.z -= rotationSpeed;
  console.log(myOtherBox.object3D.rotation.x);
  console.log(myOtherBox.object3D.rotation.y);
  console.log(myOtherBox.object3D.rotation.z);
}

if(myOtherBox.object3D.rotation.x >= -100){
  myOtherBox.object3D.rotation.x -= rotationSpeedX;
}

setInterval(spin, 16); //equivalent to 60 fps

