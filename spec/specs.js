 describe("ToDoItem", function() {
   it("will assign a value and set completed to false for a new object", function() {
     var testToDo = new ToDoItem("Sweep", false);
     expect(testToDo.task).to.equal("Sweep");
     expect(testToDo.completed).to.equal(false);
   });

   it("will assign a value of true to completed when called", function() {
     var testToDo = new ToDoItem("Sweep", false);
     expect(testToDo.completeTask()).to.equal(true);
   });
 });
