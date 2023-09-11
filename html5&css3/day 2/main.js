console.log(Math.floor(Math.random() * 10) + 1);


function consoleStyler(color, background, fontsize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background:${background};`;
  style += `font-size:${fontsize};`;
  console.log(message, style);

}
consoleStyler("red", "blue", "20px", "my name is abdalrahman");


function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px;";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle)
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}
celebrateStyler("sds");
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
