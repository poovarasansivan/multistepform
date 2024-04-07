import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress
        style={{ color: "#fbbf24", width: "90px", height: "90px" }}
        thickness={5}
      />
    </Stack>
  );
}
