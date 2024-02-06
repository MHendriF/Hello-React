import { useState } from 'react';
import PlaceContentCenter from './PlaceContentCenter';
import Card from './Card';
import Input from './Input';
import Label from './Label';
import { IconBrandGithub } from '@tabler/icons-react';
import Button from './Button';

export default function AppForm() {
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
