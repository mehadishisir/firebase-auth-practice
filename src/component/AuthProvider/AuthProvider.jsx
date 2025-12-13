import { createContext, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  // console.log(children);
  const SignInUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        console.log(result.user);
      }
    );
  };
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };
  const userInfo = {
    user,
    SignInUser,
    logInUser,
  };

  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
