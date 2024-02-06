import React from "react";

export default function StartScreen({ numQusetions, dispatch }) {
  return (
    <div className="start">
      <h2>Wecome to the React Quiz!</h2>
      <h3>{numQusetions} questions to test your React mastery </h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Lest's start
      </button>
    </div>
  );
}
