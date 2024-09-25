import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = (props) => {
    const [desc, setDesc] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (params.id == 1) {
            setDesc('amazing car')
        } else if (params.id == 2) {
            setDesc('the best car ever')
        }

        if (count > 5) {
            navigate('/store');
        }
        
    }, [count]);
    
    const toShop = () => {
        navigate('/store')
    };

    const addOne = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h2>Product # {params.id}: </h2>
            <p>Description: {desc}</p>
            <Link to='/store'>Continue Shopping</Link>
            <div>
                <button onClick={() => toShop()}>Navigate to shop</button>
            </div>
            <button onClick={addOne}>{count}</button>
        </>
    );
}
 
export default Product;