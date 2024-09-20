import logo from '../assets/logo.svg'
function Login() {
  return (
    <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md flex shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 p-5">
          <div className="flex flex-col items-center justify-center">
            <img
              src={logo} // Replace with your logo
              alt="vRide"
              className="w-24 h-24 rounded-circle"
            />
            <h2 className="text-2xl font-semibold mt-4">Vride Team</h2>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="w-full py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded hover:opacity-90">
              LOG IN
            </button>
            <p className="text-right mt-2 text-sm text-purple-500 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Dont have an account?</p>
            <button className="mt-2 text-red-500 border border-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white">
              REGISTER
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">We are more than just a company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;