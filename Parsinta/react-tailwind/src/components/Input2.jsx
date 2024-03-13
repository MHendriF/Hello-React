/* eslint-disable react/display-name */
import { useEffect, useRef } from 'react';

//useRef => State tidak akan dirender
const Input2 = ({ isFocused = false, type = 'text', ...props }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            {...props}
            className='transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-600 border-slate-300 shadow-sm rounded-lg'
            type={type}
        />
    );
};

export default Input2;
