import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="error-message">
        <h1>404</h1>
        <h2>Ooops... Item Not Found</h2>
        <p>The item you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="button">Go Back Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
