import { Carousel } from "react-bootstrap";
import food1 from "../../images/food.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";

import "./RecipesCarousel.css";

const RecipesCarousel = () => {
  return (
    <div>
      <Carousel className="carousel-container" interval={null}>
        <Carousel.Item>
          <img className="carousel-image" src={food1} alt="First slide" />
          <Carousel.Caption className="caption1 carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={food2} alt="Second Slide" />
          <Carousel.Caption className="caption2 carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={food3} alt="Third slide" />
          <Carousel.Caption className="caption3 carousel-caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RecipesCarousel;
