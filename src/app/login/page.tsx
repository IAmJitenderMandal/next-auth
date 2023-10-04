"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const onSubmit = async (e: any) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login successfully");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col w-[50%] mx-auto">
      Login
      <hr />
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="text-black"
          id="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          value={user.email}
          type="text"
          name="email"
          placeholder="email"
        />
        <label htmlFor="password">Username</label>
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
        <button onClick={onSubmit} type="submit">
          Login
        </button>
        <h3>
          <Link href="/signup">go on Signup</Link>
        </h3>
      </div>
    </div>
  );
}
