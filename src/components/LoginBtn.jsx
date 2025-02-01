"use client"

import { signIn, signOut } from "next-auth/react";

const LoginBtn = () => {
  return (
    <div>
      <button className="text-white" onClick={() => signIn()}>Login now</button>{" "}
    </div>
  );
};

export default LoginBtn;
