"use client"
import React, { useState, useEffect, useContext } from 'react'
import { FilterContext } from '@/context/filter-provider'
import TodoItem from './todo-item'
import TodoFilterContainer from './todo-filter-container'
import { DragDropContext, Droppable, DroppableProvided, Draggable, DraggableProvided  } from 'react-beautiful-dnd';

type Todo = {
    text: string
    completed: boolean
    id: string
}

type Props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos}: Props) => {
    const { filter } = useContext(FilterContext);
    const [isTopShadowVisible, setIsTopShadowVisible] = useState(false);
    const [filteredList, setFilteredList] = useState(todos);

    useEffect(() => {
         let filteredTodos = todos;
        
        if(filter === 'Active'){
           filteredTodos = todos.filter(todo => !todo.completed)
        }
        else if(filter === 'Completed'){
          filteredTodos =  todos.filter(todo => todo.completed)
        }

        setFilteredList(filteredTodos);

    }, [todos, filter])

    const deleteTodo = (id: string) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todo => todo.id === id)
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const deleteAllCompleted = () => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }

    //Marks a Todo as complete or uncomplete when clicked on
    const updateCompleted = (id: string, completed: boolean) => {
        const newTodos = [...todos]
         const index = newTodos.findIndex(todo => todo.id === id)
        newTodos[index].completed = completed
        setTodos(newTodos)
    }

    /* When the list of todos is large enough to be scrolled through,
     isTopShadowVisible is used to determine whether or not to display a box shadow as a
    visual indicator to the user that there is more content above the visible area of the list.*/
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight  } = event.currentTarget;
        setIsTopShadowVisible(scrollTop > -1  &&  scrollTop + clientHeight < scrollHeight);
    };

    const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newTodos = [...todos];
    const [movedTodo] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, movedTodo);

    setTodos(newTodos);
  };


    return (
        <div className='bg-white dark:bg-dark-bg rounded-[5px] w-full shadow-list-shadow-light dark:shadow-input-shadow-dark'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='todo-list' direction='vertical'>
          {(provided: DroppableProvided) => (
            <div
              ref={provided.innerRef}
              className='max-h-[350px] lg:max-h-[380px] overflow-scroll'
              onScroll={handleScroll}
            >
              {filteredList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided: DraggableProvided ) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    > <TodoItem
                        text={item.text}
                        id={item.id}
                        completed={item.completed}
                        deleteTodo={deleteTodo}
                        updateCompleted={updateCompleted}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <TodoFilterContainer
        todos={todos}
        deleteAllCompleted={deleteAllCompleted}
        showTopShadow={isTopShadowVisible}
      />
    </div>
  );
};


export default TodoList