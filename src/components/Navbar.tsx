import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Sprout className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">AgriChain</span>
          </Link>
          
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/auth?register=true">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
