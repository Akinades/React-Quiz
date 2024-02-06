import React from "react";

export default function Options({ questions, answer, dispatch }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswer
              ? i === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
