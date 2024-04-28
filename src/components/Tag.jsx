import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const output = await axios.get(url);
    const imageSource = output.data.data.images.downsized_large.url;
    // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="text-center p-2 bg-gray-400  shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Random GIF</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="mx-auto mb-4 rounded-lg shadow-md"
          src={gif}
          width="450"
        />
      )}

      <input
        className=" text-black font-bold py-2 px-4 rounded-l-lg focus:outline-none text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="bg-yellow-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none"
      >
        Genrate
      </button>
    </div>
  );
};

export default Tag;
