import DirectoryItem from '../directory-item/directory-item.component';

import './directory.style.scss';
import oilPaintingImage from '../../assets/oil-painting.jpg';
import sketches from '../../assets/sketch.jpg';
import resin from '../../assets/resin.jpg';
import waterpainting from '../../assets/water-painting.jpg';
import leafart  from '../../assets/leaf-Art.jpg';
import gifts from '../../assets/gifts.jpg';


const categories = [
  {
    id:1,
    title:'oil-painting',
    "imageUrl": oilPaintingImage,
    route:'shop/oil-painting'
  },
  {
    id:2,
    title:'sketches',
    "imageUrl": sketches,
    route:'shop/sketches'
  },
  {
    id:3,
    title:'resin',
    "imageUrl":resin,
    route:'shop/resin'
  },
  {
    id:4,
    title:'water-painting',
    "imageUrl": waterpainting,
    route:'shop/water-painting'
  },
  {
    id:5,
    title:'leafart',
    "imageUrl": leafart,
    route:'shop/leafart'
  },
  {
    id:6,
    title:'gifting',
    "imageUrl": gifts,
    route:'shop/gifts'
  },
];

const Directory =() => {
    return(
        <div className="directory-container">
        {categories.map((category) =>(
          <DirectoryItem key={category.id} category={category} />
        ))}
         </div> 
    )
}

export default Directory;