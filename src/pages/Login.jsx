function Login() {
    return (
      <div className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="mt-4 text-gray-600">Enter your credentials to access your account.</p>
        
        <form className="mt-6 max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input 
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
  
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;
  