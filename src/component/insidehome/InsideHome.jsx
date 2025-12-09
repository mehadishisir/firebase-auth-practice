import React, { use } from "react";
import { HomeContext } from "../Home/Home";

const InsideHome = () => {
  const data = use(HomeContext);
  console.log(data);
  return <div>I am inside Home component</div>;
};

export default InsideHome;
