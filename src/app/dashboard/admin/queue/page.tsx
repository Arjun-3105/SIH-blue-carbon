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
  const [activeItems, setActiveItems] = useState([]);

  return (
    <div className="p-4 m-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 flex-grow mr-2"
        />
        <button className="bg-blue-500 text-white rounded p-2">Search</button>
      </div>
      <div className="flex mb-4">
        <button className="bg-green-500 text-white rounded p-2 mr-2">Add Item</button>
        <button className="bg-yellow-500 text-white rounded p-2">Filter</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeItems.map((item) => (
          <div key={item.id} className={`border rounded p-4 ${getStatusColor(item.status)}`}> 
            <h2 className="font-semibold">{item.name}</h2>
            <p className="mt-2">Status: {item.status}</p>
            <p className="mt-2">Priority: {item.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
}