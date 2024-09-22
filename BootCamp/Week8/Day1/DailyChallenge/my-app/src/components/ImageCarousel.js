import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';

const ImageCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
      >
        <div>
          <img src="/img/japan.jpg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="/img/macao.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="/img/las-vegas.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
        <div>
          <img src="/img/hong-kong.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
      </Carousel>
    );
  };
  
  export default ImageCarousel;

