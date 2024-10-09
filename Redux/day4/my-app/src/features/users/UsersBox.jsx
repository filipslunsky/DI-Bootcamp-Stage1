import { useEffect } from 'react';
import { useUsersSelector, useUsersStatus, useFetchUsers, useSelectAuthor, useSelectedAuthor } from './state/hooks';

const UsersBox = (props) => {
    const users = useUsersSelector();
    const status = useUsersStatus();
  
    const callFetchUsers = useFetchUsers();
    const callSelectAuthor = useSelectAuthor();

    useEffect(() => {
        callFetchUsers();
      }, []);
    
    if (status === "loading") return <h2>Loading...</h2>;

    if (status === "failed")
        return <h2>Try again in few minutes, we are working on it...</h2>;


    return (
        <>
            <h2>Authors</h2>
            <select onChange={(e) => callSelectAuthor(e.target.value)}>
                <option value={-1}>Select user...</option>
                {
                    users.map(user => {
                        return (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        )
                    })
                }
            </select>
        </>
    );
}
 
export default UsersBox;