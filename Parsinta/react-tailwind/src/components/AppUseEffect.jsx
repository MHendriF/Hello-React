import { useEffect, useState } from 'react';
import PlaceContentCenter from './PlaceContentCenter';
import Input from './Input';
import Button from './Button';

export default function AppUseEffect({ props }) {
    const [name, setName] = useState('');
    const [online, setOnline] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(window.scroll);

    // Render every time
    useEffect(() => {
        console.log('I always rendered');
    });

    // Render only first time
    useEffect(() => {
        console.log('Render only first time.');
    }, []);

    // Render when props change
    useEffect(() => {
        console.log(`'I am now ${online ? 'online' : 'offline'}.`);
    }, [online]);

    function updateScrollPosition() {
        const windowScrolling = window.scrollY;
        console.log(`Window scroll position ${windowScrolling}`);
        setScrollPosition(windowScrolling);
    }

    useEffect(() => {
        console.log('Attached');
        window.addEventListener('scroll', updateScrollPosition);
        return () => {
            console.log('Detached');
            window.removeEventListener('scroll', updateScrollPosition);
        };
    });

    return (
        <div className='h-[4000px]'>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='border border-slate-500'></Input>
            <Button onClick={(e) => setOnline((online) => !online)} className='bg-pink-600' type='button'>
                Set Online
            </Button>
        </div>
    );
}
