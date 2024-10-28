import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = (props) => {
    const [users, setUsers] = useState([]); // Initialize users as an empty array
    const [msg, setMsg] = useState('');

    useEffect(() => {
        all();
    }, []);

    const all = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/user/all', {
                withCredentials: true
            });
            if (response.status === 200) {
                setUsers(response.data); // Assuming response.data is an array of users
                setMsg('');
            }
        } catch (error) {
            console.log(error);
            setMsg(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <>
            <h1>Dashboard / Home</h1>
            {users.length > 0 ? ( // Check if users array is not empty
                users.map(item => (
                    <div key={item.id}>{item.email}</div>
                ))
            ) : (
                <p>No users found</p> // Show this message if users array is empty
            )}
            <h3>{msg}</h3>
        </>
    );
};

export default Dashboard;
