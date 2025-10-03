import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoleCard } from "@/components/RoleCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  User, 
  ShoppingBag, 
  Truck, 
  Shield, 
  Link as LinkIcon, 
  Cpu, 
  FileText, 
  Activity, 
  Mic, 
  Award,
  Play,
  BookOpen
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.light),theme(colors.background))] opacity-20" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 animate-fade-up">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 animate-scale-in">
              Blockchain-Powered Agriculture
            </Badge>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              <span className="text-primary">Transparent</span> Supply Chain for Indian Agriculture
            </h1>
            <p className="text-lg text-muted-foreground">
              AgriChain leverages blockchain technology to create a fair, transparent, and efficient 
              agricultural supply chain ecosystem connecting farmers directly with buyers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/auth?register=true">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#demo" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-glow animate-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-buyer/20 p-8">
                <div className="grid h-full grid-cols-2 gap-4">
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <div className="mb-2 text-sm font-medium text-muted-foreground">Live Transactions</div>
                    <div className="text-2xl font-bold text-primary">2,847</div>
                  </div>
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <div className="mb-2 text-sm font-medium text-muted-foreground">Active Farmers</div>
                    <div className="text-2xl font-bold text-buyer">1,523</div>
                  </div>
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <div className="mb-2 text-sm font-medium text-muted-foreground">Products Listed</div>
                    <div className="text-2xl font-bold text-logistics">4,892</div>
                  </div>
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <div className="mb-2 text-sm font-medium text-muted-foreground">Verified Buyers</div>
                    <div className="text-2xl font-bold text-admin">3,124</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Blockchain Verified</p>
                  <p className="text-xs text-muted-foreground">Immutable records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">For Everyone in the Supply Chain</h2>
            <p className="mt-2 text-muted-foreground">Choose your role to get started</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <RoleCard
              title="Farmers & MSMEs"
              icon={User}
              features={[
                "Verified profiles with digital ID",
                "Product listing with IoT data",
                "Voice & multilingual support",
              ]}
              linkTo="/auth?role=farmer"
              colorScheme="primary"
            />
            
            <RoleCard
              title="Buyers"
              icon={ShoppingBag}
              features={[
                "View product provenance",
                "Real-time freshness data",
                "Secure escrow payments",
              ]}
              linkTo="/auth?role=buyer"
              colorScheme="buyer"
            />
            
            <RoleCard
              title="Logistics"
              icon={Truck}
              features={[
                "Real-time shipment tracking",
                "IoT condition monitoring",
                "Digital delivery confirmation",
              ]}
              linkTo="/auth?role=logistics"
              colorScheme="logistics"
            />
            
            <RoleCard
              title="Admins"
              icon={Shield}
              features={[
                "User verification",
                "Quality control",
                "Fraud detection",
              ]}
              linkTo="/auth?role=admin"
              colorScheme="admin"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">Powerful Features</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              AgriChain combines cutting-edge technologies to revolutionize agricultural supply chains
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Blockchain Provenance"
              description="Every transaction and product movement is recorded on an immutable blockchain ledger ensuring complete transparency."
              icon={LinkIcon}
              colorScheme="buyer"
            />
            
            <FeatureCard
              title="IoT Monitoring"
              description="Real-time monitoring of product conditions (temperature, humidity) throughout the supply chain journey."
              icon={Cpu}
              colorScheme="primary"
            />
            
            <FeatureCard
              title="Smart Contracts"
              description="Automated escrow payments and quality verification through tamper-proof smart contracts."
              icon={FileText}
              colorScheme="admin"
            />
            
            <FeatureCard
              title="AI Fraud Detection"
              description="Machine learning algorithms monitor transactions for anomalies and potential fraud."
              icon={Activity}
              colorScheme="logistics"
            />
            
            <FeatureCard
              title="Voice Interface"
              description="Voice commands and multilingual support for farmers with limited digital literacy."
              icon={Mic}
              colorScheme="accent"
            />
            
            <FeatureCard
              title="Sustainability Rewards"
              description="Farmers earn tokens for sustainable practices that can be redeemed for benefits."
              icon={Award}
              colorScheme="secondary"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold">Ready to transform agricultural supply chains?</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90">
            Join AgriChain today and be part of the movement towards transparency, fairness, 
            and efficiency in Indian agriculture.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/auth?register=true">Get Started for Free</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <a href="#docs" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Read Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
