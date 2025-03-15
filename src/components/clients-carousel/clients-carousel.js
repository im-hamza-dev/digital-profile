import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Dt from '../../images/clients/dt.png';
import Dpworld from '../../images/clients/dpworld.png';
import Dapster from '../../images/clients/dapster.png';
import ArtofQR from '../../images/clients/artofQR.png';
import ColonBroom from '../../images/clients/colon-broom.svg';
import NoodleFactory from '../../images/clients/noodlefactory.webp';
import Shape from '../../images/clients/shape.svg';
import Aerodyne from '../../images/clients/aerodyne.png';

// Styled components
const SlideshowContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 8.5rem; /* Equivalent to h-42 */
  padding: 2rem 0; /* Equivalent to py-12 */
  background-color: white;
  z-index: 1000;
`;

const Slider = styled.div`
  display: flex;
  white-space: nowrap;
  width: max-content;
  animation: ${({ speed }) => `scroll 100s linear infinite`};
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const SlideImage = styled.img`
  height: 5rem; /* Equivalent to h-20 */
  width: 10rem; /* Equivalent to w-40 */
  margin: 0 2.5rem; /* Equivalent to mx-10 */
  object-fit: contain;
`;

const ClientsCarousel = ({ speed = 100 }) => {
  const sliderRef = useRef(null);
  const images = [Dt, Dpworld, Dapster, ArtofQR, ColonBroom, NoodleFactory, Shape, Aerodyne];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cloneImages = () => {
      const images = slider.querySelectorAll('img');
      images.forEach(img => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneImages();
  }, []);

  return (
    <SlideshowContainer>
      <Slider ref={sliderRef} speed={speed}>
        {images.map((image, index) => (
          <SlideImage key={index} src={image} alt={`slide-${index}`} />
        ))}
      </Slider>
    </SlideshowContainer>
  );
};

export default ClientsCarousel;
