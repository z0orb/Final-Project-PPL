import React, { useEffect, useState } from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, deadline, isComplete, deleteTodo, toggle }) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const deadlineDate = new Date(deadline);
            const diff = deadlineDate - now;

            if (diff <= 0) {
                setTimeLeft("Deadline Passed");
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000);

        return () => clearInterval(timer);
    }, [deadline]);

    return (
        <div className='flex flex-col items-start my-3 p-4 bg-gray-100 rounded-lg'>
            <div className='flex items-center w-full'>
                <div onClick={() => toggle(id)} className='flex items-center cursor-pointer'>
                    <img src={isComplete ? tick : not_tick} alt='' className='w-7' />
                    <p
                        className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
                            isComplete ? "line-through" : ""
                        }`}>
                        {text}
                    </p>
                </div>
                <img
                    onClick={() => deleteTodo(id)}
                    src={delete_icon}
                    alt=''
                    className='w-3.5 cursor-pointer ml-auto'
                />
            </div>
            <div className='text-gray-600 text-sm mt-2'>
                Deadline: {new Date(deadline).toLocaleString()}
            </div>
            <div className='text-blue-500 text-sm'>
                Time Left: {timeLeft}
            </div>
        </div>
    );
};

export default TodoItems;
