import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import business images
import image1 from "../assets/Images/image1.jpg";
import image2 from "../assets/Images/image2.jpg";
import image3 from "../assets/Images/image3.jpg";
import image4 from "../assets/Images/image4.png";
import image5 from "../assets/Images/image5.png";
import image6 from "../assets/Images/image6.png";
import image7 from "../assets/Images/image7.png";
//import image8 from "../assets/Images/image8.jpeg";
import image9 from "../assets/Images/image9.png";
//import image10 from "../assets/Images/image10.png";
import image11 from "../assets/Images/image11.png";
import image12 from "../assets/Images/image12.png";

function ImageSlider() {
  const images = [image1,image3,image4,image5,image6,image7,image9,image2,image11,image12];

  return (
    <div className="w-full px-10 py-5 mt-30">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full max-w-10xl mx-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg md:h-[300px] sm:h-[250px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
