import React from 'react';
import { Container, Box } from '@mui/material';
import DNLogo from '../Static/d-n-logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  const goHome = (e) => {
    e.preventDefault();
    navigate('/'); // Navigate to the home page
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      className="pa-0 container-height"
      style={{
        backgroundColor: '#32005f',
        position: 'static',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Container disableGutters className="pa-0 pr-4 pr-lg-0" style={{ maxWidth: '100%' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <a href="/" data-test="ispen-logo" onClick={goHome}>
            <img
              data-test="ispen-logo"
              src={DNLogo}
              className="ipsen_logo"
              alt="Ipsen Logo"
            />
          </a>
          <a
            data-test="dysport-logo"
            href="https://www.ipsencares.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
              src={BLogo}
              className="ipsencares_logo"
              alt="IpsenCares Logo"
            /> */}
          </a>
        </Box>
      </Container>
    </Container>
  );
};

export default Header;
