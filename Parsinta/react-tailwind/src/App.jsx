import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

import Button from './components/Button';

export default function App() {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex text-center gap-x-4 text-cyan-50'>
                <Title />
            </div>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('Register')} type='submit'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button className='bg-pink-600' onClick={() => console.log('Register')} type='button'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className='bg-black' onClick={() => console.log('Register')} type='button'>
                    <IconBrandTwitter />
                    Logout
                </Button>
                <Button className='bg-green-500' onClick={() => console.log('Register')}>
                    <IconBrandTwitter />
                    Exit
                </Button>
            </div>
        </div>
    );
}

//Penulisan menggunakan gaya ES6
const Title = () => (
    <>
        <h1>Title 1</h1>
        <h1>Title 2</h1>
    </>
);
