
var allSongs = document.querySelectorAll(".songs");
var activeTrack = document.querySelector(".songs.active > audio");
console.log(allSongs)

function playTrack(i) {
  stopaud();
  allSongs.forEach(function (ele) {
    ele.classList.remove("active");
  })
  allSongs[i].classList.add("active");
  activeTrack = document.querySelector(".songs.active > audio");
  playaud();
}
// function getSong1() {
//   stopaud();
//   allSongs.forEach(function (ele) {
//     ele.classList.remove("active");
//   })
//   allSongs[0].classList.add("active");
//   activeTrack = document.querySelector(".songs.active > audio");
//   playaud();
// }

// function getSong2() {
//   stopaud();
//   allSongs.forEach(function (ele) {
//     ele.classList.remove("active");
//   })
//   allSongs[1].classList.add("active");
//   activeTrack = document.querySelector(".songs.active > audio");
//   playaud();
// }

// function getSong3() {
//   stopaud();
//   allSongs.forEach(function (ele) {
//     ele.classList.remove("active");
//   })
//   allSongs[2].classList.add("active");
//   activeTrack = document.querySelector(".songs.active > audio");
//   playaud();
// }





function playaud() {
  activeTrack.play();
}
function pauseaud() {
  activeTrack.pause();
}

function stopaud() {
  activeTrack.load();
  activeTrack.pause();
}

function muteaud() {
  activeTrack.muted = !activeTrack.muted;
}


function changeVolume(vol) {
  activeTrack.volume = vol.value;
}

var timeRange = document.getElementById("timeRange");


window.onload = function () {
  timeRange.max = activeTrack.duration;
}

function changeTime() {
  activeTrack.currentTime = timeRange.value;
}
activeTrack.addEventListener("timeupdate", function () {
  timeRange.value = activeTrack.currentTime;
})