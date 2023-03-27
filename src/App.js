import "./App.css";
import React, { useEffect, useState } from "react";
import axios, { formToJSON } from "axios";
import Header from "./Header.js";
import Accordions from "./Accordion.js";
import Users from "./Users.js";
import TextFields from "./TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const [value, setValue] = useState("");
  const clearSQL = () => {
    setValue("");
  };
  const anyChange = (event) => {
    setValue(event.target.value);
  };

  const clearTable = () => {
    setUsers([]);
  };
  const [count, setCount] = useState([0]);
  const addUser = () => {
    var args = value.split(",");
    setCount((count) => {
      count += 1;
    });
    var new1 = {
      id: users.length + 1,
      firstName: args[0],
      lastName: args[1],
      dob: args[2],
      age: parseInt(args[3]),
      email: args[4],
    };
    setUsers([...users, new1]);
    setValue("");
    // var firstName= args[0],
    // var lastName= args[1],
    // var dob=args[2],
    // var age= parseInt(args[3]),
    // var email= args[4],
    // fetch(
    //   "http://127.0.0.1:5000/register/" +
    //     args[0] +
    //     "/" +
    //     args[1] +
    //     "/" +
    //     args[2] +
    //     "/" +
    //     args[3] +
    //     "/" +
    //     args[4],
    //   {
    //     // method: "POST",
    //     // mode: "no-cors",
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     // },
    //     // body: JSON.stringify({
    //     //   firstName: args[0],
    //     //   lastName: args[1],
    //     //   dob: args[2],
    //     //   age: parseInt(args[3]),
    //     //   email: args[4],
    //     // }),
    //   }
    // )
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setUsers(data);
    //   });
  };
  const copyClipboard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      setValue("Copied to Clipboard Successfully!");
    return navigator.clipboard.writeText(value);
  };
  return (
    <div className="App">
      <Header />
      <div className="middle-els">
        <Box className="topComponents">
          <Stack className="Stack" spacing={1} direction="row">
            <Button variant="contained" onClick={addUser}>
              Add User
            </Button>
            <Button variant="contained" onClick={copyClipboard}>
              Copy to Clipboard
            </Button>
            <Button variant="contained" onClick={clearSQL}>
              Clear SQL
            </Button>
            <Button variant="contained" onClick={clearTable}>
              Clear Table
            </Button>
          </Stack>
          <TextFields onChange={anyChange} value={value} />
          <Users className="table" users={users} />
          <Accordions />
        </Box>
      </div>
    </div>
  );
}

export default App;
