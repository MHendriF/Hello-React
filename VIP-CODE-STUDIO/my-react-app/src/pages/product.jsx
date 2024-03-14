import CardProduct from '../components/Fragments/CardProduct';

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

const ProductsPage = () => {
    return (
        <div className='flex justify-center'>
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))}
        </div>
    );
};

export default ProductsPage;
