import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AuthSeeker() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative mesh gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 mesh-gradient-cool" />
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
          <h1 className="text-3xl font-bold text-text-primary">Find Your Room</h1>
          <p className="text-text-muted">Sign in to unlock agent contact details and save favorites.</p>
        </div>

        <div className="space-y-4">
          <Button className="w-full glass-card text-text-primary hover:bg-white/10">
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-text-muted">or</span>
            </div>
          </div>

          <div className="space-y-3">
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
        </div>

        <p className="text-center text-sm text-text-muted">
          Just browsing <button className="text-green-400 font-semibold hover:text-green-300">Skip login</button>
        </p>
      </div>
    </div>
  );
}
