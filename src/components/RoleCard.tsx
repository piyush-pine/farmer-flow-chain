import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  icon: LucideIcon;
  features: string[];
  linkTo: string;
  colorScheme: "primary" | "buyer" | "logistics" | "admin";
}

const colorClasses = {
  primary: {
    bg: "bg-primary-light",
    icon: "bg-primary/10 text-primary",
    check: "text-primary",
    button: "bg-primary hover:bg-primary/90 text-primary-foreground",
  },
  buyer: {
    bg: "bg-buyer-light",
    icon: "bg-buyer/10 text-buyer",
    check: "text-buyer",
    button: "bg-buyer hover:bg-buyer/90 text-buyer-foreground",
  },
  logistics: {
    bg: "bg-logistics-light",
    icon: "bg-logistics/10 text-logistics",
    check: "text-logistics",
    button: "bg-logistics hover:bg-logistics/90 text-logistics-foreground",
  },
  admin: {
    bg: "bg-admin-light",
    icon: "bg-admin/10 text-admin",
    check: "text-admin",
    button: "bg-admin hover:bg-admin/90 text-admin-foreground",
  },
};

export const RoleCard = ({ title, icon: Icon, features, linkTo, colorScheme }: RoleCardProps) => {
  const colors = colorClasses[colorScheme];

  return (
    <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className={`${colors.bg} p-6`}>
        <div className={`${colors.icon} mx-auto flex h-14 w-14 items-center justify-center rounded-full`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-center text-xl font-semibold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${colors.check}`} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className={`w-full ${colors.button}`}>
          <Link to={linkTo}>Register as {title.split(" ")[0]}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
