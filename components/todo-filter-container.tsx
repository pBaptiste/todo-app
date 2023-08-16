"use client"
import React, { useState, useEffect} from 'react'
import TodoFilters from './todo-filters'

type Props = {
  showTopShadow: boolean;
  todos: Todo[]
  deleteAllCompleted: () => void;
};

type Todo = {
    text: string
    completed: boolean
}


const TodoFilterContainer = ({ showTopShadow, todos, deleteAllCompleted } : Props) => {
  const [count, setCount ] = useState(0)

  useEffect(() => {
    let remainingCount = todos.filter(todo => !todo.completed).length
    setCount(remainingCount)
  }, [todos])

  return (
    <div className={`flex items-center justify-between dark:border-[#393A4B] px-5 py-4 ${showTopShadow ? 'shadow-scroll-shadow dark:shadow-scroll-shadow-dark' : ''}`}>
            <p className='text-light-secondary dark:text-dark-secondary text-xs lg:text-sm tracking-[-0.167px lg:tracking-[-0.194px]'>{count} items left</p>
            <div className='hidden lg:block shadow-list-shadow-light dark:shadow-input-shadow-dark'>
                 <TodoFilters />
            </div>
           
            <button onClick={deleteAllCompleted}
            className='text-light-secondary hover:text-light-primary dark:text-dark-secondary hover:dark:text-dark-primary font-normal text-xs lg:text-sm tracking-[-0.167px lg:tracking-[-0.194px]'>Clear Completed</button>
        </div>
  )
}

export default TodoFilterContainer