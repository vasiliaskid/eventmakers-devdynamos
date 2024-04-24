import React from "react";
import Navbar from "@/components/auth/navbar";
import Footer from "@/components/auth/footer";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">Halaman yang dicari sedang diperbaiki.</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
