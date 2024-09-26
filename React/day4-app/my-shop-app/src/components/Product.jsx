import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const params = useParams();

    const [product, setProduct] = useState([]);

    const info = async (id) => {
        try {
            const res = await fetch(`http://127.0.0.1:3001/products/${id}`);
            const data = await res.json();
            setProduct(data);            
        } catch (error) {
            console.log(error);
            
        }
    }; 
    
    useEffect(() => {
            info(params.id);
    }, []);

    return (
        <>
        <h2>{product.id}</h2>
            {product.map(item => {
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.price}</h2>
                        <p>{item.description}</p>
                        <Link to='/'>Continue Shopping</Link>
                    </div>
                )
            })}
        </>
    );
};
 
export default Product;