import React from "react";

const Nav = (props) => {
  console.log(props.num);

  return <div className="bg-cyan-200">This is Nav Component.{props.num}</div>;
};

export default Nav;
