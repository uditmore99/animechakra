import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-black flex flex-row sm:flex-row items-center justify-between p-4">
      <div className="flex  items-center mb-4 lg:mb-0 lg:mr-4">
        <div className="mr-4">
          <a href="/" className="text-white hover:text-gray-500">
            Home
          </a>
        </div>
        <div className="mr-4">
          <a href="/" className="text-white hover:text-gray-500">
            Top Airing
          </a>
        </div>
        <div>
          <a href="/" className="text-white hover:text-gray-500">
            Profile
          </a>
        </div>
      </div>
      <div>
        <input
          type="text"
          className="px-2 py-1 rounded mb-4 lg:mb-0 lg:ml-4 border"
          placeholder="Search..."
          // value={(e) => e.target.value}
          // href={"/search/" + value}
        />
      </div>
    </nav>
  );
};

export default Navbar;
