"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  console.log(user);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col w-[50%] mx-auto">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="text-black"
          id="username"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          value={user.username}
          type="text"
          name="userName"
          placeholder="username"
        />
        <label htmlFor="email">Email</label>
        <input
          className="text-black"
          id="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          value={user.email}
          type="email"
          name="email"
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="text-black"
          id="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          value={user.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <button onClick={onSignup} type="submit">
          signUp
        </button>
        <h3>
          <Link href="/login">go on Login</Link>
        </h3>
      </div>
    </div>
  );
}
