import { Truck, Smartphone, BarChart3, ShieldCheck, Map, Zap, Layers, Users, Cpu, Palette, Globe, Target, GraduationCap, Banknote, Bell, LineChart, Database, Activity, BookOpen, Sparkles, ShoppingBag, Layout, ArrowRight, Heart } from 'lucide-react';

export const caseStudies = [
    {
        id: 'uasin-gishu-fleet',
        title: 'Uasin Gishu Fleet System',
        subtitle: 'Integrated Vehicle Management System',
        category: 'Government System',
        tags: ['Flutter', 'Django', 'Python', 'PostgreSQL', 'Google Maps API'],
        theme: 'primary',
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'Replaced a fully paper-based fuel and repair requisition process across the Uasin Gishu County Government fleet. Google Maps API integration calculates route-based fuel quotas directly, closing the loop on fuel theft. Every vehicle request, approval, and fuel allocation is now digitally tracked end to end.',
        stats: [
            { label: 'Fuel Theft Mitigated', value: 'Direct', icon: ShieldCheck },
            { label: 'Approval Chain', value: 'Fully Digital', icon: Zap },
            { label: 'Vehicles Tracked', value: 'Full Fleet', icon: Map },
        ],
        challenges: [
            "Fuel theft was rampant with no way to verify actual fuel usage against routes driven.",
            "Repair and fuel requests were fully paper-based, creating approval delays and no audit trail.",
            "Fleet managers had zero real-time visibility into vehicle locations or status.",
            "The entire approval chain from driver request to fleet manager sign-off was manual and untracked."
        ],
        solutions: [
            {
                title: 'Route-Based Fuel Quotas',
                description: 'Google Maps API calculates the expected fuel consumption for each trip based on actual route distance. Drivers can only request fuel within their calculated quota, directly preventing over-claiming and theft.',
                icon: Map
            },
            {
                title: 'Digital Approval Chain',
                description: 'Every fuel and repair request flows through a structured digital approval chain — driver submits, fleet manager reviews, approves or rejects — with a full audit trail for every decision.',
                icon: ShieldCheck
            },
            {
                title: 'Fleet Dashboard',
                description: 'Fleet managers get a live dashboard showing all active requests, vehicle status, fuel consumption history, and repair records. Paper registers replaced entirely.',
                icon: BarChart3
            }
        ]
    },
    {
        id: 'ksg-ict-platform',
        title: 'KSG ICT Platform',
        subtitle: 'Internal ICT Management System',
        category: 'Government System',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
        theme: 'primary',
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'Full internal ICT management system for Kenya School of Government replacing a manual, spreadsheet-based operation. Covers the complete asset lifecycle from procurement to retirement, a service desk with SLA tracking and real-time notifications, and a digital recruitment system with AI-assisted candidate screening.',
        stats: [
            { label: 'Asset Tracking', value: 'Full Lifecycle', icon: ShieldCheck },
            { label: 'SLA Compliance', value: 'Tracked Live', icon: Activity },
            { label: 'Screening', value: 'AI-Assisted', icon: Zap },
        ],
        challenges: [
            "All ICT assets were tracked in spreadsheets with no lifecycle visibility from procurement to retirement.",
            "Service desk requests were managed manually with no SLA tracking, escalation workflows, or accountability.",
            "The recruitment process was fully paper-based — document verification, candidate screening, and approvals all manual.",
            "Staff had no visibility into request status, asset assignments, or service timelines."
        ],
        solutions: [
            {
                title: 'Asset Lifecycle Management',
                description: 'Every ICT asset is tracked from procurement through assignment, maintenance, and eventual retirement. Role-based access ensures staff see only what is relevant to them, while administrators have full visibility.',
                icon: Layers
            },
            {
                title: 'Service Desk with SLA Tracking',
                description: 'Staff submit service requests through a structured portal. Each request is assigned an SLA, escalated automatically if breached, and resolved with a full audit trail. Real-time Socket.io notifications keep staff informed at every step.',
                icon: Bell
            },
            {
                title: 'AI-Assisted Recruitment',
                description: 'Candidates apply through a digital portal with automated document completeness checks. GPT-4o assists with initial screening, flagging qualified candidates for human review and reducing manual screening time significantly.',
                icon: Users
            }
        ]
    },
    {
        id: 'ivy-wardrobe',
        title: 'IVY Community Wardrobe',
        subtitle: 'Fashion Tech Platform with Computer Vision',
        category: 'Fashion Tech',
        tags: ['Flutter', 'Django', 'Python', 'OpenPose', 'Firebase'],
        theme: 'primary',
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'A cross-platform fashion tech platform connecting store owners, attendants, and customers. Built a custom Computer Vision Measurement API using OpenPose to extract body measurements from 2D photos, enabling virtual outfit fitting without physical try-ons. Includes R&D on SMPLX 3D body mesh generation.',
        stats: [
            { label: 'Measurement Method', value: 'Computer Vision', icon: Cpu },
            { label: 'Platform', value: 'Cross-Platform', icon: Layers },
            { label: 'Body Mesh', value: 'SMPLX R&D', icon: Sparkles },
        ],
        challenges: [
            "Customers could not try on clothes virtually without accurate body measurements.",
            "Manual measurement collection was friction-heavy and inconsistent across store locations.",
            "Multi-role platform needed to serve store owners, store attendants, and customers simultaneously with different access levels.",
            "Real-time inventory tracking across multiple vendor stores was unmanaged."
        ],
        solutions: [
            {
                title: 'Computer Vision Measurement API',
                description: 'A custom API using OpenPose extracts body measurements from standard 2D photos. Customers submit a photo and receive accurate measurements instantly, enabling virtual fitting without physical presence in the store.',
                icon: Cpu
            },
            {
                title: 'Multi-Role Flutter App',
                description: 'A single Flutter application with role-based access for store owners (inventory and analytics), attendants (stock management and customer service), and customers (browsing, fitting, and ordering).',
                icon: Users
            },
            {
                title: '3D Body Mesh R&D',
                description: 'Research and development on SMPLX 3D body mesh generation to enable photorealistic virtual outfit overlay — laying the groundwork for a full virtual fitting room experience.',
                icon: Sparkles
            }
        ]
    },
    {
        id: 'stratum',
        title: 'Stratum',
        subtitle: 'AI Personal Finance Tracker',
        category: 'Mobile App',
        tags: ['Flutter', 'Dart', 'OpenAI', 'Android', 'M-Pesa'],
        theme: 'accent',
        heroImage: 'bg-gradient-to-br from-accent/20 to-background',
        summary: 'Android app that automatically reads M-Pesa SMS notifications, parses every transaction without manual input, and generates monthly AI-powered financial analysis. Built to eliminate the friction of manual financial tracking for M-Pesa users in Kenya. Open the app — your finances are already there. Live on Google Play Store.',
        stats: [
            { label: 'Manual Input Required', value: 'Zero', icon: Zap },
            { label: 'Platform', value: 'Google Play', icon: Smartphone },
            { label: 'Analysis', value: 'AI-Powered', icon: Sparkles },
        ],
        challenges: [
            "M-Pesa users in Kenya make dozens of transactions monthly but have no automatic way to track them.",
            "Manual financial tracking apps require tedious data entry that most users abandon within days.",
            "Existing finance apps were not built for M-Pesa-first users and required connecting bank accounts.",
            "Monthly financial patterns were invisible without significant manual reconciliation effort."
        ],
        solutions: [
            {
                title: 'Automatic SMS Parsing',
                description: 'The app reads M-Pesa SMS notifications in the background using the Android SMS API. Every transaction — send money, receive money, buy goods, pay bill — is parsed and categorised automatically without any user input.',
                icon: Smartphone
            },
            {
                title: 'AI Financial Analysis',
                description: 'At the end of each month, OpenAI generates a personalised financial analysis: spending patterns, category breakdowns, unusual transactions, and actionable insights based on the user\'s actual transaction history.',
                icon: Sparkles
            },
            {
                title: 'Zero-Friction Design',
                description: 'No account linking, no manual entry, no onboarding friction. Install the app, grant SMS permission, and every past and future M-Pesa transaction is immediately visible and categorised.',
                icon: Zap
            }
        ]
    },
    {
        id: 'number-your-days',
        title: 'Number Your Days',
        subtitle: 'AI Journaling App',
        category: 'Mobile App',
        tags: ['Flutter', 'Firebase', 'Gemini AI', 'Android'],
        theme: 'primary',
        heroImage: 'bg-gradient-to-br from-primary/20 to-background',
        summary: 'Intentional journaling app for Android using a tiered AI analysis system. Daily insights with Gemini Flash, monthly and yearly synthesis with Gemini Pro. A summarisation chaining strategy reduces token usage by ~98% versus naive approaches while maintaining full analytical depth. Live on Google Play Store.',
        stats: [
            { label: 'Token Reduction', value: '~98%', icon: Zap },
            { label: 'Analysis Tiers', value: '3 Levels', icon: Layers },
            { label: 'Platform', value: 'Google Play', icon: Smartphone },
        ],
        challenges: [
            "Journaling apps provide no feedback or reflection — users write into a void with no insight returned.",
            "Naive AI analysis of long journal histories is prohibitively expensive in token usage.",
            "Daily, monthly, and yearly insights require different levels of analytical depth and context.",
            "Users needed meaningful synthesis of their personal growth without exposing full journal content unnecessarily."
        ],
        solutions: [
            {
                title: 'Tiered AI Analysis',
                description: 'Three distinct analysis levels: Gemini Flash processes daily entries for quick insights, Gemini Pro synthesises monthly patterns into deeper reflections, and yearly analysis produces a comprehensive personal growth narrative.',
                icon: Layers
            },
            {
                title: 'Summarisation Chaining',
                description: 'Instead of sending full journal history to the AI on every request, a chaining strategy progressively summarises past entries. This reduces token usage by approximately 98% versus naive approaches while preserving full analytical depth.',
                icon: Zap
            },
            {
                title: 'Intentional Design',
                description: 'The app is built around deliberate reflection — prompts encourage meaningful entries, and AI feedback is timed to reinforce the journaling habit rather than interrupt it.',
                icon: BookOpen
            }
        ]
    },
    {
        id: 'mydrop',
        title: 'mydrop',
        subtitle: 'Real-Time Delivery Tracking Platform',
        category: 'Logistics Platform',
        tags: ['Node.js', 'PostgreSQL', 'React', 'Real-time'],
        theme: 'accent',
        heroImage: 'bg-gradient-to-br from-accent/20 to-background',
        summary: 'Real-time delivery tracking platform built for Kenyan SMEs. A manager-to-rider-to-customer tracking flow with PIN confirmation on delivery. Managers dispatch, riders navigate, customers track their order in real time — and confirm receipt with a PIN. Built with an orange/navy design system.',
        stats: [
            { label: 'Tracking', value: 'Real-Time', icon: Map },
            { label: 'Confirmation', value: 'PIN-Based', icon: ShieldCheck },
            { label: 'User Roles', value: '3 Roles', icon: Users },
        ],
        challenges: [
            "Kenyan SMEs running delivery operations had no visibility into rider location or delivery status.",
            "Customers had no way to track their orders in real time, leading to repeated inquiry calls.",
            "Delivery confirmation was verbal or paper-based with no tamper-proof record.",
            "Managers had no centralised view of active deliveries, rider availability, or delivery history."
        ],
        solutions: [
            {
                title: 'Three-Role Tracking Flow',
                description: 'Managers dispatch orders and monitor all active deliveries from a central dashboard. Riders receive assignments, navigate to destinations, and update delivery status. Customers track their order on a live map from dispatch to doorstep.',
                icon: Users
            },
            {
                title: 'PIN Confirmation on Delivery',
                description: 'Every delivery is confirmed with a PIN provided to the customer at order time. The rider enters the PIN on delivery, creating a tamper-proof digital record that the correct person received the correct order.',
                icon: ShieldCheck
            },
            {
                title: 'Real-Time Location Updates',
                description: 'Rider location updates in real time on both the manager dashboard and the customer tracking view. Customers see exactly where their delivery is without needing to call — reducing support overhead for SME owners.',
                icon: Map
            }
        ]
    },
];

export const getCaseStudy = (id: string) => {
    return caseStudies.find(study => study.id === id);
};
