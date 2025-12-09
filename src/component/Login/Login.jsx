import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="max-w-sm w-full p-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
