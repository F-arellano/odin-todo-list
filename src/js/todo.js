class TodoList {
  constructor() {
    this.allTodos = [];
  }

  addTodo(todo) {
    this.allTodos.push(todo);
  }

  removeTodo(todo) {
    const index = this.allTodos.findIndex((item) => todo.id == item.id);
    this.allTodos.splice(index, 1);
  }
}

class ToDo {
  static id = 0;
  constructor(text, date, priority, project = "home") {
    this.text = text;
    this.date = date;
    this.priority = priority;
    this.checked = false;
    this.project = project;
    this.id = ToDo.id;
    ToDo.id++;
  }

  toggleState() {
    this.checked = !this.checked;
  }
}

let todoList = new TodoList();
todoList.addTodo(new ToDo("Clean House 2", "14-23-11", 0));
todoList.addTodo(new ToDo("Do laundry 2", "14-17-11", 1));

export { todoList };
