
function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div className="bg-white flex shadow-lg rounded-lg overflow-hidden" style={{ width: '1920px', height: '1080px' }}>
        {/* Left Side - Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-center">
          <img
            src="https://via.placeholder.com/150" // Replace with your logo URL
            alt="vRide Logo"
            className="w-36 h-36"
          />
          <h2 className="text-4xl font-semibold mt-4">Unlock Campus Rides with Ease</h2>
          <form className="mt-10 w-3/4">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full py-3 bg-blue-600 text-white text-xl font-bold rounded hover:opacity-90">
              LOG IN
            </button>
            <p className="text-right mt-4 text-lg text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </form>
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-xl">Dont have an account?</p>
            <button className="mt-4 text-blue-500 border border-blue-500 px-6 py-2 text-lg rounded hover:bg-blue-500 hover:text-white">
              REGISTER
            </button>
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-16 flex flex-col justify-center">
          <h2 className="text-5xl font-semibold mb-6">Welcome to vRide!</h2>
          <p className="text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;