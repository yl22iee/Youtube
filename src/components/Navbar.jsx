import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmmit = (e) => {
    e.preventDefault();
    navigate(`video/${text}`);
  };

  const { keyword } = useParams();

  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <FaYoutube className="text-4xl text-brand" />
        <h1 className="text-3xl font-bold ml-2">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmmit}
        className="flex items-center w-full justify-center"
      >
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-60"
          type="text"
          placeholder="Search. . ."
          value={text}
          onChange={handleChange}
        />

        <button className="bg-zinc-600 p-3">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
