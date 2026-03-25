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
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      {/* Your login form goes here */}
    </div>
  );
}