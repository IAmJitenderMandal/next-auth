"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
  });
  console.log(user);
  const onSubmit = () => {};

  return (
    <div className="flex flex-col w-[50%] mx-auto">
      Signup
      <hr />
      <form action="" className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="text-black"
          id="username"
          onChange={(e) => {
            setUser({ ...user, userName: e.target.value });
          }}
          value={user.userName}
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
        <button onSubmit={onSubmit} type="submit">
          signUp
        </button>
        <h3>
          <Link href="/login">go on Login</Link>
        </h3>
      </form>
    </div>
  );
}
