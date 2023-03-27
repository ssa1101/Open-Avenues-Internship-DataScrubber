import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export default function Accordions() {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          textAlign: "left",
          fontFamily: "Inconsolata",
          border: "1px #1976d2 solid", //#2994c7
        }}
        className="Accordion"
      >
        <AccordionSummary
          expandIcon={<AddIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          icon
        >
          <Typography style={{ fontSize: "20px" }}>
            Click Here for Documentation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="IndivLines">
            This application is designed to allow a user to create a query into
            a table named Logins and then return the result of that query.
          </Typography>
          <Typography style={{ fontSize: "20px" }} className="IndivLines">
            User Guide:
          </Typography>
          <Typography className="IndivLines">
            Type your SQL Query into the text field below the toolbar.
          </Typography>
          <Typography className="IndivLines">
            1. To add a user, enter the user's information in the order seen in
            the table. Separate each item by commas, then hit the Add User
            Button.
          </Typography>
          <Typography className="IndivLines">
            2. To clear the text field, select the Clear SQL button.
          </Typography>
          <Typography className="IndivLines">
            3. To clear the database, select the Clear Table Button.
          </Typography>
          <Typography className="IndivLines">
            4. To copy the contents of the text field to the ClipBoard, select
            the Copy to ClipBoard button.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
