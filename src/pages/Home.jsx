import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <div>
      <ImageSlider /> {/* ✅ Now only on Home Page */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Business</h1>
        <p className="text-lg text-gray-600 mt-4">
          We offer the best services for your needs.
        </p>
      </div>
    </div>
  );
}

export default Home;
