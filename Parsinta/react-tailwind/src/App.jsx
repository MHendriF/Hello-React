import AppAPI from './components/AppAPI';
import AppCustomHooks from './components/AppCustomHooks';

export default function App() {
    return <AppCustomHooks></AppCustomHooks>;
}

//Penulisan menggunakan gaya ES6
const Title = () => (
    <>
        <h1>Title 1</h1>
        <h1>Title 2</h1>
    </>
);
