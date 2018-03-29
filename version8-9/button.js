var todoList {
    todos: [],
 /*  displayTodos function() {
     if (this.todos.length === 0){
        console.log('your todos list is empty!')
     } 
        else {
        console.log("My Todos:");
        for(var i = 0; i < this.todos.length; i++){
        
    if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText);
           
        }   
            else {
                console.log('( )', this.todos[i].todoText);
           }
        }
    },
}*/
    
addTodos: function(todoText) {
        this.todos.push({
        todoText: todoText,
        completed: fasle
        });
        //this.displayTodos();
    },
    
changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText;
        //this.displayTodos();
    },

deleteTodos: function(position) {
        this.splice(position, 1);
        //this.displayTodos();
    },

toggleCompleted: function(position) {
        var todo = this.todos[position];
        todos.completed = !todos.completed;
        //this.displayTodos();
},

toggleAll: function(position) {

    //var totalTodos = this.todos.length;
    //var completedTodos = 0;
    
    for (var i = 0, i = totalTodos, i++){
      if (this.todos[i].completed === true){
        completedTodos++;
        }
    }
    
    if (completedTodos === totalTodos) {
    for (var i = 0, i = totalTodos, i++){
      this.todos[i].completed = false){
        completedTodos++;
        }else {
            for (var i = 0, i = totalTodos, i++){
                this.todos[i].completed = true;
        }
      } 
     // this.displayTodos();
    //}
};

// Version 8 ----------------------------------------------------

var handlers { //lesson 1
    displayTodos: function(){
        todoList.displayTodos();
    },
    
    addTodos: function(){ //lesson 2
        var addTodosInput = document..getElementById('addTodosText');
        todoList.addTodos('addTodosText.value')
        addTodosText.value = ''; // empty string will set it to nothing
        view.displayTodos();
    },
    
    changeTodos: function(){ //lesson 3
        var changeInputP = document..getElementById('changePositon')
        var changeInputT = document..getElementById('changeText');
        todoList.changeTodos(changePositon.valueAsNumber, changeText.value);
        changePositon.value = ''; // empty string 
        changeText.value = ''; // set it nothing
        view.displayTodos();
    },
    
    deleteTodos: function(){ //lesson 4
        var deleteInput = document..getElementById('deletePosition');
        todoList.deleteTodos('deletePosition.valueAsNumber')
        deletePosition.value = ''; // empty string will set it to nothing
        view.displayTodos();
    },
    
    toggleCompleted: function(){ //lesson 5
        var toggleInput = document..getElementById('togglePosition');
        todoList.toggleCompleted('togglePosition.valueAsNumber')
        togglePosition.value = ''; // empty string will set it to nothing
        view.displayTodos();
    },
    
      toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos(); // ver9 - lesson 4
    }
};

// Version 9 -----------------------------------------------------

var view = {    
  displayTodos: function () { //lesson 1
      var todosUL = document.querySelector('ul');
      todosUL.innerHTML = '';
      for (var i = 0; i < todoList.todos.length; i++) {
         var todosLI = document.createElement('li');
         var todo = todosList.todos[i];  // lesson 3
         // '(x) todosText
         var todosTextWithCompletion = '';
         if(todo.completed === true){
             todosTextWithCompletion = '(x)' + todo.todoText; //completed
             
         } else {
              todosTextWithCompletion = '( )' + todo.todoText; //not completed
             
         }
         todosLI.textContent = todosTextWithCompletion;
         //todosLI.textContent = todoList.todos[i].todoText; //lesson 2
         todosUL.appendChild(todosLI);
      }
   }  
};