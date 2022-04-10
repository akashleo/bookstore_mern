import { Button } from "@mui/material";
import React from "react";

const Book = ({ book }) => {
  const { _id, name, author, description, price, available, image } = book;
  return (
    <div>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default Book;
