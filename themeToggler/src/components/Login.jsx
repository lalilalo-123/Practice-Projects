import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
