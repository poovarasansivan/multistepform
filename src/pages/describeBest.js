import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Student from "../assets/student.png";
import Professional from "../assets/professional.png";
import Parent from "../assets/parent.png";
import Lifelong from "../assets/lifelong.png";
import Teacher from "../assets/teacher.png";
import Other from "../assets/other.png";

const CardContents = [
  {
    image: Student,
    description: "Student or soon to be enrolled",
  },
  {
    image: Professional,
    description: "Professional pursuing a career",
  },
  {
    image: Parent,
    description: "Parent of a school-age-child",
  },
  {
    image: Lifelong,
    description: "Lifelong learner",
  },
  {
    image: Teacher,
    description: "Teacher",
  },
  {
    image: Other,
    description: "Other",
  },
];

const Describe = ({ onPageChange }) => {
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
              marginTop: "20px",
            }}
          >
            Which describes you best?
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              marginTop:"10px",
              marginBottom: "20px",
            }}
          >
            This will help us personalize your experience.
          </p>
        </div>
        <div>
          {CardContents.map((content, index) => (
            <Card
              key={index}
              ref={(ref) => (cardRefs.current[index] = ref)}
              variant="outlined"
              style={{
                height: "70px",
                width: "100%", 
                marginBottom: 10,
                marginLeft: 1,
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
              <CardContent style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={content.image}
                  alt="Chart"
                  style={{ marginRight: "10px", width: "40px", height: "36px" }}
                />
                <div>
                  <Typography component="div">{content.description}</Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
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
};

export default Describe;
