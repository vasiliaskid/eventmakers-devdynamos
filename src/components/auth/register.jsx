import React from "react";

export const Register = () => {
  return (
    <form>
      <input
        name="name"
        placeholder="Full name"
        className="input input-bordered w-full"
      />
      <input
        name="email"
        placeholder="emailmu@domain.com"
        className="input input-bordered w-full"
      />
      <input
        name="password"
        placeholder="password"
        className="input input-bordered w-full"
      />
      <button className="btn btn-primary w-full">Sign Up</button>
    </form>
  );
};
