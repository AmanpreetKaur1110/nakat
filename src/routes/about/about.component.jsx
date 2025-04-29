import { Link } from 'react-router-dom';
import './about.style.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Our Art Studio</h1>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Handcrafted Paintings</h2>
          <p>
            We create beautiful custom paintings in oil, acrylic, and watercolor. 
            Perfect for home decor or special gifts.
          </p>
          <Link to="/shop/paintings" className="shop-btn">
            View Paintings
          </Link>
        </div>

        <div className="about-section">
          <h2>Personalized Gifts</h2>
          <p>
            Customize gifts with hand-painted designs. We offer:
          </p>
          <ul>
            <li>Portraits from photos</li>
            <li>Pet paintings</li>
            <li>Custom home decor</li>
          </ul>
          <Link to="/shop/gifts" className="shop-btn">
            Explore Gifts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;