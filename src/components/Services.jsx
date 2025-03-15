function Services() {
  return (
    <div className="container mx-auto py-20 px-5">
      {/* 📌 Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide cutting-edge software solutions to help businesses scale efficiently.
        </p>
      </div>

      {/* 🚀 Services Section */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 🔹 Custom Software Development */}
        <div className="p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-2xl font-semibold text-blue-600">💻 Custom Software Development</h3>
          <p className="text-gray-600 mt-2">
            We build high-performance **Java/Spring Boot** applications tailored to business needs. Our expertise includes:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-3">
            <li>Enterprise Web Applications</li>
            <li>Scalable Microservices Architecture</li>
            <li>API Development & Integration</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        {/* 🔹 Frontend Development */}
        <div className="p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-2xl font-semibold text-blue-600">🎨 Frontend Development</h3>
          <p className="text-gray-600 mt-2">
            We design and develop interactive **React.js** applications for seamless user experiences.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-3">
            <li>Modern, responsive UI/UX</li>
            <li>Component-based architecture</li>
            <li>Performance-optimized applications</li>
            <li>Integration with backend APIs</li>
          </ul>
        </div>

        {/* 🔹 Cloud & DevOps Solutions */}
        <div className="p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-2xl font-semibold text-blue-600">☁️ Cloud & DevOps Solutions</h3>
          <p className="text-gray-600 mt-2">
            We deploy applications on **AWS, Azure, and Google Cloud** with **CI/CD automation** for efficiency.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-3">
            <li>Docker & Kubernetes Deployment</li>
            <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
            <li>Scalable Cloud Architecture</li>
            <li>Monitoring & Security Implementation</li>
          </ul>
        </div>

        {/* 🔹 Database & Backend Engineering */}
        <div className="p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-2xl font-semibold text-blue-600">🗄️ Database & Backend Engineering</h3>
          <p className="text-gray-600 mt-2">
            We ensure **highly scalable and optimized databases** with secure backend integration.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-3">
            <li>PostgreSQL, MySQL, Oracle</li>
            <li>Database Optimization & Indexing</li>
            <li>Secure Data Encryption & Backup</li>
            <li>Serverless & Distributed Databases</li>
          </ul>
        </div>

        {/* 🔹 API Development & Integration */}
        <div className="p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-2xl font-semibold text-blue-600">🔗 API Development & Integration</h3>
          <p className="text-gray-600 mt-2">
            We design **secure and efficient RESTful & GraphQL APIs** for seamless third-party integrations.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-3">
            <li>RESTful API & GraphQL Development</li>
            <li>Third-Party API Integration</li>
            <li>OAuth & JWT Authentication</li>
            <li>WebSocket & Real-time APIs</li>
          </ul>
        </div>

        {/* 🔹 AI & Machine Learning */}
        <div className="p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-2xl font-semibold text-blue-600">🤖 AI & Machine Learning</h3>
          <p className="text-gray-600 mt-2">
            Implementing **AI-driven solutions** to enhance automation and predictive analytics.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mt-3">
            <li>AI-driven Automation & NLP</li>
            <li>Data Analytics & Business Intelligence</li>
            <li>Machine Learning Model Deployment</li>
            <li>Computer Vision & Image Recognition</li>
          </ul>
        </div>
      </div>

      {/* 🚀 Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Let's Build Your Next Big Project 🚀
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Whether you're a startup or an enterprise, we have the expertise to **bring your ideas to life** with 
          **scalable, secure, and high-performance software solutions**.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium hover:bg-blue-700 transition">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Services;
