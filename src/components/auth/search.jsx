"use client";

import React, { useState } from "react";

const SearchByTitle = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 rounded-lg px-4 py-2 shadow-md"
      >
        <input
          type="text"
          placeholder="Cari event..."
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="border-none focus:outline-none px-2 py-1 flex-grow rounded-l-md"
          style={{ minWidth: "300px", height: "40px" }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:bg-blue-600 transition duration-300 ease-in-out"
        >
          Gooo!
        </button>
      </form>
    </div>
  );
};

export default SearchByTitle;
