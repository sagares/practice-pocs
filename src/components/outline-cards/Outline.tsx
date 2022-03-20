import React, { useState } from "react";
//import ErrorBoundary from "../common/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import L1Card from "./L1Card";
import "./outline.scss";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="react-error-boundary" role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const Outline = (props) => {
  const [activeCard, setActiveCard] = useState({});

  const handleSelection = (card) => {
    setActiveCard(card);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={() => {console.log("error occurred")}}>
      <div className="outline-container">
        <L1Card activeCard={activeCard} onSelection={handleSelection} />
      </div>
    </ErrorBoundary>
  );
};

export default Outline;
