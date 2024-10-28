import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = (props) => {
    const logout = async() => {
        try {
            const response = await axios.delete('http://127.0.0.1:5000/user/logout');
            if (response.status === 200) {
                console.log(response.status);
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
            <Stack spacing={2} direction={'row'}>
                <Button LinkComponent={Link} to='/'>Dashboard</Button>
                <Button LinkComponent={Link} to='/admin'>Admin Panel</Button>
                <Button LinkComponent={Link} to='/login'>Login</Button>
                <Button LinkComponent={Link} to='/register'>Register</Button>
                <Button onClick={logout}>Logout</Button>
            </Stack>
            <h2>Header</h2>
        </>
    );
}
 
export default Header;