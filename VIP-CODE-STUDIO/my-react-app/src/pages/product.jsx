import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Buttons';
import Counter from '../components/Fragments/Counter';

const products = [
    {
        id: 1,
        name: 'Sepatu baru',
        price: 'Rp 1.000.000',
        image: '/images/shoes-1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a unde consequatur magnam odio ratione sunt impedit et? Dolore rerum amet iste praesentium magni tempora eos quidem pariatur culpa neque?',
    },
    {
        id: 2,
        name: 'Sepatu lama',
        price: 'Rp 500.000',
        image: '/images/shoes-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    return (
        <Fragment>
            <div className='flex justify-end h-10 bg-blue-600 text-white items-center px-10'>
                {email}
                <Button classname='ml-5 bg-black' onClick={() => handleLogout()}>
                    Logout
                </Button>
            </div>
            <div className='flex justify-center'>
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}></CardProduct.Header>
                        <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
                        <CardProduct.Footer price={product.price}></CardProduct.Footer>
                    </CardProduct>
                ))}
            </div>
            <div className='flex justify-center w-100 mt-5'>
                <Counter></Counter>
            </div>
        </Fragment>
    );
};

export default ProductsPage;
