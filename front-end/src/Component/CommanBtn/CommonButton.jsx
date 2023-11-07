import React from 'react';
import { Button } from '@material-ui/core';
import './CommonButton.css';

const CommonButton = ({ label, onClick }) => {
  return (
    <div className="button-container">
      <Button
        size="large"
        color="success"
        style={{
          padding: '20px 40px',
          fontSize: '1.5rem',
          width: '15rem',
          height: '25vh',
          borderRadius: '2rem',
        }}
        variant="contained"
        onClick={onClick}
      >
        <span style={{ fontWeight: 'bold' }}>{label}</span>
      </Button>
    </div>
  );
};

export default CommonButton;
