import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Shield, CheckCircle, XCircle, Clock, LogOut, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function AdminPanel() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<"pending" | "verified" | "rejected">("pending");

  const pendingListings = [
    {
      id: 1,
      title: "Cozy Studio Near Campus",
      agent: "Chidi Okonkwo",
      submittedAt: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      title: "Modern 2-Bedroom Apartment",
      agent: "Amina Hassan",
      submittedAt: "5 hours ago",
      status: "pending",
    },
  ];

  const verifiedListings = [
    {
      id: 3,
      title: "Spacious 3-Bedroom House",
      agent: "Tunde Adeyemi",
      verifiedAt: "1 day ago",
      status: "verified",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative mesh gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 mesh-gradient-cool" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                <span className="material-symbols-outlined text-teal-500">shield</span>
              </div>
              <div>
                <h1 className="font-bold glow-text">KeffiRooms</h1>
                <p className="text-xs text-text-muted">Admin Panel</p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="sm"
              className="gap-2 text-text-secondary hover:text-text-primary"
            >
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </Button>
          </div>
        </nav>

        <section className="container py-12">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Verification & Trust Management</h2>
            <p className="text-text-muted mt-2">Review and verify property listings and agent accounts</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 my-12">
            {[
              { label: "Pending Review", value: "2", icon: "schedule", color: "from-amber-500 to-orange-500" },
              { label: "Verified", value: "45", icon: "verified", color: "from-green-500 to-teal-500" },
              { label: "Rejected", value: "3", icon: "cancel", color: "from-red-500 to-red-600" },
              { label: "Total Agents", value: "28", icon: "shield", color: "from-teal-500 to-green-500" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined text-white text-xl">{stat.icon}</span>
                </div>
                <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="border-b border-white/10 mb-6 flex gap-8">
            {[
              { id: "pending" as const, label: "Pending Review", count: 2 },
              { id: "verified" as const, label: "Verified", count: 45 },
              { id: "rejected" as const, label: "Rejected", count: 3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 font-semibold transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-400"
                    : "border-transparent text-text-muted hover:text-text-primary"
                }`}
              >
                {tab.label} <span className="ml-2 text-sm">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-4">
            {activeTab === "pending" &&
              pendingListings.map((listing) => (
                <div key={listing.id} className="glass-card-hover p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary text-lg">{listing.title}</h4>
                      <p className="text-text-muted text-sm mt-1">Agent: {listing.agent}</p>
                      <p className="text-text-muted text-sm">Submitted {listing.submittedAt}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="btn-primary gap-2 h-9 text-sm">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Verify
                      </Button>
                      <Button variant="outline" className="h-9 gap-2 glass-card text-sm">
                        <span className="material-symbols-outlined text-sm">cancel</span>
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "verified" &&
              verifiedListings.map((listing) => (
                <div key={listing.id} className="glass-card p-6 border-green-500/30 bg-green-500/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-400 text-2xl">verified</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary">{listing.title}</h4>
                      <p className="text-text-muted text-sm">Agent: {listing.agent} - Verified {listing.verifiedAt}</p>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "rejected" && (
              <div className="glass-card p-8 text-center text-text-muted">
                <span className="material-symbols-outlined text-4xl mb-4 block opacity-50">info</span>
                <p>No rejected listings at this time</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
