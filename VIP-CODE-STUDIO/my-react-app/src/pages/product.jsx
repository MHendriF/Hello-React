import { Fragment, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Buttons';
import Counter from '../components/Fragments/Counter';

const products = [
    {
        id: 1,
        name: 'Sepatu baru',
        price: 1000000,
        image: '/images/shoes-1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a unde consequatur magnam odio ratione sunt impedit et? Dolore rerum amet iste praesentium magni tempora eos quidem pariatur culpa neque?',
    },
    {
        id: 2,
        name: 'Sepatu lama',
        price: 500000,
        image: '/images/shoes-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        name: 'Sepatu mahal',
        price: 200000,
        image: '/images/shoes-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 4,
        name: 'Sepatu lama',
        price: 500000,
        image: '/images/shoes-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    return (
        <Fragment>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
                {email}
                <Button classname='ml-5 bg-black' onClick={() => handleLogout()}>
                    Logout
                </Button>
            </div>
            <div className='flex justify-center py-5'>
                <div className='flex flex-wrap w-4/6'>
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}></CardProduct.Header>
                            <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600'>Cart</h1>
                    <table className='text-left  table-auto border-separate border-spacing-x-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {(product.price * item.qty).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage;
