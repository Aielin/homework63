import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center my-3">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;