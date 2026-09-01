import {
  Home,
  MapPin,
  Building2,
  LineChart,
  Wheat,
  Users,
  Package,
  Truck,
  Smartphone,
  Receipt,
  BarChart3,
  BellRing,
  UserCog,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Live Farm", href: "/live-farm", icon: MapPin },
  { label: "Flocks & Houses", href: "/flocks-houses", icon: Building2 },
  { label: "Production", href: "/production", icon: LineChart },
  { label: "Feed & Inventory", href: "/feed-inventory", icon: Wheat },
  { label: "Sales & Customers", href: "/sales", icon: Users },
  { label: "Orders", href: "/orders", icon: Package },
  { label: "Deliveries", href: "/deliveries", icon: Truck },
  { label: "M-Pesa & Finance", href: "/finance", icon: Smartphone },
  { label: "Expenses", href: "/expenses", icon: Receipt },
  { label: "Reports & Analytics", href: "/reports", icon: BarChart3 },
  { label: "Alerts & Tasks", href: "/alerts", icon: BellRing },
  { label: "Staff & Roles", href: "/staff", icon: UserCog },
  { label: "Settings", href: "/settings", icon: Settings },
];
