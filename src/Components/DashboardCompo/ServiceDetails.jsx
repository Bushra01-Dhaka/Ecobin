import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CustomButton from "../../Hooks/CustomButton";

const ServiceDetails = () => {
  const {id} = useParams();
  console.log("Service Id: ", id);

  const [allServices, setAllServices] = useState([]);
  const [eachService, setEachService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((result) => result.json())
      .then((data) => {
        setAllServices(data);
      });
  }, []);
//   console.log(allServices);

useEffect(() => {
     if(allServices.length > 0){
        const perService = allServices.find((item) => item?._id === id);
        setEachService(perService);
        console.log("Each Service: ", perService)
     }
}, [allServices])
  
  


  return (
    <div>
        <div className="relative ">
               <div
                 className="hero min-h-[80vh]"
                 style={{
                   backgroundImage: `url(${eachService?.image})`,
                 }}
               >
                 <div className="hero-overlay"></div>
                 <div className="hero-content text-white text-center">
                 <div>
                    <div className="max-w-lg">
                     <h1 className="mb-5 text-3xl lg:text-5xl font-bold uppercase">{eachService?.service_title}</h1>
                     <p className="mb-5">{eachService?.service_short_description}</p>
                   </div>
                    <CustomButton label="Request Service" to=""></CustomButton>
                 </div>
                 </div>
                 
               </div>
       
               <div class="wave">
                 <svg
                   data-name="Layer 1"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 1200 120"
                   preserveAspectRatio="none"
                 >
                   <path
                     d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                     class="shape-fill"
                   ></path>
                 </svg>
               </div>
             </div>
    </div>
  )
};

export default ServiceDetails;
