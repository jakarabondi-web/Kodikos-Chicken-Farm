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

export type NavGroup = {
  name: string;
  items: NavItem[];
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

export const NAV_GROUPS: NavGroup[] = [
  { name: "Overview", items: NAV_ITEMS.filter((i) => ["/"].includes(i.href)) },
  {
    name: "Farm",
    items: NAV_ITEMS.filter((i) =>
      ["/live-farm", "/flocks-houses", "/production", "/feed-inventory"].includes(i.href)
    ),
  },
  {
    name: "Commerce",
    items: NAV_ITEMS.filter((i) => ["/sales", "/orders", "/deliveries"].includes(i.href)),
  },
  {
    name: "Finance & Ops",
    items: NAV_ITEMS.filter((i) => ["/finance", "/expenses", "/reports", "/alerts"].includes(i.href)),
  },
  {
    name: "System",
    items: NAV_ITEMS.filter((i) => ["/staff", "/settings"].includes(i.href)),
  },
];
