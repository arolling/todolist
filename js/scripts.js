function ToDoItem(task){
  this.task = task,
  this.completed = false
}

ToDoItem.prototype.completeTask =function() {
  if (this.completed === false) {
    this.completed = true;
    console.log("finished");
  } else {
    this.completed = false;
    console.log("unfinished");
  }
  return this.completed;
}
// End business logic

$(document).ready(function() {
  $("form#todo").submit(function(event) {
    event.preventDefault();

    var newTask = $("input#new-todo").val();
    var newToDo = new ToDoItem(newTask);
    console.log(newToDo);

    $("#toDoItems").append('<div class="checkbox"><label><input class="listItem" type="checkbox">'+newToDo.task+'</label></div>');
    $("input#new-todo").val("");

    $(".listItem").last().click(function() {
      //alert("You clicked on " + newToDo.task);
      newToDo.completeTask();
      if(newToDo.completed === true) {
        $("#completedItems").append('<span id='+ newToDo.task + '><li>'  + newToDo.task + '</li></span>');
        
      }
      if(newToDo.completed === false) {
        $("span#" + newToDo.task).empty();
      }

    });

    // $("button#complete").submit(function(event) {
    //   event.preventDefault();
    //   var finishedTask = $("input:checked").val();
    //   console.log(finishedTask);
    // });
  });
});
