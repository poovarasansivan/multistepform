import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Learningpath from "../assets/learningpath.png";

export default function Final() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div>
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl mb-6">
          Learning paths based on your answers
        </h1>
        <p className="font-sm text-base md:text-lg lg:text-xl text-gray-700 mb-12">
          Choose one to get started. You can switch anytime.
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="relative">
            <span
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#f59e0b",
                borderRadius: "30px",
                padding: "5px 10px",
                color: "black",
                fontWeight: "500",
                zIndex: 1,
              }}
            >
              MOST POPULAR
            </span>
            <Card className="w-full md:w-96 md:h-44 flex flex-row justify-between items-center">
              {/* Left side - Description */}
              <CardContent className="flex-1">
                <Typography className="text-left">
                  <span className="font-semibold">Foundational Math </span>
                  Build your foundational skills in algebra, geometry, and
                  probability.
                </Typography>
              </CardContent>
              <img
                src={Learningpath}
                alt="Learningpath"
                className="w-24 h-24 object-cover m-4"
              />
            </Card>
          </div>
          {/* Second Card */}
          <Card className="w-full md:w-96 md:h-44 flex flex-row justify-between items-center">
            {/* Left side - Description */}
            <CardContent className="flex-1">
              <Typography className="text-left">
                <span className="font-semibold">Mathematical Thinking </span>
                Build your foundational skills in algebra, geometry, and
                probability.
              </Typography>
            </CardContent>
            <img
              src={Learningpath}
              alt="Learningpath"
              className="w-24 h-24 object-cover m-4"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
