"use client"
import React, { useState } from 'react'
import EmptyRing from './empty-ring'

type Props = {
  addTodo: (todo: string) => void
}

const TodoInput = ({ addTodo } : Props) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(todo.trim() !== ''){
      addTodo(todo)
      setTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit}
      className='bg-white dark:bg-dark-bg py-[14px] px-5 rounded-[5px] shadow-input-shadow-light dark:shadow-input-shadow-dark flex gap-3 mb-4 lg:mb-6'>
        <EmptyRing />
      <input 
        type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Create a new todo…' 
        className='bg-transparent todo-text outline-none w-full caret-[#3A7CFD]'/>
    </form>
  )
}

export default TodoInput