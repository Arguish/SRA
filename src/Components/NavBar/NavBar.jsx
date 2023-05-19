import React from "react";
import GotoBtn from "../GotoBtn/GotoBtn";
import { pages } from "../../Routes/Public/Public";

const NavBar = () => {
  const menuCreator = (array) => {
    return array.map((a, i) => {
      return (
        <GotoBtn
          key={i}
          url={`/${a().props.data}`}
          title={a().props.data}
        ></GotoBtn>
      );
    });
  };

  return (
    <>
      <div style={mainMenuStyle}>
        <GotoBtn url={"/"} title={"Menú"}></GotoBtn>
        {menuCreator(pages)}
        <a href="https://ko-fi.com/P5P6LEMUF" target="_blank">
          <img
            style={{ border: "0px", padding: "0px", height: "50px" }}
            src="https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
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
