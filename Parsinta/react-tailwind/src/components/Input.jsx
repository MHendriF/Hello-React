/* eslint-disable react/display-name */
import { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className='transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-600 border-slate-300 shadow-sm rounded-lg'
        type={type}
    />
));

export default Input;
