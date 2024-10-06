import  { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './usersSlice';

const Users = (props) => {
    const users = useSelector(state => state.usersReducer.users);
    const status = useSelector(state => state.usersReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (status === 'loading') return <h2>Loading data...</h2>;
    else if (status === 'failure') return <h2>Houston, we have a problem. We will fix it soon, please try again later.</h2>;

    return (
        <>
            {
                users.map(item => {
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            }
        </>
    );
}
 
export default Users;