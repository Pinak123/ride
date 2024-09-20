
const DashboardContent = () => {
  return (
    <div className="flex-grow p-10">
      <h1 className="text-3xl font-semibold text-blue-700">Welcome to Your Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Sample Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Statistics</h2>
          <p className="text-gray-600">Here you can view statistics about your performance.</p>
        </div>

        {/* Sample Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tasks</h2>
          <p className="text-gray-600">Check your ongoing tasks and projects here.</p>
        </div>

        {/* Sample Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Messages</h2>
          <p className="text-gray-600">View recent communications and updates here.</p>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Need Help?</h2>
        <p className="text-gray-600">
          If you need assistance with the dashboard or encounter any issues, please contact support.
        </p>
        <button className="mt-4 py-2.5 px-5 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-200">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default DashboardContent;