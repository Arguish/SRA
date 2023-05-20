import React from "react";

export const RandomTable = ({ item }) => {
  return <p>{item}</p>;
};

export const useTable = (array) => {
  const [table, settable] = React.useState(array ? array : []);
  const [index, setindex] = React.useState(0);

  const roll = () => {
    setindex(Math.floor(Math.random() * table.length));
  };

  return [table[index], roll];
};
