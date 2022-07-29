import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Toamr curso', completed: false },
  { text: 'Llorar', completed: false }
];

function App() {
  return (
    <React.Fragment>
      {<TodoCounter />}
      {<TodoSearch />}
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        </TodoList>}
      {<CreateTodoButton />}
    </React.Fragment>
  )
}

export default App;
