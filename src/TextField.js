import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function TextFields(props) {
  return (
    <TextField
      sx={{
        "& .MuiFormLabel-root": {
          color: "white",
          fontSize: "30px",
          fontFamily: "Inconsolata",
        },
        "& .MuiInputBase-root": {
          color: "white",
        },
      }}
      onChange={props.onChange}
      id="standard-multiline-static"
      label="Enter New User"
      placeholder="Enter your SQL Query"
      variant="filled"
      value={props.value}
    />
  );
}
