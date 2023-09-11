var userMessage = prompt("Please enter your message...");

if (userMessage) {
  for (var i = 1; i < 7; i++) {
    document.writeln("<h" + i + ">" + userMessage + "</h" + i + ">");
  }
} else {
  document.writeln("there is no message");
}