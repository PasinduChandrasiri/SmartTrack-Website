import React from "react";
import { mobileImages } from "../assets/mobileImages";
import { styles } from "../styles";

const MobileGallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className={`${styles.sectionHeadTextWorks}`}>Mobile Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-20">
        {mobileImages.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-3xl">
            <img
              src={image}
              alt={`Mobile ${index + 1}`}
              className="w-full h-100 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
