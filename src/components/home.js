import React from "react";
import Corousel from "../utils/corousel";
import Card1 from "../utils/card-1";
import img1 from "../../src/components/assets/img-1.jpg";
import img2 from "../../src/components/assets/img-2.jpg";
import img3 from "../../src/components/assets/img-3.jpg";
import img4 from "../../src/components/assets/img-4.jpg";
import img5 from "../../src/components/assets/img-5.jpg";




import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 bg-[#181d30] pb-10">
      <Corousel />

      <div className="py-20 grid grid-cols-3 relative mb-60 md:mb-80">

        <h1 className="absolute text-md md:text-5xl top-[60%] md:top-[60%] left-[30%] md:left-[40%] font-playwrite text-[#f7b844]">Happy Birthday</h1>

        <div className="memog1 img  rounded-full  w-12 h-12 md:w-28 md:h-28 absolute top-5 left-5 md:top-10 md:left-10">
          <img className=" imgg-2 memogi-pop1  absolute top-0 rounded-lg" src={img1} />
        </div>

        <div className="memog2 img rounded-full w-12 h-12 md:w-28 md:h-28 absolute top-0 left-20 md:top-50 md:left-60">
          <img className=" imgg-2 memogi-pop2 absolute top-0 rounded-lg" src={img2} />
        </div>

        <div className="memog3 img rounded-full w-12 h-12 md:w-28 md:h-28 absolute  top-32 left-10 md:top-60 md:left-60">
          <img className=" imgg-2 memogi-pop3 absolute top-0 rounded-lg" src={img3} />
        </div>

        <div className="memog4 img rounded-full w-12 h-12 md:w-28 md:h-28 absolute top-40 left-10 md:top-40 md:left-24">
          <img className=" imgg-2 memogi-pop4 absolute top-0 rounded-lg" src={img4} />
        </div>

        <div className="memog5 img rounded-full w-12 h-12 md:w-28 md:h-28 absolute  top-40 left-20 md:top-60 md:left-60">
          <img className=" imgg-2 memogi-pop5 absolute top-0 rounded-lg" src={img5} />
        </div>
      </div>

      <div className="mt-10 flex justify-between  flex-col md:flex-row ">
        <div className="md:w-[70%] flex flex-col gap-4 order-2 md:order-1 text-center md:text-start items-center md:items-start">
          <p className="hidden md:block font-quicksand mt-5 md:mt-0 text-white">Sravanthi is a strong, independent woman passionate about cricket, learning, and photography. Her dedication to cricket highlights her athletic prowess, while her academic pursuits showcase her commitment to personal growth. Sravanthi’s photography captures moments with a unique perspective, available on her gallery site. Each image reflects her creativity and ability to find beauty in everyday scenes. Explore her gallery to experience her diverse talents.</p>
          <p className=" md:hidden font-quicksand mt-5 md:mt-0 text-white">Sravanthi is a strong, independent woman with a passion for cricket, learning, and photography. Her gallery showcases her creative photos, reflecting her unique perspective and dedication to capturing beauty.

</p>
          <h1 className="text-4xl font-bold text-white">Sravanthi</h1>
       <Link to="/galary"><button className=" w-fit flex items-center text-white bg-[#f7b844] px-4 py-2 rounded-md">Clicks📸</button>
       </Link>
        </div>
        <div className="md:w-[20%] order-1 md:order-2">
        <Card1 />
        </div>
      </div>
    </div>
  );
};

export default Home;
