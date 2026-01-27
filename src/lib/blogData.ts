export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML supported string
  date: string;
  category: string;
  readTime: string;
  author: string;
  color: string; // Badge color
}

export const blogPosts: BlogPost[] = [
  {
    slug: "dotnet-vs-nodejs-performance",
    title: "Why .NET 8 is the Secret Weapon for High-Performance SaaS",
    excerpt: "Benchmarks don't lie. While Node.js is popular, .NET 8 handles 4x more requests per second. Here is why we switched.",
    date: "Jan 26, 2026",
    category: "Tech",
    readTime: "5 min read",
    author: "CodeFlow Team",
    color: "bg-purple-100 text-purple-600",
    content: `
      <p class="mb-4">When building a SaaS, the tech stack you choose on Day 1 dictates your scaling pains on Day 100.</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">The Single Thread Bottleneck</h3>
      <p class="mb-4">Node.js runs on a single thread. It's great for I/O, but terrible for CPU-intensive tasks. .NET 8, on the other hand, is multi-threaded by default.</p>
      <p class="mb-4">In our internal benchmarks, a simple JSON serialization task was <strong>400% faster</strong> on .NET 8 compared to Node.js v20.</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Type Safety is not optional</h3>
      <p class="mb-4">TypeScript patches JavaScript, but C# was born strict. This eliminates an entire category of "undefined is not a function" bugs in production.</p>
    `
  },
  {
    slug: "clean-architecture-guide",
    title: "The Founder's Guide to Clean Architecture (Without the Fluff)",
    excerpt: "Stop writing spaghetti code. Learn how to structure your app so you can swap databases or UIs without rewriting everything.",
    date: "Jan 24, 2026",
    category: "Architecture",
    readTime: "8 min read",
    author: "CodeFlow Team",
    color: "bg-blue-100 text-blue-600",
    content: `
      <p class="mb-4">Most startups fail because their code becomes unmaintainable after 6 months. Clean Architecture solves this.</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">The Circle of Life</h3>
      <p class="mb-4">Imagine your business logic is the sun, and everything else (Database, API, UI) are just planets orbiting it. The sun shouldn't care which planets exist.</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Domain Layer:</strong> Your core business rules. (Pure C#)</li>
        <li><strong>Application Layer:</strong> Use cases (Login, Pay, Search).</li>
        <li><strong>Infrastructure:</strong> Databases, Email Services, File Storage.</li>
        <li><strong>API:</strong> The entry point.</li>
      </ul>
      <p class="mb-4">FounderKit comes pre-configured with this exact structure.</p>
    `
  },
  {
    slug: "saas-mvp-checklist",
    title: "The Ultimate 24-Hour SaaS MVP Checklist",
    excerpt: "Don't spend months building features nobody wants. Here is exactly what you need to launch and verify your idea.",
    date: "Jan 20, 2026",
    category: "Business",
    readTime: "4 min read",
    author: "CodeFlow Team",
    color: "bg-green-100 text-green-600",
    content: `
      <p class="mb-4">Speed is your only advantage as a startup. Here is the checklist we use to ship in 24 hours:</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">1. The Boring Stuff (Automate this)</h3>
      <p class="mb-4">Auth, Emails, Database. Don't build this. Buy a starter kit (like ours) or use a BaaS. It saves 20+ hours.</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">2. The One Feature</h3>
      <p class="mb-4">Build ONLY the core value proposition. If you are building a video editor, don't build a comment section yet.</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">3. Payment Gateway</h3>
      <p class="mb-4">If you can't accept money, you are a hobbyist, not a founder. Integrate Stripe/Razorpay on Day 1.</p>
    `
  },
  {
    slug: "microservices-trap",
    title: "Why Microservices Will Kill Your Early Stage Startup",
    excerpt: "Google uses Microservices. You are not Google. Why a Monolith is the best choice for your first 10,000 users.",
    date: "Jan 15, 2026",
    category: "Opinion",
    readTime: "6 min read",
    author: "CodeFlow Team",
    color: "bg-red-100 text-red-600",
    content: `
      <p class="mb-4">Microservices are great for scaling TEAMS, not necessarily for scaling APPS.</p>
      <h3 class="text-2xl font-bold text-[#1B365D] mt-8 mb-4">The Complexity Tax</h3>
      <p class="mb-4">With microservices, you trade simple function calls for network calls. Now you need to handle:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>Service Discovery</li>
        <li>Network Latency</li>
        <li>Distributed Tracing</li>
        <li>Eventual Consistency</li>
      </ul>
      <p class="mb-4">Start with a Modular Monolith (like FounderKit). Break it apart only when you have 50+ developers.</p>
    `
  }
];