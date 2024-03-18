import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSummit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/video/${text}`);
  };
  const navigate = useNavigate();
  return (
    <h2>
      Video Store Room
      <form onSubmit={handleSummit}>
        <input
          type="text"
          placeholder="Video Id : "
          value={text}
          onChange={handleChange}
        />
      </form>
    </h2>
  );
}
