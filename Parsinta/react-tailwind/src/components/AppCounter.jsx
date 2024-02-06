import Counter from './Counter';
import PlaceContentCenter from './PlaceContentCenter';

export default function AppCounter() {
    return (
        <PlaceContentCenter>
            <Counter initaleValue={10}></Counter>
        </PlaceContentCenter>
    );
}
