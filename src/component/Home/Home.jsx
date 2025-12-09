import React, { createContext, useState } from "react";
export const HomeContext = createContext(null);

const Home = (data) => {
  const [homeContextValue, setHomeContextValue] = useState(
    "Initial Home Context Value"
  );
  console.log(data);
  //   setHomeContextValue(homeContext);
  return (
    <HomeContext.Provider value={homeContextValue}>
      {data.children}
    </HomeContext.Provider>
  );
};

export default Home;
