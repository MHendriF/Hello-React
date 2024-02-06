import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('Register')} type='submit'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button
                    className='bg-pink-600'
                    onClick={() => console.log('Register')}
                    type='button'
                >
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button
                    className='bg-black'
                    onClick={() => console.log('Register')}
                    type='button'
                >
                    <IconBrandTwitter />
                    Logout
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text, type } = props;

    return (
        <button
            {...props}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
