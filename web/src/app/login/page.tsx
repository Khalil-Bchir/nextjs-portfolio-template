//Login.tsx

"use client";

import Login from "@/components/component/login";
import { AuthProvider } from "@/context/AuthContext";

export default function Auth() {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  );
}
