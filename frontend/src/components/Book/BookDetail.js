import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const URL = `http://localhost:5000/books/${id}`;

    const fetchHandler = async () => {
      return await axios.get(URL).then((res) => console.log(res.data));
    };
    if (id) {
      fetchHandler();
    }
  }, [id]);

  return <div>BookDetail</div>;
};

export default BookDetail;
