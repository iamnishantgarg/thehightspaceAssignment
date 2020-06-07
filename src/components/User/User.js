import React from "react";
import classes from "./User.module.css";
export default function User(props) {
  return (
    <tr className={classes.User}>
      <td>{props.user._id}</td>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.sex}</td>
    </tr>
  );
}
