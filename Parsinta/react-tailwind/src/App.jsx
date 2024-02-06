import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import Counter from './components/Counter';
import Input from './components/Input';
import Label from './components/Label';
import { useState } from 'react';
import Todo from './components/Todo';

export default function App() {
    return (
        <PlaceContentCenter>
            <Todo></Todo>
        </PlaceContentCenter>
    );
}

function AppForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sing up for now</Card.Title>
                <div className='mb-5 border rounde-lg p-4'>
                    <p>Name: {form.name || '-----'} </p>
                    <p>Email: {form.email || '-----'} </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <Card.Body>
                        <div className='mb-6'>
                            <Label htmlFor='name' value={'Name'} />
                            <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                        </div>
                        <div className='mb-6'>
                            <Label htmlFor='email' value={'Email'} />
                            <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button>
                            <IconBrandGithub />
                            Register
                        </Button>
                    </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    );
}

function AppCounuter() {
    return (
        <PlaceContentCenter>
            <Counter initaleValue={10}></Counter>
        </PlaceContentCenter>
    );
}

function AppComponent() {
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
