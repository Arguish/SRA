import React from "react";

export const Dice = ({ faces }) => {
  return (
    <div
      style={{
        userSelect: false,
        cursor: "pointer",
        height: "50px",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
      }}
      onClick={faces[1]}
    >
      <h1
        style={{
          margin: "0px",
          alignSelf: "center",
          userSelect: false,
          fontSize: "29px",
        }}
      >
        {faces[0]}
      </h1>
      <h6 style={{ margin: "0px", textAlign: "end", userSelect: false }}>
        Roll! d{faces[2]}
      </h6>
    </div>
  );
};

export const useDice = (num) => {
  const max = num;
  const [result, setresult] = React.useState(max);

  const roll = () => {
    setresult(Math.ceil(Math.random() * Number(max)));
  };
  return [result, roll, max];
};
