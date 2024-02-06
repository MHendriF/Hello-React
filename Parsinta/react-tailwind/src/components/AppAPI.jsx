import { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceContentCenter from './PlaceContentCenter';
import Card from './Card';

export default function AppAPI() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/users');
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }

        getUsers().then((r) => r);
    }, []);

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Users: {users.length}</Card.Title>
                <Card.Body>
                    {loading ? (
                        <div>Loading ......</div>
                    ) : (
                        <ol className='space-y-2 mt-2'>
                            {users.map((user) => (
                                <li key={user.id}>
                                    <span>
                                        {user.name} ({user.username})
                                    </span>
                                </li>
                            ))}
                        </ol>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}
