import { useState, useEffect } from 'react';
import getData from './Functions';
import './PhotosComponent.css';

const BirdsComponent = (props) => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    
        useEffect(() => {
            const getImages = async () => {
                const imageData = await getData('birds', page);
                setImages(imageData);
            };
            getImages();
        }, [page]);

        const handleNext = () => {
            setPage(page + 1);
        };

        const handlePrev = () => {
            setPage(page - 1);
        };

    return (
        <>
            <h2>Birds Pictures</h2>
            {page > 1 ? <span onClick={handlePrev}>prev</span> : ''}
            {images.length === 30 ? <span onClick={handleNext}>next</span> : ''}
            
            <div className="container">
                {
                    images.map(item => {
                        return (
                                <img key={item.id} src={item.src.medium} />
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default BirdsComponent;