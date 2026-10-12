"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";

const Projects = () => {
  return (
    <ReactLenis className="projects" options={{ wrapper: undefined }}>
      <div className="projects-container">
        <div className="images">
          {["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"].map(
            (src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Project portrait ${index + 1}`}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ),
          )}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Projects;
