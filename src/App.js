import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const defaulTtodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Toamr curso', completed: true },
  { text: 'Llorar', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaulTtodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }


  return (
    <React.Fragment>
      {<TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />}
      {<TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />}
      {<TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>}
      {<CreateTodoButton />}
    </React.Fragment>
  )
}

export default App;
