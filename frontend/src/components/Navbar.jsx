import { Link } from "react-router-dom";

function Navbar({ isAuthenticated }) {
  return (
    <nav className="bg-[#6103af] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Portal</h1>
        <div>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="mr-4 hover:underline">Login</Link>
              <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
            </>
          ) : (
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => { localStorage.removeItem("token"); window.location.reload(); }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
