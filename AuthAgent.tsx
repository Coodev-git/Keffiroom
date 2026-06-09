import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AuthAgent() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative mesh gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 mesh-gradient-warm" />
      </div>

      <div className="glass-card w-full max-w-md p-8 space-y-6 relative z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">Agent Login</h1>
          <p className="text-text-muted">Enter your phone number to manage your properties.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-text-primary block mb-2">Phone Number</label>
            <Input
              type="tel"
              placeholder="08012345678"
              className="glass-input"
            />
          </div>
          <Button className="w-full btn-primary">
            Continue
          </Button>
        </div>

        <div className="glass-card p-4 border-amber-500/30 bg-amber-500/5">
          <p className="text-sm text-text-secondary">
            New agent Please contact our admin team to get verified before listing properties.
          </p>
        </div>
      </div>
    </div>
  );
}
