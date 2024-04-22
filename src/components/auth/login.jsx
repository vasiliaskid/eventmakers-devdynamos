"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("https://eventmakers.devscale.id/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 200) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
      router.push("/dashboard");
    }
    if (res.status === 401 || res.status === 404) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
    }
  }

  return (
    <main className="space-y-2">
      <section className="space-y-3">
        <h1 className="font-bold text-center text-3xl">Welcome Back!</h1>
        <p className="text-l">Login here</p>
      </section>
      <form action={handleLogin} className="space-y-2">
        <input
          name="email"
          placeholder="email@domain.com"
          className="input input-bordered"
          required
        />
        <input
          name="password"
          placeholder="Password"
          className="input input-bordered"
          type="password"
          required
        />
        <button className="btn btn-primary">Log In</button>
      </form>
      <p className="text-xs mt-400 text-center">
        Don't have an account?
        <a className="btn btn-active btn-link" href="/register">
          Register Here
        </a>
      </p>
      {message !== "" ? <div>{message}</div> : null}
    </main>
  );
};
