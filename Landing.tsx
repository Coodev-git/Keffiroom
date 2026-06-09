import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Search, Home, Shield, ChevronRight, ArrowRight } from "lucide-react";

export default function Landing() {
  const [, navigate] = useLocation();

  const roles = [
    {
      id: "seeker",
      name: "Seeker",
      description: "Find verified rooms near NSUK",
      icon: Search,
      gradient: "from-green-500 to-teal-500",
      path: "/auth/seeker",
    },
    {
      id: "agent",
      name: "Agent / Caretaker",
      description: "List and manage your properties",
      icon: Home,
      gradient: "from-amber-500 to-orange-500",
      path: "/auth/agent",
    },
    {
      id: "admin",
      name: "Admin",
      description: "Verification & trust management",
      icon: Shield,
      gradient: "from-teal-500 to-green-500",
      path: "/auth/admin",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Decorative mesh gradient backgrounds - Hidden on light mode */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-20 right-10 w-96 h-96 mesh-gradient-warm" />
        <div className="absolute bottom-20 left-10 w-96 h-96 mesh-gradient-cool" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-black/40 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                <span className="material-symbols-outlined text-green-500">home</span>
              </div>
              <h1 className="text-xl font-bold glow-text">KeffiRooms</h1>
            </div>
            <p className="text-sm text-muted-foreground">Trusted Student Housing</p>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container py-20 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Find Your <span className="glow-text">Perfect Room</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Discover verified, trusted student housing near NSUK. Browse listings, connect with verified agents, and secure your ideal accommodation with confidence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => navigate("/auth/seeker")}
                  className="btn-primary group"
                >
                  Start Searching
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => navigate("/seeker")}
                  className="btn-secondary"
                >
                  Browse as Guest
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/10 dark:border-white/10">
                <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
                  <p className="text-2xl font-bold glow-text">500+</p>
                  <p className="text-sm text-muted-foreground">Verified Listings</p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <p className="text-2xl font-bold glow-text">2K+</p>
                  <p className="text-sm text-muted-foreground">Happy Students</p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
                  <p className="text-2xl font-bold glow-text">100%</p>
                  <p className="text-sm text-muted-foreground">Verified Agents</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="hidden lg:block animate-float">
              <div className="glass-card-hover p-6">
                <div className="w-full h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-green-500/50">apartment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Selection Section */}
        <section className="container py-20">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h3 className="text-4xl md:text-5xl font-bold">Choose Your Role</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you are searching for a room, listing properties, or managing trust and verification, we have the right tools for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.id}
                  className="glass-card-hover p-8 cursor-pointer group animate-fade-up hover:animate-glow-pulse"
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => navigate(role.path)}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-foreground mb-2">{role.name}</h4>
                  <p className="text-muted-foreground text-sm mb-6">{role.description}</p>

                  {/* CTA */}
                  <div className="flex items-center text-green-500 font-semibold group-hover:gap-2 transition-all">
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20 border-t border-black/10 dark:border-white/10">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h3 className="text-4xl md:text-5xl font-bold">Why Choose KeffiRooms</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Verified Listings", desc: "All properties are verified by our admin team" },
              { title: "Trust Capture", desc: "Secure verification for peace of mind" },
              { title: "Easy Communication", desc: "Direct contact with verified agents" },
              { title: "Secure Process", desc: "Protected booking and coordination" },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card-hover p-6 animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <h5 className="font-bold text-foreground mb-2">{feature.title}</h5>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-colors duration-300">
          <div className="container py-12 text-center text-muted-foreground text-sm">
            <p>Copyright 2026 KeffiRooms. All rights reserved. Built with trust and transparency.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
