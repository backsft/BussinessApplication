function Services() {
  return (
    <div className="container mx-auto py-30 px-5 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800">
        Enterprise-Grade <span className="text-blue-600">Software Solutions</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        We specialize in building **scalable, secure, and high-performance** applications using **Java, Spring Boot, React.js, and cloud technologies**.
      </p>

      {/* ✅ Services Grid */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 🔹 Custom Web Applications */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600">Custom Web Applications</h3>
          <p className="text-gray-600 mt-2">
            Full-stack web apps using **React.js, Spring Boot, PostgreSQL**, and **REST APIs** with enterprise-grade security.
          </p>
        </div>

        {/* 🔹 Enterprise Software */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600">Enterprise Software</h3>
          <p className="text-gray-600 mt-2">
            Scalable **ERP, CRM, and custom enterprise solutions** built with **Spring Boot Microservices**.
          </p>
        </div>

        {/* 🔹 API Development */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600">API Development</h3>
          <p className="text-gray-600 mt-2">
            Secure and optimized **RESTful & GraphQL APIs** with **JWT authentication** and OAuth2 security.
          </p>
        </div>

        {/* 🔹 Cloud Deployment */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600">Cloud Deployment</h3>
          <p className="text-gray-600 mt-2">
            **AWS, Docker, Kubernetes** for seamless deployment with CI/CD pipelines.
          </p>
        </div>

        {/* 🔹 E-Commerce Solutions */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600">E-Commerce Solutions</h3>
          <p className="text-gray-600 mt-2">
            Robust **e-commerce platforms** with **secure payment integration** and seamless UX.
          </p>
        </div>

        {/* 🔹 AI-Powered Solutions */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600">AI-Powered Solutions</h3>
          <p className="text-gray-600 mt-2">
            Leverage **AI & Machine Learning** for chatbots, predictive analytics, and automation.
          </p>
        </div>
      </div>

      {/* ✅ Call-to-Action */}
      <div className="mt-10">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get a Free Consultation
        </a>
      </div>
    </div>
  );
}

export default Services;
