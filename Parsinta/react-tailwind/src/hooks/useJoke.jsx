import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useJoke(name) {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getJoke = async () => {
            setLoading(true);
            try {
                const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
                setJoke(data);
                console.log(data);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };

        getJoke().then((r) => r);
    }, [name]);

    return joke;
}
