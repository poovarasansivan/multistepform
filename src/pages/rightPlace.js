import React from "react";
import MathComfort from "../assets/mathcomfort.png";

const RightPlace = ({ onPageChange }) => {
  const handleContinue = () => {
    onPageChange();
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
      <div className="flex flex-col items-center mt-8 lg:flex-row lg:justify-center">
        <img
          src={MathComfort}
          alt="Math Comfort"
          className="mb-4 lg:mr-8 lg:mb-0 lg:w-96 lg:h-auto"
        />
        <div className="text-center lg:text-left">
          <h1 className="mb-2 text-xl font-bold">You're in the right place</h1>
          <p className="lg:w-96">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problem
            in math, science, and computer science.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
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
};

export default RightPlace;
