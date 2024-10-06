import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './usersSlice';

const Users = (props) => {
    const users = useSelector(state => state.usersReducer.users);
    const status = useSelector(state => state.usersReducer.status);

    if (status === 'loading') return <h2> loading... </h2>
    if (status === 'failed') return <h2>try again</h2>
};

return (
    <>
        <div>
        
        </div>
    </>
);