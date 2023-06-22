import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Carousel } from "flowbite-react";

function AboutUs() {
  return (
    <>
      <div className="h-[50vh]">
        <Carousel slideInterval={5000}>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel>
      </div>
    </>
  );
}

export default withPageAuthRequired(AboutUs);
