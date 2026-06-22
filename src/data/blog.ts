export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Web Dev" | "SEO" | "Automation" | "Branding" | "Content";
  featured: boolean;
  content: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-build-website-that-converts",
    title: "How to Build a Website That Converts: A Complete Guide",
    excerpt: "Learn the key principles of building a website that actually drives results for your business. From design to development to launch.",
    date: "Jan 15, 2025",
    category: "Web Dev",
    featured: true,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Introduction</h2>
      <p class="text-text-muted mb-6 text-lg">Building a website is one thing, but building a website that actually converts visitors into customers is another entirely. In this comprehensive guide, we'll walk you through every step of the process, from initial planning to post-launch optimization.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">1. Define Your Goals</h2>
      <p class="text-text-muted mb-6 text-lg">Before you write a single line of code, you need to be crystal clear on what you want your website to achieve. Is it to generate leads? Sell products? Provide information? Each goal will inform every decision you make from here on out.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">2. Know Your Audience</h2>
      <p class="text-text-muted mb-6 text-lg">You can't build a great website if you don't know who it's for. Spend time researching your target audience: What are their pain points? What do they value? How do they navigate the web?</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">3. Design with Purpose</h2>
      <p class="text-text-muted mb-6 text-lg">Every element on your website should serve a purpose. From the color palette to the copy to the calls-to-action, everything should be designed to guide your visitors toward your goals.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">4. Focus on Performance</h2>
      <p class="text-text-muted mb-6 text-lg">Speed matters. A slow website will cost you visitors and conversions. We'll show you how to optimize your site for speed without sacrificing design quality.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Conclusion</h2>
      <p class="text-text-muted mb-6 text-lg">Building a high-converting website is a process, but it's one that's well worth the effort. By following these steps, you'll be well on your way to creating a website that works for your business.</p>
    `,
    author: "Quesiono Team",
    readTime: "8 min read",
  },
  {
    slug: "seo-basics-getting-started-2025",
    title: "SEO Basics: Getting Started in 2025",
    excerpt: "Everything you need to know to start optimizing your website for search engines. From keyword research to technical SEO.",
    date: "Jan 10, 2025",
    category: "SEO",
    featured: false,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">What is SEO?</h2>
      <p class="text-text-muted mb-6 text-lg">SEO stands for Search Engine Optimization, and it's the practice of improving your website's visibility in search engine results pages (SERPs).</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Keyword Research</h2>
      <p class="text-text-muted mb-6 text-lg">Keyword research is the foundation of any good SEO strategy. You need to know what your target audience is searching for.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">On-Page SEO</h2>
      <p class="text-text-muted mb-6 text-lg">On-page SEO refers to the optimization of individual web pages in order to rank higher and earn more relevant traffic in search engines.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Technical SEO</h2>
      <p class="text-text-muted mb-6 text-lg">Technical SEO is the process of ensuring that your website meets the technical requirements of modern search engines.</p>
    `,
    author: "Quesiono Team",
    readTime: "6 min read",
  },
  {
    slug: "content-strategy-that-actually-works",
    title: "Content Strategy That Actually Works: A Step-by-Step Guide",
    excerpt: "How to create a content strategy that drives traffic and conversions. No fluff, just actionable steps.",
    date: "Jan 5, 2025",
    category: "Content",
    featured: false,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Why Content Strategy Matters</h2>
      <p class="text-text-muted mb-6 text-lg">A good content strategy will help you attract, engage, and convert your audience. It's about more than just publishing blog posts; it's about creating content that serves your business goals.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Step 1: Define Your Audience</h2>
      <p class="text-text-muted mb-6 text-lg">Again, everything starts with knowing who you're talking to. Create buyer personas, conduct audience research.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Step 2: Set Your Goals</h2>
      <p class="text-text-muted mb-6 text-lg">What do you want your content to achieve? More leads? Higher brand awareness? Each goal will require a different approach.</p>
    `,
    author: "Quesiono Team",
    readTime: "7 min read",
  },
  {
    slug: "automating-your-workflow-tools-tips",
    title: "Automating Your Workflow: Tools & Tips for 2025",
    excerpt: "Automation can save you time and money. Here are our favorite tools and tips for automating your business processes.",
    date: "Dec 28, 2024",
    category: "Automation",
    featured: false,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Why Automate?</h2>
      <p class="text-text-muted mb-6 text-lg">Automation frees up your time to focus on the work that only you can do.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Tools to Try</h2>
      <p class="text-text-muted mb-6 text-lg">From Zapier to Make to custom scripts, there's an automation tool for almost anything you can think of.</p>
    `,
    author: "Quesiono Team",
    readTime: "5 min read",
  },
  {
    slug: "brand-identity-guide-2025",
    title: "Building a Strong Brand Identity: A Complete Guide",
    excerpt: "Your brand is more than just your logo. Learn how to build a brand identity that resonates with your audience.",
    date: "Dec 20, 2024",
    category: "Branding",
    featured: false,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">What is Brand Identity?</h2>
      <p class="text-text-muted mb-6 text-lg">Brand identity is the collection of all elements that a company creates to portray the right image to its consumer.</p>
      
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Key Elements of Brand Identity</h2>
      <p class="text-text-muted mb-6 text-lg">Logo, color palette, typography, imagery, and more!</p>
    `,
    author: "Quesiono Team",
    readTime: "9 min read",
  },
  {
    slug: "nextjs-14-best-practices",
    title: "Next.js 14 Best Practices for High-Performance Sites",
    excerpt: "Tips and tricks for building fast, scalable, and maintainable Next.js applications in 2025.",
    date: "Dec 15, 2024",
    category: "Web Dev",
    featured: false,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">Why Next.js?</h2>
      <p class="text-text-muted mb-6 text-lg">Next.js is a powerful React framework that makes building modern web applications a breeze.</p>
    `,
    author: "Quesiono Team",
    readTime: "10 min read",
  },
  {
    slug: "local-seo-strategy-small-business",
    title: "Local SEO Strategy for Small Businesses in 2025",
    excerpt: "Dominate your local market with these actionable local SEO tips and strategies that actually work.",
    date: "Dec 10, 2024",
    category: "SEO",
    featured: false,
    content: `
      <h2 class="text-2xl md:text-3xl font-libre italic text-text-dark mb-4">What is Local SEO?</h2>
      <p class="text-text-muted mb-6 text-lg">Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches.</p>
    `,
    author: "Quesiono Team",
    readTime: "7 min read",
  },
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getFeaturedBlogPost = () => blogPosts.find((p) => p.featured);
export const getBlogPostsByCategory = (category: string) =>
  blogPosts.filter((p) => p.category === category);
