import { Sprout, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Sprout className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">AgriChain</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Blockchain-powered transparent supply chain platform for Indian agriculture and MSMEs.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">API</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Guides</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; 2025 AgriChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
