import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import Button from './Button';

export default function AppButton() {
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
