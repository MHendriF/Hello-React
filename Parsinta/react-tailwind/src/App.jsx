import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

export default function App() {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button>
                    <IconBrandTwitter />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    return (
        <button
            className={
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded'
            }
        >
            {props.text || props.children}
        </button>
    );
}
