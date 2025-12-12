import React from "react";

const AuthProvider = ({ children }) => {
  console.log(children);

  return <>{children}</>;
};

export default AuthProvider;
