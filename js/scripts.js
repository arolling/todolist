function ToDoItem(task){
  this.task = task,
  this.completed = false
}

ToDoItem.prototype.completeTask =function() {
  return this.completed = true;
}
