var allTracks = document.querySelectorAll(".container > .songs");
var activeTrack = document.querySelector(".container > .songs.active > audio");
console.log(allTracks);
var timeRange = document.getElementById("timeRange");



function playTrack(i) {
  pauseaud();
  allTracks.forEach(function (ele) {
    ele.classList.remove("active");
  })
  allTracks[i].classList.add("active");
  activeTrack = document.querySelector(".container > .songs.active > audio");
  playaud();


  activeTrack.addEventListener("timeupdate", function () {
    timeRange.value = activeTrack.currentTime;
  })



  console.log(activeTrack);
}

function playaud() {
  activeTrack.play();
}
function pauseaud() {
  activeTrack.pause();
}
function stopaud() {
  pauseaud();
  activeTrack.load();
}
function muteaud() {
  activeTrack.muted = !activeTrack.muted;
  console.log(activeTrack.muted)
}
function changeVolume(vol) {
  activeTrack.volume = vol.value;
}


window.onload = function () {
  timeRange.max = activeTrack.duration;
};
function changeTime(time) {
  activeTrack.currentTime = timeRange.value;
}

// activeTrack.addEventListener("timeupdate", function () {
//   timeRange.value = activeTrack.currentTime;
// })