import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import CustomButton from "../Hooks/CustomButton";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const PictureCards = () => {
    
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div data-aos="zoom-in">
        {/* <span className="block mb-4 text-xs md:text-sm text-black font-medium tracking-widest">
          About Us
        </span> */}
        <h3 className="text-4xl lg:text-6xl  font-bold bg-gradient-to-r from-[#059212] to-[#9BEC00] text-transparent bg-clip-text">
          Turning Waste into Worth: The EcoBin Story
        </h3>
        <p className="text-base md:text-lg text-black my-4 md:my-6">
          EcoBin is built on the belief that "Smart Waste, Clean Future" isn't
          just a motto — it's a mission. This eco-conscious platform streamlines
          waste management, connects communities, and champions sustainability
          through smart technology and green innovation.
        </p>
        <div>
           <CustomButton label="Explore Services" to="/services"></CustomButton>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://media.istockphoto.com/id/2153343547/photo/garbage-bins-for-sorting-waste-materials-beside-the-walk-way-recycling-bin-stands-outdoor.jpg?s=612x612&w=0&k=20&c=Uqnh__kj0RbqBdOoIJvyIHgeIt31co0Vpy89PkVogW8=",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/2186945656/photo/refuse-collection-worker-emptying-garbage-bin-into-truck-on-city-street.jpg?s=612x612&w=0&k=20&c=O24zxqWUMF8BiwdXpqkv9GqNxAEChUYu22dAqtDv6t8=",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1334046558/photo/garbage-removal-man-doing-trash.jpg?s=612x612&w=0&k=20&c=FX4KjRTl9eVZqHvzWQMD7qnC9lhTkuZVNjZA4zRXfNA=",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/2186678611/photo/the-resulting-after-effects-of-storm-dana-major-clean-up-underway-and-restoration-of-the-town.jpg?s=612x612&w=0&k=20&c=jILiLrlOodMHRyeFqnb9WdtcNHk-SwIXkP9ATdvOB7E=",
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/id/475981362/photo/waste-management-power-washing-a-green-compost-bin.jpg?s=612x612&w=0&k=20&c=oCC8w4YnCG7CyHKs_NKSkNIfSJ_p791O_5paSFYQQsA=",
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/2145752782/photo/colorful-garbage-bins-outdoor.jpg?s=612x612&w=0&k=20&c=Ri3JEgZoZaIOji4I2tAiOhtxvfxJ2v5iNQXF-y5OmS8=",
  },
  {
    id: 7,
    src: "https://media.istockphoto.com/id/91891889/photo/garbage-truck-and-worker.jpg?s=612x612&w=0&k=20&c=gK888nsBT9Rmn_Fkv4ZqGtdjgyNN38GR-W6QDbZznM8=",
  },
  {
    id: 8,
    src: "https://media.istockphoto.com/id/2217297299/photo/volunteers-waving-and-smiling-after-picking-up-trash-in-a-public-park.jpg?s=612x612&w=0&k=20&c=jmTEFY0dzR_eB7rOcUKivJGmprajrOfihTnNVBINP_g=",
  },
  {
    id: 9,
    src: "https://media.istockphoto.com/id/2169584112/photo/smiling-multicultural-warehouse-worker-taking-out-trash.jpg?s=612x612&w=0&k=20&c=a8l_Q1PZ5xxbXMBMarXZ9WNH-oop-AS6en9_kNpxfUI=",
  },
  {
    id: 10,
    src: "https://media.istockphoto.com/id/1250731132/photo/garbage-cans-on-the-street-near-the-public-wc-city-streets-cleaning-background.jpg?s=612x612&w=0&k=20&c=nK8lLgqUht8txYCMknRvlkk4E53M4lpDCwbwtoiRX6U=",
  },
  {
    id: 11,
    src: "https://media.istockphoto.com/id/2161446481/photo/street-cleaner-in-reflective-vest-washing-street-with-high-pressure-washer.jpg?s=612x612&w=0&k=20&c=A5wzq0rkVozOxVk4qLBLi9NSeVo30pqbNhx0cEr73u0=",
  },
  {
    id: 12,
    src: "https://media.istockphoto.com/id/922611582/photo/two-refuse-collection-workers-loading-garbage-into-waste-truck.jpg?s=612x612&w=0&k=20&c=vG_bnuQDAJUhAn8eODexjRazl6NWo4yo3MDghfSD168=",
  },
  {
    id: 13,
    src: "https://media.istockphoto.com/id/1488899351/photo/janitor-takes-garbage-out-of-trash-container-outdoors.jpg?s=612x612&w=0&k=20&c=Jqk_QekTA2BCqruuSM2EhE8BNbqjbFZhEOr1xcTgXh0=",
  },
  {
    id: 14,
    src: "https://media.istockphoto.com/id/1175293495/photo/garbage-truck-lifting-disposal-container.jpg?s=612x612&w=0&k=20&c=yvs1gko9WbdDVUBh9tHm7eU31b7Zv0ERyqRQ9bQKOjc=",
  },
  {
    id: 15,
    src: "https://media.istockphoto.com/id/1225674434/photo/garbage-trash-or-waste-dumpster-full-of-household-junk-concept-of-cleaning-cleanup-hoarding.jpg?s=612x612&w=0&k=20&c=XSQSL808Se6JFDdjv4-33ypOD4Q8A5Dc0tIzT_Z5VrU=",
  },
  {
    id: 16,
    src: "https://media.istockphoto.com/id/175528686/photo/airport-cleaning-equipment.jpg?s=612x612&w=0&k=20&c=XdxgEL-mOJU-uOQh6SXruwcWMryBovY5aMBu2586138=",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default PictureCards;
