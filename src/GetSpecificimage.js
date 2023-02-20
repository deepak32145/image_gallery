import { useState, useEffect, React } from "react";
import Description from "./Description";

const GetSpecificimage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("dogs");
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=3&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setImages(data.results);
    };
    fetchImages();
  }, [query]);
  function updateQuery(e) {
    e.preventDefault();
    const input = document.getElementById("searchButton");
    console.log(input.value);
    setQuery(input.value);
  }
  return (
    <>
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
          Image gallery
        </h1>
        <div className="flex items-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              id="searchButton"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
            <button
              onClick={updateQuery}
              className="px-4 text-white bg-purple-600 border-l rounded "
            >
              Search
            </button>
          </div>
        </div>
        {!images ? (
          <div>
            <h1>Loading....</h1>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {images.map((image) => (
              <Description key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default GetSpecificimage;
