import { useState, useEffect, useContext } from 'react';
import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Buttons';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };
    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
            {username}
            <Button classname='ml-5 bg-orange-600' onClick={() => handleLogout()}>
                Logout
            </Button>
            <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5'>{totalCart}</div>
            <Button className='bg-black px-10 mx-5 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Light' : 'Dark'}
            </Button>
        </div>
    );
};

export default Navbar;
