import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Logo from '../Static/su-shu.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="xl" style={{ maxWidth: '100%' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} className="logoSection">
            <img src={Logo} alt="Company Logo" className="footerLogo" />
            <p>@David: 2024/07/15</p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
