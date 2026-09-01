export const owner = {
  name: "Vincent Kodiko",
  role: "Owner",
  initials: "VK",
  farm: "Kodiko Farm",
  location: "Oyugis, Kenya",
};

export const kpis = [
  { key: "pulse", label: "Farm Pulse", value: "91", unit: "/100", delta: "+8 vs yesterday", tone: "primary" as const },
  { key: "eggs", label: "Egg Production", value: "5,632", unit: "today", delta: "+4.3%", tone: "primary" as const },
  { key: "sales", label: "Sales Today", value: "KSh 184,400", unit: "", delta: "+14.8%", tone: "primary" as const },
  { key: "mpesa", label: "M-Pesa Receipts", value: "KSh 173,100", unit: "", delta: "98.7% reconciled", tone: "blue" as const },
  { key: "cash", label: "Available Cash", value: "KSh 1.82M", unit: "", delta: "Across accounts", tone: "muted" as const },
  { key: "orders", label: "Open Orders", value: "27", unit: "", delta: "12 due today", tone: "amber" as const },
];

export const houses = [
  { name: "House 1", birds: 1840, production: 92, target: 94, state: "Healthy" as const },
  { name: "House 2", birds: 2120, production: 94, target: 94, state: "Healthy" as const },
  { name: "House 3", birds: 1422, production: 81, target: 94, state: "Watch" as const },
  { name: "House 4", birds: 2250, production: 93, target: 94, state: "Healthy" as const },
];

export const houseDetails: Record<
  string,
  { mortality: string; feed: string; water: string; environment: string; tasks: string[]; warning?: string }
> = {
  "House 1": {
    mortality: "3 birds this week (0.16%)",
    feed: "620 kg consumed today",
    water: "1,840 L consumed today",
    environment: "27°C · 62% humidity",
    tasks: ["Morning egg collection — done", "Water line check — done"],
  },
  "House 2": {
    mortality: "1 bird this week (0.05%)",
    feed: "710 kg consumed today",
    water: "2,120 L consumed today",
    environment: "26°C · 60% humidity",
    tasks: ["Morning egg collection — done", "Vaccination due in 4 days"],
  },
  "House 3": {
    mortality: "9 birds this week (0.63%)",
    feed: "480 kg consumed today",
    water: "1,290 L consumed today",
    environment: "29°C · 71% humidity",
    tasks: ["Vet check requested", "Ventilation inspection — pending"],
    warning: "Production down 8.2% for 3 consecutive days. Environment running warmer than other houses.",
  },
  "House 4": {
    mortality: "2 birds this week (0.09%)",
    feed: "790 kg consumed today",
    water: "2,250 L consumed today",
    environment: "26°C · 59% humidity",
    tasks: ["Morning egg collection — done"],
  },
};

export const feedStock = [
  { name: "Layer Mash", daysRemaining: 3.4, note: "Depletes Sep 3 · suggest 50 bags", status: "Low" as const },
  { name: "Grower Mash", daysRemaining: 7.2, note: "Monitor", status: "Monitor" as const },
  { name: "Maize", daysRemaining: 10.6, note: "Healthy", status: "Healthy" as const },
  { name: "Soybean", daysRemaining: 8.1, note: "Healthy", status: "Healthy" as const },
];

export const priorities = [
  {
    title: "House 3 production 8.2% below target",
    reason: "Third day running — investigate before it compounds.",
    action: "Investigate",
    tone: "warn" as const,
  },
  {
    title: "138 trays awaiting dispatch",
    reason: "12 deliveries queued on today's route.",
    action: "Open board",
    tone: "blue" as const,
  },
  {
    title: "KSh 84,000 feed request",
    reason: "50 bags of layer mash, awaiting approval.",
    action: "Review",
    tone: "clay" as const,
  },
  {
    title: "11 likely reorders identified",
    reason: "Flagged by customer buying pattern.",
    action: "View opportunities",
    tone: "primary" as const,
  },
];

