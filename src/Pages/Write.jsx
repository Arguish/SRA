import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Dice, useDice } from "../Components/Dice/Dice";
import { RandomTable, useTable } from "../Components/RandomTable/RandomTable";

const Write = () => {
  const [inputText, setinputText] = useState("");
  const [chat, setchat] = useState([]);
  const [item, roll] = useTable(["Si", "No", "Si, pero...", "No, pero..."]);
  const d4 = useDice(4);
  const d6 = useDice(6);
  const d8 = useDice(8);
  const d10 = useDice(10);
  const d12 = useDice(12);
  const d20 = useDice(20);
  const d100 = useDice(100);

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
          <h5 key={i}>{a}</h5>
        ))}
      </div>
    );
  };

  const renderPreview = (str) => {
    return (
      <div style={previewStyle}>
        <h5 key={i}>{str}</h5>
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
          <div
            style={{
              aspectRatio: "1/1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              userSelect: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={roll}
          >
            <RandomTable item={item}></RandomTable>
          </div>
          {rednerInput()}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Dice faces={d4}></Dice>
            <Dice faces={d6}></Dice>
            <Dice faces={d8}></Dice>
            <Dice faces={d10}></Dice>
            <Dice faces={d12}></Dice>
            <Dice faces={d20}></Dice>
            <Dice faces={d100}></Dice>
          </div>
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
