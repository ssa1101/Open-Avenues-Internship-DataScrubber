import React from "react";

export default function User({
  user: { id, firstName, lastName, dob, age, email },
}) {
  return (
    <tr key={id}>
      <td style={{ padding: "12px" }}>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dob}</td>
      <td>{age}</td>
      <td>{email}</td>
    </tr>
  );
}
