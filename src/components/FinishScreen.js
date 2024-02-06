import React from "react";

export default function FinishScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percenttage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percenttage)}%)
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
