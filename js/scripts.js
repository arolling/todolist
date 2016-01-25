function ToDoItem(task){
  this.task = task,
  this.completed = false
}

ToDoItem.prototype.completeTask =function() {
  return this.completed = true;
}
// End business logic

$(document).ready(function() {
  $("form#todo").submit(function(event) {
    event.preventDefault();

    var newTask = $("input#new-todo").val();
    var newToDo = new ToDoItem(newTask);
    console.log(newToDo);

    $("#toDoItems").append("<li>"+newToDo.task+"</li>");
    $("input#new-todo").val("");
  });
});
