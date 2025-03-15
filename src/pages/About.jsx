function AboutUs() {
  return (
    <div className="container mx-auto py-20 px-5">
      {/* 🏢 Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Innovating the digital world through modern software solutions.
        </p>
      </div>

      {/* 🖥️ About Content Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
        {/* 📷 Image Section */}
        <div className="relative">
          <img
            src="/src/assets/Images/softwareDev.jpg"
            alt="Software Development"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* 📝 Description */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Building Scalable & Future-Ready Software
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We are a team of passionate developers, designers, and strategists dedicated to delivering high-quality 
            software solutions. Our expertise lies in **Java, Spring Boot, React, Microservices, Cloud Computing, and DevOps**.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            From startups to enterprises, we help businesses **streamline processes, enhance user experiences, and scale 
            efficiently** with cutting-edge technology.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our mission is to **empower businesses with smart and secure software** that drives digital transformation.
          </p>
        </div>
      </div>

      {/* 🚀 Our Strengths */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Choose Us?
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* ✅ Expertise */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-blue-600">🔍 Expertise in Modern Tech</h3>
            <p className="text-gray-600 mt-2">
              We specialize in **Java, Spring Boot, React, Kubernetes, AWS, and CI/CD automation** to build scalable applications.
            </p>
          </div>

          {/* 🚀 Scalable Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-blue-600">📈 Scalable & Secure</h3>
            <p className="text-gray-600 mt-2">
              Our solutions are built to **scale effortlessly** while ensuring top-notch **security and performance**.
            </p>
          </div>

          {/* 💡 Innovation */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-blue-600">💡 Innovation & AI-Driven</h3>
            <p className="text-gray-600 mt-2">
              We leverage **AI, ML, and automation** to drive **business efficiency and digital transformation**.
            </p>
          </div>
        </div>
      </div>

      {/* 🌍 Global Clients Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Trusted by Clients Worldwide 🌍
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We have successfully delivered **customized software solutions** for businesses across various industries, including 
          **finance, healthcare, e-commerce, and logistics**.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
