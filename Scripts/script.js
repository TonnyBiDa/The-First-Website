// Try the JavaScript//

var myImage = document.getElementById("image");
var ArrayImage = ["images/city-bg.jpg","images/city2.jpg","images/city3.jpg"];
var imageIdex = 0;
// console.log("aa")
// window.onload = changeImage();
function changeImage() {
	// myImage.setAttribute("src", ArrayImage[imageIdex]);
	// $("#image").slideToggle(1500);
	$("#image").fadeOut(1500);
	myImage.setAttribute("src", ArrayImage[imageIdex]);
	$("#image").fadeIn(1800);
	// setTimeout(function() {
     // $("#image").css("display", "block");
    
	imageIdex++;
	// console.log(imageIdex)
	if (imageIdex >= ArrayImage.length) {
		imageIdex = 0;
	}
	
}
setInterval(changeImage, 1650);
// $("#image").fadeOut(1000);
// window.onload=function(){
//      setTimeout(function(
//         document.getElementsById('image')[0].style.background='url("images/city2.jpg")';
//     ){
 
//      }, 2000)
//    };

// setInterval(changeImage, 1500);

//Try JQuery//


$(".botton").click(function(){
	// alert("here we go");
	window.location.href = "work.html";
});

$("#image").click(function(){
	// alert("here we go");
	window.location.href = "work.html";
});


$("li").mouseenter(function(){
	$(this).animate({fontSize: '+=5px'});
});
$("li").mouseleave(function(){
	$(this).animate({fontSize: '-=5px'});
});

$("#info-title1").click(function(){
	$("#info-content1").slideToggle();
});

$("#info-title2").click(function(){
	$("#info-content2").slideToggle();
});

