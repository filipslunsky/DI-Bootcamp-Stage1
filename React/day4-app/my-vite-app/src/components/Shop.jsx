import { Link } from 'react-router-dom';

const Shop = (props) => {
    return (
        <>
        <div>
            <h2>Product 1</h2>
            <p>100$</p>
            <Link to='/prd/1'>More Info</Link>
        </div>
        <div>
            <h2>Product 2</h2>
            <p>200$</p>
            <Link to='/prd/2'>More Info</Link>
        </div>
        </>
    );
}
 
export default Shop;