import { FormLabel, TextField } from "@mui/material";
import React from "react";

const AddBook = () => {
  return (
    <form>
      <FormLabel>Name</FormLabel>
      <TextField margin="normal" fullWidth variant="outlined" name="name" />
      <FormLabel>Author</FormLabel>
      <TextField margin="normal" fullWidth variant="outlined" name="name" />
      <FormLabel>Description</FormLabel>
      <TextField margin="normal" fullWidth variant="outlined" name="name" />
      <FormLabel>Price</FormLabel>
      <TextField margin="normal" fullWidth variant="outlined" name="name" />
    </form>
  );
};

export default AddBook;
