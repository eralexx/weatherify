import * as React from "react";
import { UAParser } from "ua-parser-js";
import Carousel from "react-multi-carousel";
import "./Carousel.css";

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

const parser: UAParser = new UAParser();
parser.setUA(navigator.userAgent);
const result = parser.getResult();
const deviceType = (result.device && result.device.type) || "desktop";

const CustomCarousel: React.FC = props => {
  return (
    <Carousel
      partialVisbile
      deviceType={deviceType}
      responsive={responsiveParams}
    >
      {props.children}
    </Carousel>
  );
};

export default CustomCarousel;