export const cashFlow = {
  net: "KSh 342,600",
  delta: "+18.6% vs last week",
  inflows: "KSh 612,400",
  outflows: "KSh 269,800",
  closing: "KSh 1.82M",
  series: [
    { day: "Mon", inflow: 62, outflow: 38 },
    { day: "Tue", inflow: 78, outflow: 42 },
    { day: "Wed", inflow: 55, outflow: 35 },
    { day: "Thu", inflow: 91, outflow: 48 },
    { day: "Fri", inflow: 70, outflow: 40 },
    { day: "Sat", inflow: 98, outflow: 30 },
    { day: "Sun", inflow: 80, outflow: 28 },
  ],
};

export const productionTrend = {
  today: 5632,
  average: 5428,
  target: 5800,
  diffPct: -2.9,
  series: [
    { day: "1", actual: 5320, target: 5800, avg: 5390 },
    { day: "5", actual: 5480, target: 5800, avg: 5410 },
    { day: "10", actual: 5390, target: 5800, avg: 5420 },
    { day: "15", actual: 5560, target: 5800, avg: 5430 },
    { day: "20", actual: 5610, target: 5800, avg: 5440 },
    { day: "25", actual: 5470, target: 5800, avg: 5425 },
    { day: "30", actual: 5632, target: 5800, avg: 5428 },
  ],
};

export const flow = {
  trays: 5632,
  orders: 164,
  deliveries: 138,
  payments: 121,
  cashIn: "KSh 74,200",
};

export const mpesa = {
  receipts: "KSh 1.73M",
  reconciledPct: 98.7,
  successful: "KSh 1,707,800",
  pending: "KSh 21,300",
  unmatched: "KSh 0",
};

export const transactions = [
  { date: "Sep 1", id: "MP83KX", party: "Sunrise Hotel", type: "Incoming", amount: "KSh 32,000", status: "Matched" as const },
  { date: "Sep 1", id: "MP71QZ", party: "Oyugis Market", type: "Incoming", amount: "KSh 48,600", status: "Matched" as const },
  { date: "Sep 1", id: "MP66PL", party: "Lakeview Resort", type: "Incoming", amount: "KSh 21,300", status: "Pending" as const },
  { date: "Aug 31", id: "MP59TR", party: "Kisumu Retailers", type: "Incoming", amount: "KSh 37,900", status: "Matched" as const },
  { date: "Aug 31", id: "MP44FD", party: "Feed Supplier Co.", type: "Outgoing", amount: "KSh 84,000", status: "Matched" as const },
];

export const opportunity = {
  expectedProduction: 210,
  confirmedDemand: 147,
  potentialExcess: 63,
  estimatedUnsoldValue: "KSh 18,900",
  likelyBuyers: 14,
};

export const topCustomers = [
  { name: "Sunrise Hotel", sales: "KSh 412,000", orders: 34, avgOrder: "KSh 12,100", lastOrder: "Today", trend: "up" as const },
  { name: "Oyugis Market", sales: "KSh 386,500", orders: 41, avgOrder: "KSh 9,400", lastOrder: "Today", trend: "up" as const },
  { name: "Lakeview Resort", sales: "KSh 298,200", orders: 22, avgOrder: "KSh 13,600", lastOrder: "6 days ago", trend: "down" as const },
  { name: "Kisumu Retailers", sales: "KSh 271,900", orders: 29, avgOrder: "KSh 9,400", lastOrder: "Yesterday", trend: "flat" as const },
  { name: "Quickmart Kisumu", sales: "KSh 204,300", orders: 18, avgOrder: "KSh 11,300", lastOrder: "2 days ago", trend: "up" as const },
];

export const customerDetails: Record<
  string,
  {
    segment: string;
    phone: string;
    location: string;
    status: string;
    lifetimeSales: string;
    outstanding: string;
    normalInterval: string;
    aiInsight: string;
  }
