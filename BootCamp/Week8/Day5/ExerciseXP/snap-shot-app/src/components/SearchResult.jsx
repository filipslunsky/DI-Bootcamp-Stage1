import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from './Functions';
import './PhotosComponent.css';

const SearchResult = (props) => {
    const [images, setImages] = useState([]);
    const { input } = useParams();
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        const getImages = async (input) => {
            const imageData = await getData(input, page);
            setImages(imageData);
        };
        getImages();
    }, [input, page]);

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrev = () => {
        setPage(page - 1);
    };

    return (
        <>
            <h2>{input} results</h2>
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
 
export default SearchResult;