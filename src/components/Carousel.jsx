import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function CarouselDefault() {
  return (
    <Carousel
      autoPlay={true}
      className="pb-5 rounded-md "
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
    >
      <div className="h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 1"
        />
      </div>
      <div className="h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 2"
        />
      </div>
      <div className="h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgwfHx8ZW58MHx8fHx8"
          alt="Carousel Item 3"
        />
      </div>
    </Carousel>
  );
}
