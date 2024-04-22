import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-neutral-content p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="btn btn-secondary">Devdynamos Event</button>
      </div>
      <div>
        <Link href="/login">
          <button className="btn btn-outline btn-info mr-4">Login</button>
        </Link>
        <Link href="/register">
          <button className="btn btn-outline btn-success mr-4">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
