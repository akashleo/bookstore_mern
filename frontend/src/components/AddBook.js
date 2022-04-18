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
  const [isAvailable, setIsAvailable] = useState(false);
  const [image, setImage] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(author);
    console.log(description);
    console.log(price);
  };

  return (
    <form onSubmit={(e) => handleAddBook(e)}>
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
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <FormLabel>Price</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <FormLabel>Image</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isAvailable}
              onChange={(event) => setIsAvailable(!isAvailable)}
            />
          }
          label="Available"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
