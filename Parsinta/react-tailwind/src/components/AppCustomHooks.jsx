import Card from './Card';
import PlaceContentCenter from './PlaceContentCenter';
import useJoke from '../hooks/useJoke';
import Button from './Button';
import Input from './Input';
import { useRef, useState } from 'react';

export default function AppCustomHooks() {
    const nameRef = useRef();
    const [name, setName] = useState('Alex');
    const joke = useJoke(name);

    const generateJoke = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Joke: {joke.length}</Card.Title>
                <Card.Body>
                    <p className='mb-4'>{joke.value}</p>
                    <Input ref={nameRef}></Input>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateJoke}>Generate a joke</Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
