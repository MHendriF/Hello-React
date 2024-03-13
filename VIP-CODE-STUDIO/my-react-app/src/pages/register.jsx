import FormRegister from '../components/Fragments/FormRegister';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import { Link } from 'react-router-dom';

const RegisterPage = (props) => {
    return (
        <AuthLayouts title='Register'>
            <FormRegister />
            <p className='text-sm mt-5 text-center'>
                Have an account?{' '}
                <Link to='/login' className='text-blue-600 font-semibold'>
                    Login
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;
