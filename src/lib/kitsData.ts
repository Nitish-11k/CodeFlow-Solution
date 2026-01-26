export const kitsData = [
  {
    slug: "starter-core",
    title: "FounderKit .NET", // Changed name
    price: "₹1,499",
    tag: "BEST SELLER",
    description: "The complete .NET 8 Web API boilerplate with Auth, OTP, and Licensing built-in.",
    longDescription: "Stop wasting weeks setting up authentication and database structures. FounderKit gives you a production-ready .NET 8 backend with JWT Auth, Email OTP, Role Management, and a secure Licensing system out of the box.",
    features: [
      "JWT Auth & OTP Email Verification", // Updated features
      "SQL Server + Entity Framework Core",
      "Secure License Key System",
      "Global Error Handling & CORS",
      "Clean Architecture (DDD)"
    ],
    highlight: true, // Highlight this one
    color: "bg-[#1B365D]"
  },
  {
    slug: "nexus-integrator",
    title: "Nexus Integrator",
    price: "₹3,999",
    tag: "POPULAR",
    description: "Connect your app to the world with pre-built third-party integration modules.",
    longDescription: "Designed for startups that need to handle payments, emails, and file uploads. We have pre-written the complex logic for Stripe/Razorpay and AWS S3 so you don't have to.",
    features: [
      "Stripe & Razorpay Payments",
      "SendGrid Email Templates",
      "Twilio SMS Integration",
      "Webhook Event Handlers",
      "File Upload (S3/Cloudinary)"
    ],
    highlight: false,
    color: "bg-[#D4AF37]"
  },
  {
    slug: "apex-suite",
    title: "Apex Suite",
    price: "₹9,999",
    tag: "ENTERPRISE",
    description: "High-scale architecture for startups expecting rapid growth and heavy traffic.",
    longDescription: "The ultimate kit for scaling. Includes caching, microservices patterns, and advanced monitoring to ensure your app never goes down under load.",
    features: [
      "Advanced Admin Dashboard",
      "Real-time Analytics API",
      "Multi-tenancy Support",
      "Redis Caching Layer",
      "Role-Based Access Control"
    ],
    highlight: false,
    color: "bg-purple-600"
  },
  {
    slug: "bespoke-forge",
    title: "Bespoke Forge",
    price: "Custom Quote",
    tag: "FULL SERVICE",
    description: "We act as your CTO. Custom architecture built specifically for your unique needs.",
    longDescription: "Have a unique idea that standard kits can't fit? Our engineering team will build a custom backend architecture tailored exactly to your business logic.",
    features: [
      "Tailored System Architecture",
      "Complex Business Logic",
      "Cloud Deployment (AWS/Azure)",
      "CI/CD Pipeline Setup",
      "24/7 Priority Support"
    ],
    highlight: false,
    color: "bg-slate-800"
  }
];