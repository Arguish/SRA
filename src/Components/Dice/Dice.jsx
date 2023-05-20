import React from "react";

const Dice = ({ faces }) => {
  const [dice, rollDice] = useDice(Number(faces));
  return (
    <div
      style={{
        userSelect: false,
        mouseCursor: "pointer",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
      }}
      onClick={rollDice}
    >
      <h1 style={{ margin: "0px", alignSelf: "center" }}>{dice}</h1>
      <h6 style={{ margin: "0px", textAlign: "end" }}>Roll! d{faces}</h6>
    </div>
  );
};

export default Dice;

const useDice = (num) => {
  const [result, setresult] = React.useState(0);

  const roll = () => {
    setresult(Math.ceil(Math.random() * Number(num)));
  };
  return [result, roll];
};
