import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import ClientsCarousel from '../components/clients-carousel/clients-carousel.js';

const StyledMainContainer = styled.main`
  counter-reset: section;
  
`;

const ImHamza = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <ClientsCarousel />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

ImHamza.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ImHamza;