> = {
  "Sunrise Hotel": {
    segment: "Hospitality",
    phone: "+254 712 345 678",
    location: "Oyugis Town",
    status: "Active",
    lifetimeSales: "KSh 2.4M",
    outstanding: "KSh 0",
    normalInterval: "Every 3 days, 30–35 trays",
    aiInsight: "Sunrise Hotel normally orders 30–35 trays every 3 days. No order received in 6 days.",
  },
  "Oyugis Market": {
    segment: "Wholesale",
    phone: "+254 723 456 789",
    location: "Oyugis Market",
    status: "Active",
    lifetimeSales: "KSh 1.9M",
    outstanding: "KSh 0",
    normalInterval: "Every 2 days, 45–50 trays",
    aiInsight: "Order pattern is on schedule — no action needed.",
  },
  "Lakeview Resort": {
    segment: "Hospitality",
    phone: "+254 734 567 890",
    location: "Kisumu Road",
    status: "At risk",
    lifetimeSales: "KSh 1.5M",
    outstanding: "KSh 21,300",
    normalInterval: "Every 5 days, 20–25 trays",
    aiInsight: "Lakeview Resort is 2 days past its usual reorder window and carries an outstanding balance.",
  },
  "Kisumu Retailers": {
    segment: "Wholesale",
    phone: "+254 745 678 901",
    location: "Kisumu",
    status: "Active",
    lifetimeSales: "KSh 1.3M",
    outstanding: "KSh 9,400",
    normalInterval: "Every 4 days, 35–40 trays",
    aiInsight: "Order pattern is on schedule — no action needed.",
  },
  "Quickmart Kisumu": {
    segment: "Wholesale",
    phone: "+254 756 789 012",
    location: "Kisumu",
    status: "Active",
    lifetimeSales: "KSh 980,000",
    outstanding: "KSh 14,800",
    normalInterval: "Every 6 days, 18 trays",
    aiInsight: "Order pattern is on schedule — no action needed.",
  },
};

export const pipeline = [
  { stage: "Lead", count: 8 },
  { stage: "Contacted", count: 5 },
  { stage: "Interested", count: 6 },
  { stage: "Price Sent", count: 4 },
  { stage: "Order", count: 11 },
  { stage: "Repeat Customer", count: 34 },
];

export const segments = [
  { name: "Retail", desc: "Households", count: 128, sharePct: 22 },
  { name: "Wholesale", desc: "Shops, supermarkets, distributors", count: 41, sharePct: 38 },
  { name: "Hospitality", desc: "Hotels, restaurants, caterers", count: 19, sharePct: 27 },
  { name: "Institutions", desc: "Schools, hospitals, boarding", count: 7, sharePct: 9 },
  { name: "Resellers", desc: "", count: 5, sharePct: 4 },
];

export const flocks = [
  { house: "House 1", breed: "Isa Brown", ageWeeks: 42, capacity: 2000, birds: 1840 },
  { house: "House 2", breed: "Isa Brown", ageWeeks: 38, capacity: 2200, birds: 2120 },
  { house: "House 3", breed: "Lohmann Brown", ageWeeks: 51, capacity: 1600, birds: 1422 },
  { house: "House 4", breed: "Isa Brown", ageWeeks: 29, capacity: 2400, birds: 2250 },
];

export const orders = [
  { id: "ORD-2291", customer: "Sunrise Hotel", trays: 32, value: "KSh 38,400", status: "Delivered" as const, due: "Today" },
  { id: "ORD-2292", customer: "Oyugis Market", trays: 48, value: "KSh 52,800", status: "Delivered" as const, due: "Today" },
  { id: "ORD-2293", customer: "Lakeview Resort", trays: 21, value: "KSh 25,200", status: "In transit" as const, due: "Today" },
  { id: "ORD-2294", customer: "Kisumu Retailers", trays: 37, value: "KSh 40,700", status: "Queued" as const, due: "Today" },
  { id: "ORD-2295", customer: "Quickmart Kisumu", trays: 26, value: "KSh 29,900", status: "Confirmed" as const, due: "Tomorrow" },
  { id: "ORD-2296", customer: "Oyugis Boarding School", trays: 60, value: "KSh 66,000", status: "Pending" as const, due: "Tomorrow" },
];

export const deliveries = [
  { route: "Oyugis Town Loop", stops: 4, trays: 138, driver: "Peter O.", status: "Loading" as const, eta: "10:30 AM" },
  { route: "Kisumu Road", stops: 3, trays: 84, driver: "Grace A.", status: "In transit" as const, eta: "11:15 AM" },
  { route: "Lakeview Circuit", stops: 2, trays: 41, driver: "Peter O.", status: "Scheduled" as const, eta: "1:00 PM" },
];

