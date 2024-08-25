import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
