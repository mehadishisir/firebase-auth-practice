import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    // Handle Login logic here

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    logInUser(email, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="max-w-sm w-full p-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogIn} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••"
              name="password"
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
