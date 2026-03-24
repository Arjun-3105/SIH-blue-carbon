"use client";
import { jwtDecode } from "jwt-decode";

import React, { useState, useEffect } from "react";
import { Waves, Lock, Mail, Eye, EyeOff, Shield, UserCheck, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfessionalLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userRole, setUserRole] = useState("register");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedRole = typeof window !== "undefined" ? window.localStorage.getItem("bc_role") : null;
    if (savedRole) setUserRole(savedRole);
  }, []);

  const redirectToRoleDashboard = (role: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("bc_role", role);
    }
    const roleToPath: Record<string, string> = {
      owner: "/dashboard/owner",
      register: "/dashboard/Register",
      verifier: "/dashboard/verifier",
      buyer: "/dashboard/buyer",
      admin: "/dashboard/admin",
    };
    router.replace(roleToPath[role] ?? "/dashboard/owner");
  };

  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h1>Professional Login</h1>
      <div style={{ marginBottom: '15px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: '5px 0', padding: '10px', width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: '5px 0', padding: '10px', width: '100%' }}
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      <div>
        <button onClick={() => redirectToRoleDashboard(userRole)} style={{ padding: '10px 15px' }}>
          Login
        </button>
      </div>
    </div>
  );
}