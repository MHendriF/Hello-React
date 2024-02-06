import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppAPI() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users');
            console.log(data);
        }

        getUsers().then((r) => r);
    }, []);
}
