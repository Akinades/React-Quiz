import React from "react";

export default function Progress({
  index,
  numQusetion,
  points,
  maxPoint,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQusetion} value={index + Number(answer !== null)} />
      <p>
        Qusetion <strong>{index + 1}</strong>/{numQusetion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoint}
      </p>
    </header>
  );
}
