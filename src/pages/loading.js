import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "../components/circularprogress";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/final");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
      <p
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: "22px",
          marginTop: "25px",
        }}
      >
        Finding learning path recommendations for you based on your responses
      </p>
    </div>
  );
}
