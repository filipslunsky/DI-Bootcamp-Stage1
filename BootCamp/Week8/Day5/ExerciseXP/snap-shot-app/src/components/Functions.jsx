import { createClient } from 'pexels';

const getData = async (query, pageNum) => {
    const client = createClient('7ibUxLt0ptb15Prf5r0In94ODPWeDrm4KYijPAr0ALdk1PZUv1O751OS');
    const data = await client.photos.search({ query, page: pageNum, per_page: 30 });
    const images = data.photos;
    return images;
    };

export default getData;