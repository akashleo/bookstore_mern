import {
  FormLabel,
  TextField,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

const AddBook = () => {
  const [bookdata, setBookdata] = useState({});
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  console.log(name);
  console.log(author);
  console.log(description);
  console.log(price);

  const handleAddBook = () => {
    console.log(name);
    console.log(author);
    console.log(description);
    console.log(price);
  };

  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        maxWidth="700px"
        alignSelf="center"
        sx={{ p: 2, border: "1px solid grey", mt: "20px", borderRadius: "7px" }}
        marginLeft="auto"
        marginRight="auto"
      >
        <FormLabel>Name</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <FormLabel>Price</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          onChange={(event) => setPrice(event.target.value)}
        />

        <FormLabel>Image</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Available"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() => handleAddBook()}
        >
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
