"use client"
import React, { useState } from 'react'
import EmptyRing from './empty-ring'
import HoverRing from './hover-ring'
import FullRing from './full-ring'
import Image from 'next/image'

type Props = {
  text: string;
  completed: boolean;
  id: string;
  deleteTodo: (id: string) => void;
  updateCompleted: (id: string, completed: boolean) => void;
}

const TodoItem = ({ text, completed, id, deleteTodo, updateCompleted }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleDelete = () => {
    deleteTodo(id)
  }

  const handleCheck = () => {
    const newIsChecked = !completed
    updateCompleted(id, newIsChecked)
  }

  return (
    <div className={`border-b border-[#E3E4F1] dark:border-[#393A4B]`}>

      <label
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        htmlFor={id}
        className=' flex items-center justify-between px-5 py-4 cursor-pointer group'>

        <input
          type="checkbox"
          id={id}
          className="opacity-0 absolute w-0 h-0"
          checked={completed}
          readOnly
        />

        <button type='button' onClick={handleCheck} className='flex items-center gap-3 lg:gap-6'>
          {completed? <FullRing /> : (isHovered ? <HoverRing /> : <EmptyRing />)}
          <p className={`todo-text ${completed && 'line-through opacity-30 dark:opacity-30'}`}>{text}</p>
        </button>

        {isHovered &&
          <button type='button' onClick={handleDelete}>
            <Image src="/images/icon-cross.svg" alt='Cross' width={18} height={18} />
          </button>}
      </label>

    </div>
  )
}

export default TodoItem