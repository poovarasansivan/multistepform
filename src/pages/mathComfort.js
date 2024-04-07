import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Algebra1 from "../assets/formula1.png";
import Algebra2 from "../assets/formula2.png";
import Algebra3 from "../assets/formula3.png";
import Algebra4 from "../assets/formula4.png";

const mathscontent = [
  {
    formula: Algebra1,
    topic: "Arithmetic",
    description: "Introductory",
  },
  {
    formula: Algebra2,
    topic: "Basic Algebra",
    description: "Foundational",
  },
  {
    formula: Algebra3,
    topic: "Intermediate Algebra",
    description: "Intermediate",
  },
  {
    formula: Algebra4,
    topic: "Calculus",
    description: "Advanced",
  },
];

export default function Mathcomfort({ onPageChange }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [continueEnabled, setContinueEnabled] = useState(false);

  const cardRefs = useRef([]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setContinueEnabled(true);
  };

  const handleMouseMove = (index) => {
    if (selectedCard !== index) {
      cardRefs.current[index].style.borderColor = "#3f51b5";
    }
  };

  const handleMouseLeave = (index) => {
    if (selectedCard !== index) {
      cardRefs.current[index].style.borderColor = "rgba(0, 0, 0, 0.23)";
    }
  };

  const handleContinue = () => {
    if (selectedCard !== null) {
      onPageChange();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <div style={{ width: "100%" }}>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            What is your math comfort level?
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              marginBottom: "50px",
              marginTop:"10px"
            }}
          >
            Choose the highest level you feel confident in -- you can always
            adjust later.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {mathscontent.map((math, index) => (
            <Card
              key={index}
              ref={(ref) => (cardRefs.current[index] = ref)}
              variant="outlined"
              style={{
                height: "180px",
                width: "200px",
                marginBottom: 10,
                marginRight: 20,
                transition: "border-color 0.5s",
                cursor: "pointer",
                borderColor:
                  selectedCard === index ? "#4caf50" : "rgba(0, 0, 0, 0.23)",
                boxShadow:
                  selectedCard === index
                    ? "0px 3px 6px rgba(0, 0, 0, 0.16)"
                    : "none",
              }}
              onClick={() => handleCardClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={math.formula}
                  alt="Chart"
                  style={{
                    marginBottom: "10px",
                    width: "120px",
                    height: "65px",
                  }}
                />
                <Typography component="div" style={{fontSize:"15px"}}>{math.topic}</Typography>
                <Typography component="div" className="text-gray-400	">{math.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          {continueEnabled && (
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
          )}
        </div>
      </div>
    </>
  );
}
