function Services() {
  return (
    <section className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p className="text-gray-600 mt-2">Modern and responsive websites.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Marketing</h3>
          <p className="text-gray-600 mt-2">SEO and digital marketing services.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Consulting</h3>
          <p className="text-gray-600 mt-2">Expert advice for your business.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
