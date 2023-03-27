import React, { useEffect, useState } from "react";
import User from "./User.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fontSize } from "@mui/system";
export default function Users({ users }) {
  return (
    <TableContainer
      className="myTable"
      style={{ width: 700, backgroundColor: "rgb(26 25 25)", color: " white" }}
      component={Paper}
    >
      <Table
        style={{
          width: 700,
          backgroundColor: "rgb(26 25 25)",
          color: " white",
        }}
      >
        <TableHead
          style={{ color: "white", textAlign: "center", fontSize: "12px" }}
        >
          <TableRow className="headerTitles" style={{ color: "white" }}>
            <TableCell
              style={{ color: "white", textAlign: "center", fontSize: "17px" }}
            >
              User ID
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center", fontSize: "17px" }}
            >
              First Name
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center", fontSize: "17px" }}
            >
              Last Name
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center", fontSize: "17px" }}
            >
              Dob
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center", fontSize: "17px" }}
            >
              Age
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center", fontSize: "17px" }}
            >
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
