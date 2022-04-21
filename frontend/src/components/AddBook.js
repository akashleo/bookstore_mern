import {
  FormLabel,
  TextField,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  //const [bookdata, setBookdata] = useState({});
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [image, setImage] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(author);
    console.log(description);
    console.log(price);
    console.log(image);
    sendRequest();
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(name),
        author: String(author),
        description: String(description),
        price: Number(price),
        image: String(image),
        isAvailable: Boolean(isAvailable),
      })
      .then((res) => {
        console.log(res.data);
      })
      .then(() => history("/books"));
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
