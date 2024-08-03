import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../src/components/assets/img-1.jpg";
import img2 from "../../src/components/assets/img-2.jpg";
import img3 from "../../src/components/assets/img-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Corousel = () => {
  return (
    <div className=" text-white shadow-md">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-row justify-between py-5 md:py-20 px-1 md:px-24 ">
            <div className="hidden md:block ">
              <p className="font-quicksand pr-20 ">
              A blend of creativity and compassion. As an accomplished artist, she uses her talent to create works that reflect her deep commitment to environmental issues and social justice. Her art, ranging from striking murals to detailed illustrations, often serves as a call to action for various causes. Emma’s dedication to her community is evident in her involvement with local non-profits and her efforts to raise awareness about important issues through her artwork. Her kindness and enthusiasm for making a difference are matched by her love for nature, which she often captures through her photography. Emma’s vibrant personality and unwavering commitment to both her art and her causes make her a truly inspiring individual.
              </p>
            </div>

            <img className="w-[100%] md:w-[200px]  rounded-md" src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-between py-5 md:py-20 px-1 md:px-24 ">
          <img className="w-[100%] md:w-[200px]  rounded-md" src={img2} />
            <div className="hidden md:block ">
              <p className="font-quicksand pl-20 ">
              A dynamic force, known for her creative spirit and dedication to social causes. She excels in her role as a graphic designer, where she uses her skills to promote environmental awareness and community initiatives. Her projects often feature bold, colorful designs that capture attention and inspire action. Emma’s commitment extends beyond her professional life; she is an active volunteer, organizing events and campaigns that support various charitable causes. Her vibrant personality and dedication to both her art and her community make her a cherished friend and a respected advocate. Outside of work, Emma loves exploring new hiking trails and documenting her adventures through photography, blending her love for nature with her artistic pursuits
              </p>
            </div>

          
          </div>
        </SwiperSlide>
       <SwiperSlide>
          <div className="flex flex-row justify-between py-5 md:py-20 px-1 md:px-24 ">
            <div className="hidden md:block ">
              <p className="font-quicksand pr-20 ">
              A beacon of positivity and creativity. Her infectious enthusiasm and warm smile light up any room she enters. With a passion for both art and community service, Emma dedicates her time to local charities and environmental causes. Her artistic talents are evident in her vibrant paintings and engaging community murals. Emma’s ability to blend creativity with a genuine desire to make a difference is truly inspiring. In her free time, she enjoys hiking and capturing nature’s beauty through her camera lens. Her friends and family admire her for her compassionate nature, her dedication to her craft, and her unwavering commitment to improving the world around her. Emma's presence is a reminder of the power of combining passion with purpose.
              </p>
            </div>

            <img className="w-[100%] md:w-[200px]  rounded-md" src={img3} />
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="flex flex-row ">
            <div>
              <p>
                In literary theory, a text is any object that can be "read",
                whether this object is a work of literature, a street sign, an
                arrangement of buildings on a city block, or styles of clothing.
                It is a set of signs that is available to be reconstructed by a
                reader if sufficient interpretants are available.In literary
                theory, a text is any object that can be "read", whether this
                object is a work of literature, a street sign, an arrangement of
                buildings on a city block, or styles of clothing. It is a set of
                signs that is available to be reconstructed by a reader if
                sufficient interpretants are available.{" "}
              </p>
            </div>
            <img className="w-40 h-60" src={img2} />
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide>
            <div>
                <div>
                    <p>hello this is the </p>
                </div>
                <img src={img3}/>
            </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Corousel;
