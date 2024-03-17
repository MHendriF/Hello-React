import { Fragment, useState, useEffect, useRef } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Buttons';
import Counter from '../components/Fragments/Counter';
import { getProducts } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + item.qty * product.price;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    // useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem('cart', JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = 'block';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <Fragment>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
                {username}
                <Button classname='ml-5 bg-black' onClick={() => handleLogout()}>
                    Logout
                </Button>
            </div>
            <div className='flex justify-center py-5'>
                <div className='flex flex-wrap w-4/6'>
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer>
                            </CardProduct>
                        ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600'>Cart</h1>
                    <table className='text-left table-auto border-separate border-spacing-x-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find((product) => product.id === item.id);
                                    return (
                                        <tr key={item.id}>
                                            <td>{product.title.substring(0, 20)}...</td>
                                            <td>$ {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                                            <td>{item.qty}</td>
                                            <td>$ {(product.price * item.qty).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                                        </tr>
                                    );
                                })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>$ {totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className='flex mt-5 mb-5 justify-center'>
                <Counter></Counter>
            </div> */}
        </Fragment>
    );
};

export default ProductsPage;
