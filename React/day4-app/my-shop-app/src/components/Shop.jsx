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

    const addProduct = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, price, description}),
        };
        const url = 'http://127.0.0.1:3001/products';
        try {
           const res = await fetch(url, options);
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
        <form onSubmit={(e) => {addProduct(e)}}>
            <input type="text" name='name' placeholder='name' />
            <input type="text" name='price' placeholder='price' />
            <textarea name="description" placeholder='description here' id=""></textarea>
            <input type="submit" />
        </form>
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