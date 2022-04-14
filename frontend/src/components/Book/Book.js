import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
const Book = ({ book }) => {
  const { _id, name, author, description, price, available, image } = book;
  return (
    <div className="card">
      <img
        style={{ width: "100%", height: "50%" }}
        src="/bookImage.jpg"
        alt={name}
      />
      <article>
        By&nbsp;<span style={{ fontWeight: "500" }}>{author}</span>{" "}
      </article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button variant="outlined">Update</Button> &nbsp;
      <Button variant="outlined">Delete</Button>
    </div>
  );
};

export default Book;