export const expenseRequests = [
  { item: "Layer mash — 50 bags", category: "Feed", amount: "KSh 84,000", requestedBy: "Farm Manager", status: "Pending" as const },
  { item: "Vet visit — House 3", category: "Veterinary", amount: "KSh 12,000", requestedBy: "Vincent Kodiko", status: "Approved" as const },
  { item: "Diesel — delivery van", category: "Transport", amount: "KSh 8,400", requestedBy: "Peter O.", status: "Approved" as const },
  { item: "Water pump repair", category: "Maintenance", amount: "KSh 15,600", requestedBy: "Farm Manager", status: "Pending" as const },
];

export const staff = [
  { name: "Vincent Kodiko", role: "Owner" as const, access: "Strategic — money, production, sales, risk", status: "Active" as const },
  { name: "Grace Achieng", role: "Manager" as const, access: "Operational — production, sales, staff, alerts", status: "Active" as const },
  { name: "Peter Otieno", role: "Worker" as const, access: "House checks, eggs, feed, mortality, tasks", status: "Active" as const },
  { name: "Samuel Ochieng", role: "Worker" as const, access: "House checks, eggs, feed, mortality, tasks", status: "Active" as const },
];

export const alerts = [
  { level: "critical" as const, title: "House 3 mortality above threshold", detail: "9 birds this week vs. 2-bird average.", owner: "Grace Achieng", time: "2 hours ago" },
  { level: "attention" as const, title: "House 3 production 8.2% below target", detail: "Third consecutive day of decline.", owner: "Vincent Kodiko", time: "6 hours ago" },
  { level: "attention" as const, title: "Layer mash at 3.4 days remaining", detail: "Suggested reorder: 50 bags before Friday.", owner: "Grace Achieng", time: "8 hours ago" },
  { level: "info" as const, title: "All M-Pesa transactions reconciled", detail: "173,100 KSh across 12 transactions.", owner: "System", time: "This morning" },
  { level: "info" as const, title: "Vaccination due — House 2", detail: "Newcastle disease booster in 4 days.", owner: "Grace Achieng", time: "Yesterday" },
];

export const sinceAway = [
  "KSh 82,400 received overnight",
  "4 new orders placed",
  "2 deliveries completed",
  "60 feed bags received",
  "House 3 production -2.2%",
  "1 expense approval requested",
  "All M-Pesa transactions reconciled",
];

export const suggestedQuestions = [
  "Why did profits decline?",
  "Which customer should we contact?",
  "How many trays can we sell tomorrow?",
  "What is causing House 3 production problems?",
  "How much feed should we buy?",
  "Show unusual M-Pesa transactions.",
  "Predict my cash position next week.",
];

export const profitability = {
  revenue: "KSh 5.04M",
  grossProfit: "KSh 1.24M",
  margin: "24.6%",
  marginDelta: "+3.2%",
  expenses: [
    { category: "Feed", amount: "KSh 1.86M", pct: 46 },
    { category: "Payroll", amount: "KSh 930,000", pct: 23 },
    { category: "Transport", amount: "KSh 420,000", pct: 10 },
    { category: "Veterinary", amount: "KSh 340,000", pct: 8 },
    { category: "Maintenance", amount: "KSh 260,000", pct: 6 },
    { category: "Other", amount: "KSh 290,000", pct: 7 },
  ],
};

export const receivables = [
  { customer: "Lakeview Resort", amount: "KSh 21,300", bucket: "7 days" as const },
  { customer: "Kisumu Retailers", amount: "KSh 9,400", bucket: "Current" as const },
  { customer: "Quickmart Kisumu", amount: "KSh 14,800", bucket: "14 days" as const },
  { customer: "Oyugis Boarding School", amount: "KSh 38,600", bucket: "30+ days" as const },
];

export const procurementRequests = [
  { item: "Layer Mash", qty: "100 bags", unitCost: "KSh 3,250", total: "KSh 325,000", previous: "KSh 3,100", change: "+4.8%", status: "Pending" as const },
  { item: "Vaccines (Newcastle)", qty: "40 vials", unitCost: "KSh 1,800", total: "KSh 72,000", previous: "KSh 1,800", change: "0%", status: "Approved" as const },
];
