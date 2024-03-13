import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8'>Welcome, please enter your details</p>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
            <p className='text-sm mt-5 text-center'>
                Don't have an account?{' '}
                <Link to='/register' className='text-blue-600 font-semibold'>
                    Register
                </Link>
            </p>
        );
    } else {
        return (
            <p className='text-sm mt-5 text-center'>
                Have an account?{' '}
                <Link to='/login' className='text-blue-600 font-semibold'>
                    Login
                </Link>
            </p>
        );
    }
};

export default AuthLayouts;
