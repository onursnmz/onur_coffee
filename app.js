const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}
//Handle <span>, .social, .circle tag color
document.getElementById("changeyellow").onclick = function(){
  document.getElementById("output").style.color = '#ab762c';
  document.getElementById("social").style.background = '#ab762c';
  document.getElementById("learnmore").style.background = '#ab762c';
  document.querySelector('.starbucks').src ="turkish.png";
    document.querySelector('.circle').style.background = '#ab762c';
}

document.getElementById("changeGreen").onclick = function(){
	document.getElementById("output").style.color = '#591b01';
	document.getElementById("social").style.background = '#591b01';
	document.getElementById("learnmore").style.background = '#591b01';
	document.querySelector('.starbucks').src ="filtre.png";
    document.querySelector('.circle').style.background = '#591b01';
}

document.getElementById("changePink1").onclick = function(){
	document.getElementById("output").style.color = '#fccf97';
	document.getElementById("social").style.background = '#fccf97';
	document.getElementById("learnmore").style.background = '#fccf97';
	document.querySelector('.starbucks').src ="white.png";
    document.querySelector('.circle').style.background = '#fccf97';
}
document.getElementById("changePink2").onclick = function(){
	document.getElementById("output").style.color = '#870101';
	document.getElementById("social").style.background = '#870101';
	document.getElementById("learnmore").style.background = '#870101';
	document.querySelector('.starbucks').src ="black.png";
    document.querySelector('.circle').style.background = '#870101';
}
//Handle menu button
// const toggleMenu = () => {
//     const menuToggle = document.querySelector('.toggle');
//     const navigation = document.querySelector('.navigation'); #ae4600

//     menuToggle.classList.toggle('active');
//     navigation.classList.toggle('active');
// }
// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }