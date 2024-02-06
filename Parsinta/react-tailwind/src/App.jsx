import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hellow React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

function AppButton() {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
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
