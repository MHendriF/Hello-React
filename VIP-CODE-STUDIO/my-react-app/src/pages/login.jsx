import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <AuthLayouts title='Login'>
            <FormLogin />
            <p className='text-sm mt-5 text-center'>
                Don't have an account?{' '}
                <Link to='/register' className='text-blue-600 font-semibold'>
                    Register
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default LoginPage;
