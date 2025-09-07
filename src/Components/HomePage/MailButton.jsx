import { useState } from "react";
import { GoMail } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MailButton = () => {
  const [subject, setSubject] = useState("");
   const [body, setBody] = useState("");

  const handleMail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=humayraanjum87@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // open Gmail compose in new tab
    
    // Clear fields after sending
    setSubject("");
    setBody("");
  };

  return (
  
    <div data-aos="zoom-out" data-aos-duration="1500" className="relative h-[80vh] w-[80%]  p-10 mx-auto overflow-hidden rounded-md shadow-lg">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0  h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-700 opacity-40"></div>

      {/* Text & Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        <h2 className="text-3xl lg:text-5xl font-semibold text-white py-4">Get In Touch</h2>
     <div className="flex flex-col gap-4 p-4 border-0 shadow-b shadow-lg shadow-[#9BEC00] w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      />

      <textarea
        placeholder="Enter your message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border p-2 text-white rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-white"
      />

      <button
        onClick={handleMail}
        className="btn btn-md  border-[#059212] text-lg bg-[#059212] hover:bg-gradient-to-r from-[#059212] to-[#9BEC00] text-white cursor-pointer flex items-center justify-center gap-2"
      >
        <GoMail className="text-2xl" /> Send Email
      </button>
    </div>
      </div>

      
    </div>
  );
};

export default MailButton;
