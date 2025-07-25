import { SlSocialGoogle } from "react-icons/sl";
import registerImg from "../assets/images/User registration.mp4";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name,phone,email,password)
    createUser(email, password) 
    .then(result => {
      const user = result.user;
      console.log(user)

      // start

      





      // end






    })
  }





  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:px-10 px-6">
        {/* left */}
         <video className="flex-1 h-[70vh] w-[80%] mx-auto p-6" autoPlay loop muted>
                    <source src={registerImg} type="video/mp4"></source>
        </video>

        {/* right */}
        <div className="flex-1 w-full text-slate-900 p-6 lg:mt-6">
          <h2 className="text-4xl uppercase text-center pb-6">Create Account</h2>

        {/* form */}
          <div>
            <form onSubmit={handleRegister} action="w-[80%] mx-auto">
              <fieldset className="fieldset">
                
                <input 
                type="text" 
                className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0" 
                placeholder="Your Name"
                name="name"
                />

               
                <input 
                type="number" 
                className="input w-full my-4 border-0 border-b-1 border-b-slate-800 rounded-b-none outline-0" 
                placeholder="Phone Number"
                name="phone"
                />

                
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
            <SlSocialGoogle className="text-3xl transition-all duration-300 hover:text-[#059212] font-bold" />
            <AiFillGithub className="text-3xl transition-all duration-300 hover:text-[#059212] font-bold" />
          </div>

          <p className="py-2 text-center">Already Have an account? <Link to='/login' className="font-bold hover:text-[#059212]">Login</Link></p>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Register;
