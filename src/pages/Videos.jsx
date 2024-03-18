import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return <h2>Video Room {keyword ? `${keyword}` : `HotIssue`}</h2>;
}
