var todos = ["Learn JavaScript"];

var input = prompt("What Would You Like To Do? ");

while (input !== "quit") {
  //Handle input
  if (input === "list") {
    showList();
  } else if (input === "new") {
    newListItem();
  } else if (input === "delete") {
    deleteItem();
  }
  var input = prompt("What Would You Like To Do? ");
}
console.log("Program terminated");

function showList() {
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
    console.log("*************\n");
  });
  console.log(todos);
}

function newListItem() {
  var newInput = prompt("Enter Your New Todo");
  todos.push(newInput);
}

function deleteItem() {
  var remove = prompt("Which index would you like to delete? ");
  todos.forEach(function(deleted, i) {
    if (i == remove) {
      todos.splice(i, 1);
    }
  });
}
