import { Truck, Smartphone, BarChart3, ShieldCheck, Map, Zap, Layers, Users, Cpu, Palette, Globe, Target, GraduationCap, Banknote, Bell, LineChart, Database, Activity, BookOpen, Sparkles, ShoppingBag, Layout, ArrowRight, Heart } from 'lucide-react';

export const caseStudies = [
    {
        id: 'fleet-command',
        title: 'Fleet Command UI',
        subtitle: 'Logistics Intelligence Platform',
        category: 'Enterprise System',
        tags: ['React', 'Leaflet', 'TypeScript', 'Real-time'],
        theme: 'primary', // mapped from 'cyan' to 'primary' for this project's theme
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'A unified digital command center that eliminates operational blind spots. By combining a real-time HQ dashboard with a driver mobile app, Fleet Command integrates fuel monitoring, route optimization, and asset tracking into a single source of truth.',
        stats: [
            { label: 'Revenue Leakage Prevented', value: '15%', icon: ShieldCheck },
            { label: 'Asset Visibility', value: '100%', icon: Map },
            { label: 'Maintenance Cycles', value: 'Optimized', icon: Zap },
        ],
        challenges: [
            "Operational blind spots leading to fuel theft and unverified stops.",
            "Manual, paper-based reporting causing data delays and inaccuracies.",
            "Inability to track vehicle health in real-time, leading to costly breakdowns.",
            "Disconnected communication between HQ managers and field drivers."
        ],
        solutions: [
            {
                title: 'The God View (HQ Dashboard)',
                description: 'Total operational visibility. Managers can track the live location, speed, and status of over 500+ assets in a single interface. Alerts for route deviation or unauthorized stops are generated instantly.',
                icon: Map
            },
            {
                title: 'The Shield (Driver App)',
                description: 'Fraud-proof resource management. Drivers request fuel and repairs directly through the app. Every liter of fuel is logged and verified against mileage, closing the loop on theft.',
                icon: Smartphone
            },
            {
                title: 'The Pulse (Analytics Engine)',
                description: 'Data-driven decision making. Automated reports on fuel efficiency, driver performance, and fleet utilization help identifying cost-saving opportunities.',
                icon: BarChart3
            }
        ]
    },
    {
        id: 'anga-nova-launch',
        title: 'Anga Nova Launch',
        subtitle: 'The First AI-Adaptive Brand Campaign',
        category: 'Marketing & AI',
        tags: ['GenAI', 'Programmatic', 'Branding'],
        theme: 'accent', // mapped from 'orange' to 'accent'
        heroImage: 'bg-gradient-to-br from-accent/20 to-background',
        summary: 'We didn\'t just launch a brand; we built a living system. By leveraging generative AI and real-time sentiment analysis, we created a campaign that evolved its visuals and messaging based on audience interaction, achieving unprecedented engagement.',
        stats: [
            { label: 'Creative Variants', value: '12,000+', icon: Palette },
            { label: 'Engagement Uplift', value: '400%', icon: Zap },
            { label: 'Conversion Cost', value: '-60%', icon: Target },
        ],
        challenges: [
            "Static Fatigue: Traditional banner ads were seeing diminishing returns due to audience saturation.",
            "Hyper-Segmentation: We needed to speak to 5 distinct personas (Founders, Investors, Engineers, etc.) simultaneously.",
            "Speed to Market: The campaign needed to launch across 3 distinct regions (Nairobi, Lagos, Cape Town) in under 2 weeks."
        ],
        solutions: [
            {
                title: 'The Generative Core',
                description: 'We trained a custom LoRA model on the brand\'s aesthetic to generate infinite high-fidelity 3D assets on demand. this ensured visual consistency while removing the human bottleneck in asset production.',
                icon: Cpu
            },
            {
                title: 'Dynamic Creative Optimization (DCO)',
                description: 'A custom pipeline assembled copy, imagery, and CTAs in real-time based on the user\'s context (Time, Location, Device). Investors saw data-heavy visuals; Creatives saw abstract 3D art.',
                icon: Layers
            },
            {
                title: 'Sentiment Feedback Loop',
                description: 'The system analyzed comment sentiment and click patterns to automatically "kill" low-performing variants and mutate high-performers into new, optimized ads without human intervention.',
                icon: Globe
            }
        ]
    },
    {
        id: 'edu-portal',
        title: 'EduPortal System',
        subtitle: 'Comprehensive School Management Platform',
        category: 'EdTech Platform',
        tags: ['React', 'Node.js', 'FinTech'],
        theme: 'primary',
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'A holistic digital ecosystem transforming how educational institutions operate. From automating complex fee structures to instant academic reporting, EduPortal connects administration, teachers, and parents in real-time.',
        stats: [
            { label: 'Revenue Collection', value: '+22%', icon: Banknote },
            { label: 'Admin Time Saved', value: '150 hrs/term', icon: Zap },
            { label: 'Schools Onboarded', value: '50+', icon: GraduationCap },
        ],
        challenges: [
            "Revenue Leakage: Manual fee collection and receipting led to significant uncollected revenue and fraud.",
            "Data Silos: Teachers used disparate spreadsheets, making report card generation a multi-week manual nightmare.",
            "Parent Disconnect: Parents had zero visibility into student attendance, performance, or fee balances until end of term."
        ],
        solutions: [
            {
                title: 'Smart Finance Core',
                description: 'Automated financial reconciliation. The system integrates directly with mobile money (M-Pesa) and banking APIs, automatically reconciling payments to student accounts and sending digital receipts instantly.',
                icon: Banknote
            },
            {
                title: 'The Academic Engine',
                description: 'Instant academic analysis. Teachers enter raw marks once; the system automatically calculates grades, class ranks, and streams reports, reducing end-of-term workload by 90%.',
                icon: GraduationCap
            },
            {
                title: 'Parent Connect App',
                description: 'Real-time transparency. Parents receive instant push notifications for school entry/exit (via biometrics), exam results, and fee balances, fostering trust and accountability.',
                icon: Bell
            }
        ]
    },
    {
        id: 'growth-dashboard',
        title: 'Growth Dashboard',
        subtitle: 'Unified Revenue Intelligence',
        category: 'Analytics Platform',
        tags: ['D3.js', 'Python', 'BigQuery'],
        theme: 'accent',
        heroImage: 'bg-gradient-to-br from-accent/20 to-background',
        summary: 'Marketing data was scattered across Facebook, Google, and CRM, leading to decisions based on gut feeling rather than facts. We built a unified engine that tracks the dollar journey from first click to final sale.',
        stats: [
            { label: 'Ad Waste Cut', value: '30%', icon: Activity },
            { label: 'Reporting Time', value: '-95%', icon: Zap },
            { label: 'Revenue Growth', value: '3x YoY', icon: LineChart },
        ],
        challenges: [
            "The Attribution Black Box: Clients knew marketing worked, but not which half. High-value leads were often misattributed to the wrong channel.",
            "Spreadsheet Hell: Weekly reporting took 15 hours of manual data pasting, resulting in stale data by the time it reached decision makers.",
            "Vanity Metrics: Agencies reported on 'Clicks' and 'Impressions', masking the fact that Cost Per Acquisition (CPA) was rising dangerously."
        ],
        solutions: [
            {
                title: 'Single Source of Truth',
                description: 'A custom ETL pipeline aggregating data from Meta, Google Ads, LinkedIn, and HubSpot into a centralized warehouse, ensuring all teams look at the same numbers.',
                icon: Database
            },
            {
                title: 'Full-Funnel Attribution',
                description: 'We implemented server-side tracking to connect ad clicks to offline CRM conversions, revealing the true ROI and Lifetime Value (LTV) of every campaign.',
                icon: Target
            },
            {
                title: 'Actionable Anomaly Detection',
                description: 'Automated alerts trigger when CPA spikes or Return on Ad Spend (ROAS) dips below threshold, allowing for immediate course correction/budget reallocation.',
                icon: Activity
            }
        ]
    },
    {
        id: 'retail-connect',
        title: 'Retail Connect',
        subtitle: 'Intelligent Inventory & POS System',
        category: 'Enterprise System',
        tags: ['React', 'Node.js', 'PostgreSQL', 'POS'],
        theme: 'primary',
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'A comprehensive retail operating system designed for multi-location businesses. Retail Connect unifies inventory management, point-of-sale, and business intelligence into a single platform, giving shop owners total control over their operations.',
        stats: [
            { label: 'Inventory Accuracy', value: '99%', icon: ShieldCheck },
            { label: 'Sales Uplift', value: '+20%', icon: LineChart },
            { label: 'Stockouts Reduced', value: '-40%', icon: ArrowRight },
        ],
        challenges: [
            "Blind Inventory: Shop owners lacked real-time visibility into stock levels, leading to overstocking or lost sales.",
            "Theft & Pilferage: Unaccounted stock loss was untraceable without a digital audit trail.",
            "Multi-Store Chaos: Managing stock transfers and reporting across different locations was a logistical nightmare."
        ],
        solutions: [
            {
                title: 'Centralized Command',
                description: 'A single dashboard to view stock levels, sales performance, and staff activity across all branches in real-time.',
                icon: Layers
            },
            {
                title: 'Smart Replenishment',
                description: 'Predictive algorithms analyze sales velocity and seasonal trends to automatically generate restocking orders before stock runs out.',
                icon: BarChart3
            },
            {
                title: 'POS Integration',
                description: 'A seamless checkout experience that automatically updates inventory, manages customer loyalty, and generates detailed sales reports.',
                icon: ShoppingBag
            }
        ]
    },
    {
        id: 'food-baze',
        title: 'Food Baze',
        subtitle: 'Direct Farm-to-Hotel Supply Network',
        category: 'Agri-Tech Platform',
        tags: ['Mobile App', 'Logistics', 'Social Impact'],
        theme: 'accent',
        heroImage: 'bg-gradient-to-br from-accent/20 to-background',
        summary: 'Revolutionizing the food supply chain by connecting farmers directly to hotels. Food Baze eliminates brokers to increase farmer margins and ensures fresh produce for hotels, while simultaneously fighting food waste through an integrated donation network.',
        stats: [
            { label: 'Food Waste Reduced', value: '60%', icon: Sparkles },
            { label: 'Farmer Income', value: '+35%', icon: Banknote },
            { label: 'Delivery Time', value: '< 12 Hrs', icon: Truck },
        ],
        challenges: [
            "The Broker Tax: Farmers were losing significant margin to middlemen, while hotels paid inflated prices for produce.",
            "Food Waste: Excess produce often rotted in transit or storage before finding a buyer.",
            "Supply Unreliability: Hotels struggled to get consistent quality and timely deliveries from informal networks."
        ],
        solutions: [
            {
                title: 'Direct Connect Marketplace',
                description: 'A transparent platform where hotels order directly from verified local farmers, ensuring fair prices and fresher produce.',
                icon: Users
            },
            {
                title: 'Smart Logistics',
                description: 'Integrated delivery management system that optimizes routes to ensure produce moves from farm to kitchen within hours.',
                icon: Map
            },
            {
                title: 'Zero-Waste Protocol',
                description: 'An automated alert system that identifies near-expiry stock or excess harvest and coordinates instant donations to partner NGOs.',
                icon: Heart
            }
        ]
    }
];

export const getCaseStudy = (id: string) => {
    return caseStudies.find(study => study.id === id);
};
