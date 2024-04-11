import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const { loading, login } = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-tetx">Username </span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="password">
              <span className="text-base label-tetx">Password </span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-block btn-sm mt-8"
            >
              {loading ? <span className="loading loading-Spinner"></span> : "Log in"}
            </button>
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-2"
          >
            {"Don't"} have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2" htmlFor="username">
//               <span className="text-base label-tetx">Username </span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               id="username"
//               type="text"
//               placeholder="Enter username"
//               // onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="label p-2" htmlFor="password">
//               <span className="text-base label-tetx">Password </span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               id="password"
//               type="password"
//               placeholder="Enter password"
//               // onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-2">{"Don't"} have an account?</a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
