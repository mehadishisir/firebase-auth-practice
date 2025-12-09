import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./component/root/Root.jsx";
import Home from "./component/Home/Home.jsx";
import Login from "./component/Login/Login.jsx";
import Signup from "./component/Signup/Signup.jsx";
import InsideHome from "./component/insidehome/InsideHome.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: (
          <Home>
            {/* <div>how are you?</div> */}
            <InsideHome></InsideHome>
          </Home>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </StrictMode>
);
