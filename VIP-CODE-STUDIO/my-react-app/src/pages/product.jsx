import { Fragment, useState, useEffect } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product.service';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <Fragment>
            <div className='flex justify-center py-5'>
                <div className='flex flex-wrap w-4/6'>
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                                <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
                            </CardProduct>
                        ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600'>Cart</h1>
                    <TableCart products={products}></TableCart>
                </div>
            </div>
            {/* <div className='flex mt-5 mb-5 justify-center'>
                <Counter></Counter>
            </div> */}
        </Fragment>
    );
};

export default ProductsPage;
