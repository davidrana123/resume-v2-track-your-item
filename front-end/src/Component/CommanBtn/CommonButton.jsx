import React from 'react';
import { Button } from '@material-ui/core';
import './CommonButton.css';

const CommonButton = ({ label, onClick }) => {
  return (
    <div style={{ marginTop: '1rem' }}> 
    <Button
      size="large"
      color="success"
      style={{
        padding: '20px 40px',
        fontSize: '2rem',
        width: '20rem',
        height: '30vh',
        borderRadius: '2rem',
        margin: '5px'
      }}
      variant="contained"
      onClick={onClick}
    >
     <span style={{ fontWeight:'bold' }}> {label} </span>
     </Button>
    </div>
  );
};

export default CommonButton;
