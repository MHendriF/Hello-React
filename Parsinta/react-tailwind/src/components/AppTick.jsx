import { useState } from 'react';
import PlaceContentCenter from './PlaceContentCenter';
import Card from './Card';
import Input from './Input';
import Button from './Button';

export default function AppTick() {
    const [tick, setTick] = useState(0);

    function handleClick() {
        const nextTick = tick + 1;
        setTick(nextTick);
        console.log(nextTick);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>UseRef Hooks</Card.Title>
                <Card.Body>
                    <Input placeholder='Email' isFocused className='border border-slate-500'></Input>
                    <Input placeholder='Password' className='border border-slate-500'></Input>
                    <Button onClick={handleClick}>Tick</Button>
                </Card.Body>
                <Card.Footer>You clicked {tick} times.</Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
