import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addUser } from './usersSlice';

const Users = (props) => {
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUser = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        dispatch(addUser({name, email}));
    };

    return (
        <>
            <div>
                <input ref={nameRef} type="text" placeholder='name' />
                <input ref={emailRef} type="email" placeholder='email' />
                <button onClick={() => handleAddUser()}>add user</button>
            </div>
          {
            users.map(item => {
                return (
                    <div key={item.id}>
                        {item.name} {item.email}
                    </div>
                )
            })
          }  
        </>
    );
}
 
export default Users;