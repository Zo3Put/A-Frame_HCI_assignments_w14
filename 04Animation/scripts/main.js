

// // changing individual properties with code and using setInterval
var rotationSpeed = 1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
  myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y -= rotationSpeed;
  myOtherBox.object3D.rotation.z -= rotationSpeed;
  console.log(myOtherBox.object3D.rotation.x);
  console.log(myOtherBox.object3D.rotation.y);
  console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps
