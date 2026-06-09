import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import SeekerHome from "./pages/SeekerHome";
import AuthSeeker from "./pages/AuthSeeker";
import AuthAgent from "./pages/AuthAgent";
import AuthAdmin from "./pages/AuthAdmin";
import AgentDashboard from "./pages/AgentDashboard";
import AdminPanel from "./pages/AdminPanel";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-lg glass-card hover:bg-white/10 transition-all duration-200"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Landing} />
      <Route path={"/seeker"} component={SeekerHome} />
      <Route path={"/auth/seeker"} component={AuthSeeker} />
      <Route path={"/auth/agent"} component={AuthAgent} />
      <Route path={"/auth/admin"} component={AuthAdmin} />
      <Route path={"/agent/dashboard"} component={AgentDashboard} />
      <Route path={"/admin/panel"} component={AdminPanel} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  return (
    <>
      <ThemeToggle />
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
