// import axios from "axios";
import React from "react";
// import { useState, useEffect } from "react";

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const output = await axios.get(url);
  //     const imageSource = output.data.data.images.downsized_large.url;
  //     // console.log(imageSource);
  //     setGif(imageSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //calling useGif hook
  const { gif, loading, fetchData } = useGif();

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

      <button
        onClick={() => fetchData()}
        className="bg-yellow-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
      >
        Genrate
      </button>
    </div>
  );
};

export default Random;
