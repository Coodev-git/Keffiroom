import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Home, Plus, BarChart3, LogOut, Eye, Edit, Trash2 } from "lucide-react";

export default function AgentDashboard() {
  const [, navigate] = useLocation();

  const properties = [
    {
      id: 1,
      title: "Cozy Studio Near Campus",
      price: 45000,
      status: "Active",
      views: 234,
      inquiries: 12,
    },
    {
      id: 2,
      title: "Modern 2-Bedroom Apartment",
      price: 75000,
      status: "Active",
      views: 456,
      inquiries: 28,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative mesh gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 mesh-gradient-warm" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-500">home</span>
              </div>
              <div>
                <h1 className="font-bold glow-text">KeffiRooms</h1>
                <p className="text-xs text-text-muted">Agent Dashboard</p>
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
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Welcome, Agent</h2>
              <p className="text-text-muted mt-2">Manage your properties and track inquiries</p>
            </div>
            <Button className="btn-primary gap-2">
              <span className="material-symbols-outlined">add</span>
              List New Property
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Active Listings", value: "2", icon: "home" },
              { label: "Total Views", value: "690", icon: "visibility" },
              { label: "Inquiries", value: "40", icon: "bar_chart" },
              { label: "Verified", value: "100%", icon: "verified" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <span className="material-symbols-outlined text-green-500 text-3xl mb-2 block">
                  {stat.icon}
                </span>
                <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Your Properties</h3>
            <div className="space-y-4">
              {properties.map((prop) => (
                <div key={prop.id} className="glass-card-hover p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">{prop.title}</h4>
                    <p className="text-text-muted text-sm mt-1">₦{prop.price.toLocaleString()}/month</p>
                    <div className="flex gap-4 mt-3 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        {prop.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">chat</span>
                        {prop.inquiries} inquiries
                      </span>
                      <span className="text-green-400 font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        {prop.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="glass-card">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
