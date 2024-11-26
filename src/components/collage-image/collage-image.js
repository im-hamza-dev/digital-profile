import React, { useState, useEffect } from 'react';
import cctv1 from '../../images/cctv/1.png';
import cctv2 from '../../images/cctv/2.png';
import cctv3 from '../../images/cctv/3.png';
import cctv4 from '../../images/cctv/4.png';
import cctv5 from '../../images/cctv/5.png';
import cctv6 from '../../images/cctv/6.png';
import cctv7 from '../../images/cctv/7.png';
import cctv8 from '../../images/cctv/8.png';
import cctv9 from '../../images/cctv/9.png';
import cctv10 from '../../images/cctv/10.png';
import cctv11 from '../../images/cctv/11.png';

import shape1 from '../../images/shape/1.png';
import shape2 from '../../images/shape/2.png';
import shape3 from '../../images/shape/3.png';
import shape4 from '../../images/shape/4.png';
import shape6 from '../../images/shape/6.png';
import shape7 from '../../images/shape/7.png';
import shape8 from '../../images/shape/8.png';
import shape9 from '../../images/shape/9.png';
import shape10 from '../../images/shape/10.png';

import styled from 'styled-components';
const StyledCollage = styled.div`
  .image-collage {
    position: relative;
    width: 100%;
    padding: 100px;
    height: 100%;
    overflow: auto;
    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      padding: 1rem;
    }

    &__image-container {
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        z-index: 10;
      }

      &--large {
        grid-column: span 2;
        grid-row: span 2;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &__shuffle-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: #3b82f6;
      color: white;
      padding: 0.5rem;
      border-radius: 9999px;

      &:hover {
        background-color: #2563eb;
      }
    }
  }
`;

const ImageCollage = ({ folderPath }) => {
  const [images, setImages] = useState([]);
  const imagesMap = {
    cctv: [cctv1, cctv2, cctv3, cctv4, cctv5, cctv6, cctv7, cctv8, cctv9, cctv10, cctv11],
    shape: [shape1, shape2, shape3, shape4, shape6, shape7, shape8, shape9, shape10],
  };
  const importImages = async () => {
    let importedImages = [];
    importedImages = imagesMap[folderPath];
    setImages(importedImages.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    importImages();
  }, [folderPath]);
  console.log(images);
  return (
    <StyledCollage>
      <div className="image-collage__grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              image-collage__image-container 
              ${index % 5 === 0 ? 'image-collage__image-container--large' : ''}
            `}>
            <img src={image} alt={`Collage image ${index + 1}`} className="image-collage__image" />
          </div>
        ))}
      </div>
      <button onClick={importImages} className="image-collage__shuffle-btn"></button>
    </StyledCollage>
  );
};

export default ImageCollage;
