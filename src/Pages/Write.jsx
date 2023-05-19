import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Write = () => {
  const [inputText, setinputText] = useState("");

  const handleText = (str) => {
    setinputText(str.target.value);
  };

  return (
    <div data={"Write"}>
      Write
      <div>
        <ReactMarkdown children={inputText} />
      </div>
      <div style={{ position: "fixed", bottom: "0px" }}>
        <textarea
          onChange={(e) => handleText(e)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default Write;
