import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Progressbar = ({ currentPage, totalPages, onGoBack }) => {
  const progress = (currentPage / totalPages) * 100;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#15a387",
      },
    },
  });
  const customStyles = {
    backgroundColor: "#e5e7eb",
    height: "5px",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    width: "75%", 
    display: "flex",
    alignItems: "center",
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={onGoBack} 
          style={{ marginRight: "10px", cursor: "pointer" }}
        />
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ ...customStyles, color: theme.palette.primary.main }}
        />
      </div>
    </ThemeProvider>
  );
};

export default Progressbar;
