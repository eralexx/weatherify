import * as React from "react";
import "./Carousel.css";
import Carousel from "react-multi-carousel";

const responsiveParams = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const CustomCarousel: React.FC = props => {
  return (
    <Carousel partialVisbile responsive={responsiveParams}>
      {props.children}
    </Carousel>
  );
};

export default CustomCarousel;
