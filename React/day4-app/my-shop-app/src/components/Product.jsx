import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = (props) => {
    const params = useParams();

    const [product, setProduct] = useState({id: "", name: "", price: ""});

    const getOne = async (id) => {
        try {
            const res = await fetch(`http://127.0.0.1:3001/products/${id}`);
            const data = await res.json();
            setProduct(data[0]);            
        } catch (error) {
            console.log(error);
            
        }
    }; 
    
    useEffect(() => {
            getOne(params.id);
    }, []);

    return (
        <>
        <h2>{product.id}
            <br />
            {product.name}</h2>
        <h4>Price: {product.price}</h4>
        </>
    );
};
 
export default Product;