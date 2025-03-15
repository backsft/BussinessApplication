import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <div>
      <ImageSlider /> {/* ✅ Business Image Slider */}

      <div className="container mx-auto text-center py-10 px-5">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Build Your Dream Website and Softwares with <span className="text-blue-600">Our Expert Team</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We create **high-performance, SEO-friendly, and visually stunning websites** tailored to grow your business.  
          Get a **modern, responsive, and secure** website today!
        </p>
        
        {/* ✅ Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
          <a
            href="/services"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            View Our Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
