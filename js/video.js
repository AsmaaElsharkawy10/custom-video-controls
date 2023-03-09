// window.addEventListener("load",function(){
    // play video
let playIcon = document.querySelector(".controls .playIcon"),
soundIcon = document.querySelector(".controls .soundIcon"),
controlsNav = document.querySelector(".controls"),
volume = document.querySelector(".controls .volume"),
myVideo = document.querySelector(".myVideo"),
seekBar = document.querySelector(".controls .seekbar"),
playbackSelect = document.querySelector(".controls .playbackRate"),
videoTabs = document.querySelectorAll(".videoTabs button"),
videoTabsList = document.querySelector(".videoTabs");
let videosArray = ["./videos/ww.mp4","./videos/video1.mp4","./videos/videoone.mp4"]
//check video status
function checkvidestatus(e)
{
if(myVideo.paused)
{
    myVideo.play();
    playIcon.innerHTML = `<i class="fas fa-pause-circle "></i>`;
}else
{
    myVideo.pause();
    playIcon.innerHTML = `<i class="fas fa-play-circle "></i>`;
}
}

//function updateVideoTime
function updateVideoTime(e)
{
myVideo.currentTime = (e.target.value * myVideo.duration) / 100;
}
// function update seekBar
function updateSeekBar(){
let newTime =  myVideo.currentTime * ( 100 / myVideo.duration); 
seekBar.value = newTime;
}
// function change volume
function changeVolume(e)
{
    myVideo.volume = e.target.value;
}
//change playback rate
function changeRate(e)
{
 if(e.target.value == "0.5")myVideo.playbackRate = 0.5;
 else if(e.target.value == "1.5")myVideo.playbackRate = 1.5;
 else myVideo.playbackRate = 1;
}
//change volume icon
function changevolumeIcon()
{
   if (myVideo.muted) {
          myVideo.muted = false;
          soundIcon.innerHTML=`<i class="fas fa-volume-up sound"></i>`
        } else {
          myVideo.muted = true;
          soundIcon.innerHTML=`<i class="fas fa-volume-mute"></i>`

        }
}

//Event Listeners---------------------------------

//play pause
playIcon.addEventListener("click",checkvidestatus)
// seekbar moving
myVideo.addEventListener("timeupdate",updateSeekBar);
//update seek bar
seekBar.addEventListener("change",updateVideoTime);
//change volume
volume.addEventListener("change",changeVolume);
// playback select
playbackSelect.addEventListener("change",changeRate);
//change volume icon
soundIcon.addEventListener("click",changevolumeIcon);
// myvideo play pause click
myVideo.addEventListener("click",checkvidestatus);
// myVideo fullscreen
myVideo.addEventListener("dblclick",function()
{
    myVideo.requestFullscreen()
})
// })
// varity videos
for (let tab of videoTabs) {
    tab.addEventListener("click",function(){
        myVideo.src = `./videos/${this.innerText}.mp4`;
        checkvidestatus()
    })
}
