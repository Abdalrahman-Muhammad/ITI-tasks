var game = function () {
  fly = confirm("Do you fly?");
  if (fly) {
    wild = confirm("are you wild?");
    (wild) ? alert("Eagle") : alert("Parrot");
  } else {
    liveUnderSea = confirm("Do tou live under sea?");
    if (liveUnderSea) {
      wild = confirm("are you wild?");
      (wild) ? alert("Shark") : alert("Dolphin");
    } else {
      wild = confirm("are you wild?");
      (wild) ? alert("Lion") : alert("Cat");
    }
  }
}
game();