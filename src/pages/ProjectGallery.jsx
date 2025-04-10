// import React from "react";
// import { projectImages } from "../assets/projectImages";
// import { styles } from "../styles";

// const MobileGallery = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-10">
//       <h1 className={`${styles.sectionHeadTextWorks}`}>Mobile Gallery</h1>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-20">
//         {projectImages.map((image, index) => (
//           <div key={index} className="relative group overflow-hidden rounded-3xl">
//             <img
//               src={image}
//               alt={`Mobile ${index + 1}`}
//               className="w-full h-100 object-cover transform transition-transform duration-300 group-hover:scale-110"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileGallery;

import React from "react";
import { projectImages } from "../assets/projectImages";
import { styles } from "../styles";

const ProjectGallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className={`${styles.sectionHeadTextWorks}`}>Project Gallery</h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 p-20 space-y-4">
        {projectImages.map((image, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-3xl break-inside-avoid"
          >
            <img
              src={image}
              alt={`Mobile ${index + 1}`}
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;