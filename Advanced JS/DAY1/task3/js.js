// let blog = {
//   name: 'Abdalrahman',
//   address: 'Menofia',
//   message: function () {
//     console.log(`${this.name} blogs on ${this.address}`);
//   }
// };

// blog.message();








// let getName = function (hobby1, hobby2) {
//   console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
// }

// let user = {
//   name: 'Tapas',
//   address: 'Bangalore'
// };

// let hobbies = ['Swimming', 'Blogging'];

// getName.call(user, hobbies[0], hobbies[1]);















let getName = function(hobby1, hobby2) {
  console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

let user = {
name: 'Tapas',
address: 'Bangalore'
};

let hobbies = ['Swimming', 'Blogging'];

getName.apply(user, hobbies);













// let getName = function(hobby1, hobby2) {
//   console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
// }

// let user = {
// name: 'Tapas',
// address: 'Bangalore'
// };

// let hobbies = ['Swimming', 'Blogging'];
// let newFn = getName.bind(user, hobbies[0], hobbies[1]);

// newFn();














// let Cartoon = function(name, character) {
//   this.name = name;
//   this.character = character;
//   this.log = function() {
//       console.log(this.name +  ' is a ' + this.character);
//   }
// };











// let tom = new Cartoon('Tom', 'Cat');
// let jerry = new Cartoon('Jerry', 'Mouse');



// let sayName = function(name) {
//   console.log(this.name);
// };

// window.name = 'Tapas';
// sayName();

// let sayName = function() {
//   console.log(this.name);
// };

// var name = 'Tapas';
// sayName();

















// <button onclick="this.style.color='teal'">Click Me!</button>











