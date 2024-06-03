import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  let { name } = useParams();
  return <div>name: {name}</div>;
}
