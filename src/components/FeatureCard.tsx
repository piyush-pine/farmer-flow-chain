import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorScheme: "primary" | "buyer" | "logistics" | "admin" | "accent" | "secondary";
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  buyer: "bg-buyer/10 text-buyer",
  logistics: "bg-logistics/10 text-logistics",
  admin: "bg-admin/10 text-admin",
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
};

export const FeatureCard = ({ title, description, icon: Icon, colorScheme }: FeatureCardProps) => {
  return (
    <Card className="border-border/50 transition-all duration-300 hover:shadow-md group">
      <CardContent className="p-6">
        <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${colorClasses[colorScheme]}`}>
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
