import React from "react";
import GotoBtn from "../GotoBtn/GotoBtn";
import { pages } from "../../Routes/Public/Public";

const NavBar = () => {
  const menuCreator = (array) => {
    return array.map((a, i) => {
      return (
        <GotoBtn
          key={i}
          url={`/${a().props.children}`}
          title={a().props.children}
        ></GotoBtn>
      );
    });
  };

  return (
    <>
      <div style={mainMenuStyle}>
        <GotoBtn url={"/"} title={"Menú"}></GotoBtn>
        {menuCreator(pages)}
      </div>
    </>
  );
};

export default NavBar;

const mainMenuStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "50vw",
  margin: "3px auto",
};
