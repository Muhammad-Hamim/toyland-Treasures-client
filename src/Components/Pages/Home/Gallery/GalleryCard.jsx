import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const GalleryCard = ({ gallery }) => {
  const { image, toyName, description } = gallery;
  useEffect(() => {
    AOS.init({
      duration: 300, // Animation duration (in milliseconds)
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="flex flex-col justify-center items-center my-8">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="bg-gray-300 h-64 w-full rounded-lg shadow-md object-fill bg-no-repeat bg-cover bg-center"
        />
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-indigo-500">
            {toyName}
          </div>
          <div className="py-2 px-3 bg-indigo-500">
            <h1 className="text-gray-800 font-bold text-center">
              {description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
