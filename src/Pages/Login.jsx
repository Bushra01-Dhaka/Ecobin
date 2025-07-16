import { SlSocialGoogle } from "react-icons/sl";
import LogImg from "../assets/images/Login.mp4";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

  const {signIn} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  }



  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:px-10 px-6">
        {/* left */}
        <video className="h-[100vh] w-[100%] p-6" autoPlay loop muted>
          <source src={LogImg} type="video/mp4"></source>
        </video>

        {/* right */}
        <div className="w-full text-slate-900 p-6 lg:mt-6">
          <h2 className="text-4xl uppercase text-center pb-6">Welcome Back</h2>

          {/* form */}
          <div>
            <form onSubmit={handleLogin} action="w-[80%] mx-auto">
              <fieldset className="fieldset">
                <input
                  type="email"
                  className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                  placeholder="Email"
                  name="email"
                />

                <input
                  type="password"
                  className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0"
                  placeholder="Password"
                  name="password"
                />

                <input
                  className="btn btn-neutral mt-8 bg-linear-to-r hover:bg-linear-to-l border-0 from-[#1a6322] to-[#059212] text-white"
                  type="submit"
                  value="Login Now"
                />
              </fieldset>
            </form>

            <hr className="my-8" />
            <p className="text-center">Or</p>

            <div className="py-6 flex justify-center items-center gap-4 cursor-pointer">
              <SlSocialGoogle className="text-3xl transition-all duration-300 hover:text-[#059212] font-bold" />
              <AiFillGithub className="text-3xl transition-all duration-300 hover:text-[#059212] font-bold" />
            </div>

            <p className="py-2 text-center">
              Don't have an account?{" "}
              <Link
                className="font-bold hover:text-[#059212] transition-all duration-300"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
