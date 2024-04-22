"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Register = () => {
  const router = useRouter();
  const formRef = useRef();
  const [message, setMessage] = useState("");

  async function handleRegister(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("https://eventmakers.devscale.id/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.status === 201) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
      formRef.current.reset();
      router.push("/dashboard");
    }

    if (res.status === 405 || res.status === 500) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
    }
  }

  return (
    <main className="space-y-2">
      <section>
        <h1 className="font-bold text-center text-3xl">Join Us Now.</h1>
      </section>
      <form ref={formRef} className="space-y-2" action={handleRegister}>
        <input
          name="name"
          placeholder="Nama"
          className="input input-bordered"
        />
        <input
          name="email"
          placeholder="email@domain.com"
          className="input input-bordered"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          className="input input-bordered"
        />
        <button className="btn btn-primary">Sign Up</button>
      </form>
      <p className="text-xs mt-400 text-center">
        Already have an account?
        <a className="btn btn-active btn-link" href="/login">
          Login Here
        </a>
      </p>
      {message !== "" ? <div>{message}</div> : null}
    </main>
  );
};
