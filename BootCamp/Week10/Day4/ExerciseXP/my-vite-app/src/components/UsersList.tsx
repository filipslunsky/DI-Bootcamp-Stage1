import { ReactNode, useEffect, useState } from "react";

interface User {
        id: number;
        name: string;
        username: string;
        email: string,
        address: {};
        phone: string;
        website: string;
        company: {};
    };

const UsersList = (): ReactNode => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
            setLoading(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    };

    return (
    <>
        <h2>User List</h2>
        <ul>
            {
                users?.map(user => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })
            }
        </ul>
    </>
);
}
 
export default UsersList;