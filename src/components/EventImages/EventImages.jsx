import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./EventImages.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const EventImages = ({images}) => {
  return (
    <div className="event-container__images">
      <div className="event-container__slider-header">
        <h3 className="event-container__h3">Галерея</h3>
      </div>

      <Carousel
        responsive={responsive}
        arrows={false}
        showDots customDot={<CustomDot />}
        slidesToSlide={1}
        renderDotsOutside={true}
      >
        {images.map((image, i) => <img key={i} src={`https://planner.rdclr.ru${image.url}`} alt="event photo"/>)}
      </Carousel>
    </div>
  )
}

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, totalItems }
  } = rest;

  return (
    <button
      className={`custom-dot ${active ? "active" : "inactive"}`}
      onClick={() => onClick()}
    >
    </button>
  );
};

export default EventImages;
