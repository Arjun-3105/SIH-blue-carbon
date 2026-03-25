"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Users, UserCheck, FileText, ClipboardList, PieChart,
  ShieldCheck, CheckCircle, ArrowRight, Plus, Search,
  Filter, Download, Zap, Bell, TrendingUp, Activity,
  Eye, RefreshCw, Settings, BarChart3, Clock, Award,
  Target, Flame, Star, Crown, LineChart
} from "lucide-react";

// Utility functions
const getStatusColor = (status: string) => {
  if (status === "pending")
    return "text-amber-700 bg-amber-100 border-amber-200";
  if (status === "active")
    return "text-green-700 bg-green-100 border-green-200";
  if (status === "rejected")
    return "text-red-700 bg-red-100 border-red-200";
  if (status === "under_review")
    return "text-blue-700 bg-blue-100 border-blue-200";
  if (status === "beta")
    return "text-purple-700 bg-purple-100 border-purple-200";
  return "text-gray-600 bg-gray-100 border-gray-200";
};

const getPriorityColor = (priority: string) => {
  if (priority === "high")
    return "text-red-600 bg-red-50 border-red-200";
  if (priority === "medium")
    return "text-yellow-600 bg-yellow-50 border-yellow-200";
  if (priority === "low")
    return "text-green-600 bg-green-50 border-green-200";
  return "text-gray-600 bg-gray-50 border-gray-200";
};

export default function AdminDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeColor, setActiveColor] = useState("bg-blue-500"); // New state for background color

  useEffect(() => {
    // Change the landing page color
    document.body.style.backgroundColor = "#f0f4f8"; // Set to desired color
  }, []);

  return (
    <div className={`min-h-screen ${activeColor}`}> {/* Apply the background color here */}
      {/* Your dashboard content goes here */}
    </div>
  );
}