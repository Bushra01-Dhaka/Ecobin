const AdminHeaderPart = ({ title, value }) => {
  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-bold text-center ">
        Welcome to Dashboard
      </h2>
      <div data-aos="zoom-in" className="py-10 text-center">
        <p className="text-lg pb-2 font-semibold">Have a Look</p>
        <h2 className="text-3xl font-bold p-2 max-w-[30%] mx-auto bg-linear-to-r from-[#059212] to-[#1a6322] hover:bg-linear-to-l cursor-pointer rounded-md text-white">
          {title}: {value}
        </h2>
      </div>
    </div>
  );
};

export default AdminHeaderPart;
