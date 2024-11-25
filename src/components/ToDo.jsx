import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const ToDo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();
    const deadlineRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        const inputDeadline = deadlineRef.current.value;

        if (inputText === "" || inputDeadline === "") {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            deadline: new Date(inputDeadline),
            isComplete: false,
        };

        setTodoList((prev) => {
            const updatedList = [...prev, newTodo];
            return updatedList.sort((a, b) => a.deadline - b.deadline);
        });

        inputRef.current.value = "";
        deadlineRef.current.value = "";
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            });
        });
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[600px] rounded-xl'>
            {/* --- title --- */}
            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} alt='' />
                <h1 className='text-3xl font-semibold'> Task Manager </h1>
            </div>

            {/* --- input box --- */}
            <div className='flex flex-col my-7 gap-4'>
                <div className='flex items-center bg-gray-200 rounded-full'>
                    <input
                        ref={inputRef}
                        className='bg-transparent border-0 outline-none flex-1 h-14 pl-4 pr-2 placeholder:text-slate-600'
                        type='text'
                        placeholder='Add your task'
                    />
                </div>
                <div className='flex items-center bg-gray-200 rounded-full'>
                    <input
                        ref={deadlineRef}
                        className='bg-transparent border-0 outline-none flex-1 h-14 pl-4 pr-2 placeholder:text-slate-600'
                        type='datetime-local'
                        placeholder='Set deadline'
                    />
                </div>
                <button
                    onClick={add}
                    className='border-none rounded-full bg-blue-500 w-full h-14 text-white text-lg font-medium cursor-pointer'>
                    ADD
                </button>
            </div>

            {/* --- to do list --- */}
            <div>
                {todoList.map((item) => (
                    <TodoItems
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        deadline={item.deadline}
                        isComplete={item.isComplete}
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDo;