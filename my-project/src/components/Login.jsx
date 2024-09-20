import logo from '../assets/logo.svg';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-6xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center items-center">
          <img
            src={logo} // Replace with your logo URL
            alt="vRide Logo"
            className="w-24 h-24 md:w-36 md:h-36 rounded-circle"
          />
          <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-center">
            Unlock Campus Rides with Ease
          </h2>
          <form className="mt-8 w-full max-w-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full py-3 bg-blue-600 text-white text-lg font-bold rounded hover:opacity-90">
              LOG IN
            </button>
            <p className="text-right mt-2 text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Dont have an account?</p>
            <button className="mt-2 text-blue-500 border border-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white">
              REGISTER
            </button>
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Welcome to vRide!
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;