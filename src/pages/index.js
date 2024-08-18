import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import { navigate } from 'gatsby';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  useEffect(()=>{
    navigate('/devlogs')
  })
 return (
  <div></div>
 )
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
