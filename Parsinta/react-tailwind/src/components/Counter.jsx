import { useState } from 'react';
import Button from './Button';

export default function Counter({ initaleValue }) {
    const [count, setCount] = useState(initaleValue);

    function handleClick() {
        const nextCount = count + 1;
        setCount(nextCount);
        console.log([count, nextCount]);
    }

    function handleClickUpdater() {
        setCount((prevSate) => prevSate + 1);
        console.log([count]);
    }

    return (
        <div>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex gap-x-4'>
                <Button onClick={handleClick}>Count +1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    Count +3
                </Button>
                <Button
                    onClick={() => {
                        handleClickUpdater();
                        handleClickUpdater();
                        handleClickUpdater();
                    }}>
                    Updater +3
                </Button>
            </div>
        </div>
    );
}
