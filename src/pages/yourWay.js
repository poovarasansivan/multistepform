import React from "react";
import Yourwayimage from "../assets/way.png";
import { useNavigate } from 'react-router-dom';

export default function Yourway( ) {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/loading');

  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <div className="flex flex-col items-center lg:flex-row lg:justify-center">
        <img
          src={Yourwayimage}
          alt="Math Comfort"
          className="mb-4 lg:mr-8 lg:mb-0 lg:w-2/5 lg:h-86"
        />
        <div className="text-center mb-0 lg:text-left lg:w-3/5">
          <h1 className="mb-2 text-3xl font-bold lg:mb-5 ">
            You're on your way!
          </h1>
          <div className="flex items-center justify-center lg:justify-start mb-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                role="img"
                aria-label="star"
                style={{ fontSize: "24px" }}
              >
                ⭐️
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "monospace",
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            “Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real-world problem-solving situations.”
          </p>
          <p style={{ fontFamily: "monospace", fontStyle: "italic" }}>
            -- Jacob S.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          onClick={handleContinue}
          style={{
            padding: "8px 26px",
            backgroundColor: "black",
            color: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}