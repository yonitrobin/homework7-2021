var video = document.querySelector('#player1')

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// play video
document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();

var volVal = document.querySelector('#slider').value;
volume.innerHTML = (volVal + '%');

 });

//  pause video
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	 });


// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("The new speed is:" + video.playbackRate);
	});	 

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("The new speed is:" + video.playbackRate);
	});	

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if(video.currentTime == video.duration){
		video.currentTime = 0;
	}
	console.log("The new time is:" + video.currentTime);
	});	

// Mute and unmute-- NEED TO CHANGE BUTTON
document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";

	}
	 });

// volume slider
document.querySelector('#slider').addEventListener("click", function(){
	var volVal = document.querySelector('#slider').value;
	video.volume = volVal/100;
	volume.innerHTML = (volVal + '%');
	console.log(video.volume);

});

// styled
document.querySelector('#vintage').addEventListener("click", function(){
	video.classList.add('oldSchool');

});

document.querySelector('#orig').addEventListener("click", function(){
	video.classList.remove('oldSchool');

});