function ContactUs() {
  return (
    <div className="container mx-auto py-30 px-5">
      {/* 📢 Page Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center">
        Get In <span className="text-blue-600">Touch</span> With Us
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
        Have a question? Need help with your project? Fill out the form below or reach out to us directly.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {/* 📝 Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Your subject here"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 📌 Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800">Our Contact Info</h3>
          <p className="text-gray-600 mt-2">We are available 24/7 to assist you!</p>

          <div className="mt-6 space-y-4">
            {/* 📧 Email */}
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-2xl">📧</span>
              <p className="text-gray-700 font-medium">kabirmia526@gmail.com</p>
            </div>

            {/* 📞 Phone */}
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-2xl">📞</span>
              <p className="text-gray-700 font-medium">+880 (191) 224-9497</p>
            </div>

            {/* 📍 Address */}
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-2xl">📍</span>
              <p className="text-gray-700 font-medium">
                Mirpur 14, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* 🌍 Updated Google Map with Mirpur 14, Dhaka */}
          <div className="mt-6">
            <iframe
              className="w-full h-48 rounded-lg border"
              src="https://maps.google.com/maps?q=Mirpur%2014%2C%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Google Maps - Mirpur 14, Dhaka"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
