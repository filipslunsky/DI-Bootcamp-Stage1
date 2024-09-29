import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="navContainer">
                <Link className='navItem' to='/'>Home</Link>
                <Link className='navItem' to='/favorites'>Favorites</Link>
            </div>
        </>
    );
}
 
export default Nav;