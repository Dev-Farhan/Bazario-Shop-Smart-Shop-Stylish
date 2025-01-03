import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function CarouselDefault() {
  return (
    <Carousel
      autoPlay={true}
      className="pb-5 rounded-md"
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
    >
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 1"
        />
      </div>
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 2"
        />
      </div>
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 3"
        />
      </div>
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 1"
        />
      </div>
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 2"
        />
      </div>
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Carousel Item 3"
        />
      </div>
    </Carousel>
  );
}
