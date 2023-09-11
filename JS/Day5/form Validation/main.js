var myForm = document.forms[0];

var userName = myForm.name;
var errorNameMessage = document.getElementById("error-name");

var userMail = myForm.mail;
var errorMailMessage = document.getElementById("error-mail");

var userPassword = myForm.password;
var errorPasswordMessage = document.getElementById("error-pass");

var userGenderMale = myForm.gender[0];
var userGenderFemale = myForm.gender[1];
var errorGenderMessage = document.getElementById("error-radio");

var firstSport = myForm.sport[0].checked;
var secondSport = myForm.sport[1].checked;
var thirdSport = myForm.sport[2].checked;
var errorCheckMessage = document.getElementById("error-checkbox");
console.log(errorCheckMessage);


var list = myForm.list.value;
var listError = document.getElementById("errorList");
console.log(list)




function handleSubmit(e) {

  e.preventDefault();
  if (userName.value.length < 3) {
    errorNameMessage.classList.add("show");
    userName.value.required
  } else {
    errorNameMessage.classList.remove("show");

  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userMail.value)) {
    errorMailMessage.classList.remove("show");
  } else {
    errorMailMessage.classList.add("show");

  }
  if (userPassword.value.length < 8) {
    errorPasswordMessage.classList.add("show");
  } else {
    errorPasswordMessage.classList.remove("show");

  }
  if (userGenderMale.checked || userGenderFemale.checked) {
    errorGenderMessage.classList.remove("show");
  } else {
    errorGenderMessage.classList.add("show");

  }
  var selectedItems = [];
  for (i = 0; i < myForm.sport.length; i++) {
    if (myForm.sport[i].checked) {
      selectedItems.push(myForm.sport[i])
    }
  }
  if (selectedItems.length < 2) {
    errorCheckMessage.classList.add("show");
  } else {
    errorCheckMessage.classList.remove("show");
  }

  if (myForm.list.value) {
    listError.classList.remove("show");
  } else {
    listError.classList.add("show");
  }


  var checkFinished = document.querySelectorAll('.show');
  var finishLabel = document.getElementById("su");


  if (checkFinished.length == 0) {
    finishLabel.style.display = "block";
  } else {
    finishLabel.style.display = "none";

  }

}


function handleInput() {
  if (userName.value.length < 3) {
    errorNameMessage.classList.add("show");
  } else {
    errorNameMessage.classList.remove("show");

  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userMail.value)) {
    errorMailMessage.classList.remove("show");
  } else {
    errorMailMessage.classList.add("show");

  }

  if (userPassword.value.length < 8) {
    errorPasswordMessage.classList.add("show");
  } else {
    errorPasswordMessage.classList.remove("show");

  }


}
function handleReset() {
  var errorMessages = document.querySelectorAll(".show");
  for (i = 0; i < errorMessages.length; i++) {
    errorMessages[i].classList.remove("show");
  }
  var finishLabel = document.getElementById("su");
  finishLabel.style.display = "none";


}












// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value){

//   if(value==="") {
//     delete records[id][prop];
//   } else{
//   if(prop!== 'tracks' ) records[id][prop] = value;
//   if(prop === 'tracks' && records[id][prop]){
//       records[id][prop].push(value);
//   }else if(prop === 'tracks' && !records[id][prop]){
//     records[id][prop]=[];
//     records[id][prop].push(value);
//   }
//   }

//   }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');