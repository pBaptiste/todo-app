"use client"
import React, { useState } from 'react'
import TodoInput from './todo-input'
import TodoList from './todo-list'
import TodoFilters from './todo-filters'
import { v4 as uuidv4 } from 'uuid';

type Todo = {
  text: string,
  completed: boolean
  id: string
}

const TodoContainer = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: string) => {
    setTodos([...todos, { text: todo, completed: false, id: uuidv4() }])
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <div className='lg:hidden mt-4 flex justify-center bg-white dark:bg-dark-bg rounded-[5px] w-full pt-[15px] pb-[19px] shadow-list-shadow-light dark:shadow-input-shadow-dark'>
        <TodoFilters />
      </div>
    </div>
  )
}

export default TodoContainer