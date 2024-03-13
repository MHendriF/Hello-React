import Button from '../components/Elements/Buttons';
import CardProduct from '../components/Fragments/CardProduct';

const ProductsPage = () => {
    return (
        <div className='flex justify-center'>
            <CardProduct>
                <CardProduct.Header image='/images/shoes-1.jpg' />
                <CardProduct.Body title='Sepatu Baru'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a unde consequatur magnam odio ratione sunt impedit et? Dolore rerum
                    amet iste praesentium magni tempora eos quidem pariatur culpa neque?
                </CardProduct.Body>
                <CardProduct.Footer price='Rp 1.000.000' />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image='/images/shoes-1.jpg' />
                <CardProduct.Body title='Sepatu Baru'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a unde consequatur magnam odio ratione sunt impedit et? Dolore rerum
                    amet iste praesentium magni tempora eos quidem pariatur culpa neque?
                </CardProduct.Body>
                <CardProduct.Footer price='Rp 1.000.000' />
            </CardProduct>
        </div>
    );
};

export default ProductsPage;
