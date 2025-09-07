import useAxiosPublic from "../Hooks/useAxiosPublic";
import registerImg from "../assets/images/User registration.mp4";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Register = () => {
  const { createUser, UpdateUserProfile, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

   const axiosPublic = useAxiosPublic();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, phone, email, password);


    // new
     // register validate

    if (password.length < 6) {
      setRegisterError("Password should  be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("You should have at least one Uppercase character.");
      return;
    } else if (!/[@#$%^&*]/.test(password)) {
      setRegisterError("You should have at least one special character.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("You should have at least one number.");
      return;
    } 

    //reset error
    setRegisterError("");
    setSuccess("");

    //

    // new

    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      // start

      UpdateUserProfile(name)
        .then(() => {
          console.log("User profile updated");

          //  create user entry
          const userInfo = {
            name: name,
            email: email,
            phone: phone,
            photo: null,
            status: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User Added into database");

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate("/login");
            }
          });
        })
        .catch((error) => console.log(error));

      // end
    });
  };

  // GOOGLE SIGN UP
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

          const userInfo = {
            name: result.user?.displayName,
            email: result.user?.email,
            photo: result.user?.photoURL,
            status: "user"
          }

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User Added into database");

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate("/login");
            }
          });
        
      })
      .then((error) => console.error(error));
  };







  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:px-10 px-6">
        {/* left */}
        <video
          data-aos="fade-left"
          data-aos-duration="1200"
          className="flex-1 h-[70vh] w-[80%] mx-auto p-6"
          autoPlay
          loop
          muted
        >
          <source src={registerImg} type="video/mp4"></source>
        </video>

        {/* right */}
        <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="flex-1 w-full text-slate-900 p-6 lg:mt-6">
          <h2 className="text-4xl uppercase text-center pb-6">
            Create Account
          </h2>

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
                  value="Register Now"
                />
              </fieldset>
            </form>

                {registerError && (
          <p className=" my-2 text-sm text-center font-semibold text-red-700">{registerError}</p>
        )}
        {success && <p className="my-2 text-sm font-semibold text-center text-green-600 t-4">{success}</p>}

            <hr className="my-8" />
            <p className="text-center">Or</p>

            <div className="py-6 flex justify-center items-center gap-4 cursor-pointer">
             <p onClick={handleGoogleLogin} className="text-xl border-1 rounded-md shadow-2xl hover:text-[#059212] p-2"> <FcGoogle className="text-2xl inline transition-all duration-300  hover:text-[#059212] font-bold" /> Sign Up</p>
            </div>

            <p className="py-2 text-center">
              Already Have an account?{" "}
              <Link to="/login" className="font-bold hover:text-[#059212]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
