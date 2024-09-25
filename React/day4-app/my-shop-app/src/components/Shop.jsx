import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = (props) => {
    const [products, setProducts] = useState([]);

    const getAll = async () => {
        try {
            const res = await fetch('http://127.0.0.1:3001/products');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
            
        }
    };

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
        <h2>My Shop</h2>
        {products.map(item => {
            return (
                <div key={item.id} className='card'>
                    <h2>{item.name}</h2>
                    <h4>{item.price}</h4>
                    <Link to={`/prd/${item.id}`}>Buy now</Link>
                </div>
            )
        })}
        </>
    );
};
 
export default Shop;