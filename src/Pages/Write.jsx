import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import GotoBtn from "../Components/GotoBtn/GotoBtn";

const Write = () => {
  const [inputText, setinputText] = useState("");
  const [chat, setchat] = useState([]);

  const handleText = (str) => {
    setinputText(str.target.value);
  };

  const newText = (e) => {
    if (e.key === "Enter") {
      setchat([...chat, e.target.value]);
      e.target.value = "";
    }
  };

  const renderChat = (array) => {
    return (
      <div style={chatStyle}>
        {array.map((a, i) => (
          <ReactMarkdown key={i} children={a} />
        ))}
      </div>
    );
  };

  const renderPreview = (str) => {
    return (
      <div style={previewStyle}>
        <ReactMarkdown children={str} />
      </div>
    );
  };

  const rednerInput = () => {
    return (
      <textarea
        style={inputStyle}
        onChange={(e) => handleText(e)}
        onKeyDown={(e) => newText(e)}
        autoFocus
        maxLength={300}
        cols="30"
        rows="10"
      ></textarea>
    );
  };

  return (
    <div data={"Write"}>
      {renderChat(chat)}
      {renderPreview(inputText)}

      <div style={usetZoneStyle}>
        <h1>cosas activas</h1>
        <div style={inputSyleDiv}>
          <h1>Tablas/Cartas</h1>
          {rednerInput()}
          <h1>Dados</h1>
        </div>
      </div>
    </div>
  );
};

export default Write;

const usetZoneStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  width: "90vw",
  margin: "3px auto",
  height: "150px",
  position: "fixed",
  bottom: "20px",
  left: "5vw",
};

const chatStyle = {
  width: "80vw",
  maxHeight: "50vh",
  margin: "3px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  textAlign: "center",
};

const previewStyle = {
  width: "80vw",
  height: "100px",
  margin: "3px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

const inputSyleDiv = {
  display: "flex",
  justifyContent: "space-around",
  width: "90vw",
  margin: "3px auto",
  height: "100px",
};

const inputStyle = {
  width: "50%",
  height: "100%",
  textAlign: "center",
};
