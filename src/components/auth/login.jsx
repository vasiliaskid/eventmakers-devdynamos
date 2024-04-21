"use client";

export const Login = () => {
  return (
    <main className="space-y-2">
      <section className="space-y-3">
        <h1 className="font-bold text-center text-3xl">Welcome Back!</h1>
        <p className="text-l">Login here</p>
      </section>
      <form className="space-y-2">
        <input
          name="email"
          placeholder="emailmu@domain.com"
          className="input input-bordered"
        />
        <input
          name="password"
          placeholder="Password"
          className="input input-bordered"
        />
        <button className="btn btn-primary">Log In</button>
      </form>
      <p className="text-xs mt-400 text-center">
        Don't have an account?
        <a className="btn btn-active btn-link" href="/">
          Register Here
        </a>
      </p>
    </main>
  );
};
