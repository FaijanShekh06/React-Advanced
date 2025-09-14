import React, { useContext } from "react";
import Nav from "./Nav";
import { MyContext } from "@/Helper/Context";

const Header = (props) => {
  const user = useContext(MyContext);
  return (
    <div className="bg-yellow-200 p-5">
      This is Header Component.
      <h1 className="text-4xl">Hello {user}</h1>
      <Nav num={props.num} />
    </div>
  );
};

export default Header;
