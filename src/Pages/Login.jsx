import { SlSocialGoogle } from "react-icons/sl";
import LogImg from "../assets/images/Login.mp4"
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router";
const Login = () => {
    return (
        <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:px-10 px-6">
        {/* left */}
        {/* <img className="h-[100vh] w-[100%] p-6" src={LogImg} alt="" /> */}
        <video className="h-[100vh] w-[100%] p-6" autoPlay loop muted>
            <source src={LogImg} type="video/mp4"></source>
        </video>

        {/* right */}
        <div className="w-full text-slate-900 p-6 lg:mt-6">
          <h2 className="text-4xl uppercase text-center pb-6">Create Account</h2>

        {/* form */}
          <div>
            <form action="w-[80%] mx-auto">
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
                value="Register Now" />

              </fieldset>
            </form>
             
             <hr className="my-8" />
             <p className="text-center">Or</p>

             <div className="py-6 flex justify-center items-center gap-4 cursor-pointer">
            <SlSocialGoogle className="text-3xl hover:text-[#059212] font-bold" />
            <AiFillGithub className="text-3xl hover:text-[#059212] font-bold" />
          </div>

          <p className="py-2 text-center">Don't have an account? <Link className="font-bold hover:text-[#059212]" to="/register">Register</Link></p>

          </div>


        </div>
      </div>
    </div>
    );
};

export default Login;