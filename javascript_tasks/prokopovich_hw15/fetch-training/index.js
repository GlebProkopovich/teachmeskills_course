// "use strict";

const url = "https://jsonplaceholder.typicode.com/todos";

async function getTodos(url) {
  try {
    let response = await fetch(url);
    let result = await response.json();
    return printTodos(result);
  } catch(err) {
    console.log(err);
  }
}

function printTodos(result) {
  let ul = document.createElement("ul");
  ul.style.listStyleType = "none";
  document.body.append(ul);
  result.forEach(i => {
    let li = document.createElement("li");
    li.innerHTML = `${i.id}. ${i.title}`;
    ul.append(li);
  })
}

getTodos(url);
