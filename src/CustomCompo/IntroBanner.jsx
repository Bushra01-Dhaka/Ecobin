

const IntroBanner = () => {
  return (
    <div className="relative h-[80vh] w-[80%] mx-auto overflow-hidden rounded-md shadow-lg">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
          Smart Waste Pickup, Just a Click Away
        </h1>
        <a
          href="/allDoctors"
          className="btn btn-info bg-gradient-to-r from-[#059212] to-[#9BEC00] ...  rounded-[50px] text-white  hover:bg-gradient-to-l border-0 hover:text-white"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default IntroBanner;
