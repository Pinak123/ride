
const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white flex flex-col justify-between">
      {/* Profile Section */}
      <div className="p-6">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100" // Placeholder profile image URL
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
          <p className="text-sm opacity-75">Administrator</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10">
          <a href="#dashboard" className="block py-2.5 px-4 hover:bg-blue-800 rounded">
            Dashboard
          </a>
          <a href="#settings" className="block py-2.5 px-4 hover:bg-blue-800 rounded">
            Settings
          </a>
          <a href="#help" className="block py-2.5 px-4 hover:bg-blue-800 rounded">
            Help
          </a>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="p-6">
        <button className="w-full py-2.5 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;