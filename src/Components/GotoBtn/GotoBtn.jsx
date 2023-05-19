import React from "react";
import { useNavigate } from "react-router-dom";

const GotoBtn = ({ url, title }) => {
  const nav = useNavigate();
  return (
    <button style={{ margin: "5px", padding: "5px" }} onClick={() => nav(url)}>
      {title ? title : url}
    </button>
  );
};

export default GotoBtn;
