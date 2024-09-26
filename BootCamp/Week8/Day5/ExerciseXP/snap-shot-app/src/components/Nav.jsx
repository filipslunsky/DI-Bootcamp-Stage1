import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    return (
        <>
            <div className='container'>
                <Link to='/mountain' className='navItem'>Mountain</Link>
                <Link to='/beaches' className='navItem'>Beaches</Link>
                <Link to='/birds' className='navItem'>Birds</Link>
                <Link to='/food' className='navItem'>Food</Link>
            </div>
        </>
    );
}
 
export default Nav;