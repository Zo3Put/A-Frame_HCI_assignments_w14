

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.10;
var rotationSpeedX = 0.05; //langzamere snelheid op x-as
var myOtherBox = document.getElementById('myOtherBox');


function spin(){
  myOtherBox.object3D.rotation.x += rotationSpeedX; //rotatie met de klok mee op de x-as
  myOtherBox.object3D.rotation.y -= rotationSpeed; //rotatie tegen de klok in op de y-as
  myOtherBox.object3D.rotation.z -= rotationSpeed; //rotatie tegen de klok in op de z-as
  console.log(myOtherBox.object3D.rotation.x);
  console.log(myOtherBox.object3D.rotation.y);
  console.log(myOtherBox.object3D.rotation.z);
}

if(myOtherBox.object3D.rotation.x <= -100){ //als de rotatie op de x-as kleiner is of gelijk is aan 100
  myOtherBox.object3D.rotation.x -= rotationSpeedX; //de rotatie gaat omkeren en langzamer op de x-as 
}

if(myOtherBox.object3D.rotation.y <= 100){ //als de rotatie op de y-as kleiner is of gelijk is aan 100
  myOtherBox.object3D.rotation.y * 0.05; //de rotatie gaat sneller op de y-as
}
  
setInterval(spin, 16); //equivalent to 60 fps

