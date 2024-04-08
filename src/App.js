import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Cortar jitomate', completed: false},
  {text: 'Cortar carne', completed: false},
  {text: 'Cortar freir papas', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={24} total={45}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text= {todo.text}
            completed = {todo.completed} 
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
