import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const {loading, signup} = useSignup();
  const handleChangeCheckbox = (gender) => {
    setInputs({...inputs, gender });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="fullname">
              <span className="text-base label-tetx">Full name </span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              id="fullname"
              type="text"
              placeholder="Enter fullname"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-tetx">username </span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              id="username"
              type="text"
              placeholder="Enter username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="confirmPassword">
              <span className="text-base label-tetx">confirm password </span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              id="confirmPassword"
              type="password"
              placeholder="Enter confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox onCheckBoxChange={handleChangeCheckbox} selectedGender={inputs.gender} />

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-Spinner"></span> : "Sign Up"}
            </button>
          </div>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-2"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// starter code for sign up component

// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign up
//           <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2" htmlFor="fullname">
//               <span className="text-base label-tetx">Full name </span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               id="fullname"
//               type="text"
//               placeholder="Enter fullname"
//               // onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="label p-2" htmlFor="username">
//               <span className="text-base label-tetx">username </span>
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
//           <GenderCheckbox />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-2"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
