console.log('test')


var result = fetch("https://jsonplaceholder.typicode.com/users");
console.log(result)

result.then(function (response) {
  return response.json();
}).then(function (data) {
  var userIds = data.map(function (ele) {
    return ele.id
  })
  console.log(userIds)

  var buttons = document.querySelector(".buttons");
  console.log(data);
  let myButtons = data.map(function (ele) {
    return `<div class="${ele['id']}">${ele['name']}</div>`
  }).join("");
  buttons.innerHTML = myButtons;
  var btns = document.querySelectorAll(".buttons > div");
  console.log(btns);
  btns.forEach(function (btn) {
    btn.addEventListener('click', showData)
  })

}).catch(function (error) {
  buttons.innerHTML = `<div>Error</div>`
})

// console.log(userIds)
var myBtns = document.querySelectorAll('.buttons>div');
console.log(myBtns)

async function showData(e) {
  var result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.className}`);
  let data = await result.json();
  let myDiv = document.querySelector(".userData")
  let posts = data.map(function (post) {
    return `<div>${post.userId}</div>
    <div>${post.id}</div><div>${post.title}</div><div>${post.body}</div>`
  });
  let html = posts.join("");
  myDiv.innerHTML = html;

}