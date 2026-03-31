const fs = require('fs');
const path = require('path');

const NUM_BLOGS = 30;
const NUM_CASES = 20;

const BLOG_TOPICS = [
  "Future of Global Electronics Trading",
  "Navigating Supply Chain Volatility in 2026",
  "Semiconductor Sourcing Strategies",
  "Dubai as the Nexus of Trans-Pacific Trade",
  "Mitigating Risk in Oceanic Freight",
  "The AI Revolution in Logistics Automation",
  "Sustainable Procurement in B2B Electronics",
  "Evaluating Emerging Markets for Component Sourcing",
  "How Tariffs are Shaping the Q3 Market",
  "Blockchain Verification in Trade Compliance",
  "Optimizing Warehouse Operations with Robotics",
  "The Shift Towards Nearshoring in Tech Hardware",
  "Securing Maritime Routes: What You Need to Know",
  "Understanding ISO Certifications in Global Trade",
  "Why the Middle East is the Premier Logistics Hub",
  "Predictive Analytics for Inventory Management",
  "The Role of 5G in Real-Time Cargo Tracking",
  "Navigating the Complexities of E-Waste Regulations",
  "Scaling Cross-Border E-Commerce Infrastructure",
  "The ROI of Upgrading Procurement Software Systems"
];

const BLOG_IMAGES = [
  "/Images/modern_business_presentation_1774990438667.png",
  "/Images/electronics_trading_market_1774990567892.png",
  "/Images/dubai_port_night_1774990423967.png",
  "/Images/ecommerce_fulfillment_center_1774990537478.png",
  "/Images/dubai_skyline_hyper_modern_1774990474429.png",
  "/Images/container_ship_loading_1774990627565.png",
  "/Images/advanced_microchip_manufacturing_1774990456950.png"
];

const generateContent = (idx, type) => {
  if (type === 'blog') {
    return `<p>In modern macroeconomics, navigating the complexities of international trade demands rigorous analysis and strategic foresight. This comprehensive review examines the current state of <strong>global logistics</strong> and its compounding effect on regional procurement efficiency, specially focusing on the electronic components tier.</p>
    <p>By leveraging predictive analytics, top-tier enterprises are beginning to forecast shortages up to three quarters in advance. With the integration of AI-driven supply hubs in major ports like Dubai and Singapore, the friction historically associated with multi-modal freight is rapidly diminishing.</p>
    <blockquote>"Agility is no longer a strategic advantage—it is the baseline for survival in the 2026 trans-pacific corridor." - Executive Analysis Team</blockquote>
    <p>Furthermore, maintaining strict compliance with evolving ESG (Environmental, Social, Governance) laws implies that your supply chain must be completely transparent. From conflict-free mineral verification to zero-emission oceanic freight options, the hardware sourcing landscape is rewriting its own rules. Our data indicates that companies adopting these technologies lower overhead by an average of 14% while accelerating time-to-market by nearly a month.</p>`;
  } else {
    // Case Study Content
    return `<p>When a Tier-1 European smartphone manufacturer approached Tech ET Co, they were facing a critical bottleneck: a 45-day delay in crucial semiconductor shipments from Southeast Asia. This delay was artificially inflating their quarterly overheads and threatening their Q4 product launch window.</p>
    <h3>The Architectural Solution</h3>
    <p>Our strategic response involved completely rerouting their supply chain through our proprietary Dubai logistics hub. By consolidating passive electronic components from five separate vendors into a single streamlined bulk shipment, we bypassed localized port congestion.</p>
    <ul>
      <li>Implementation of Real-Time API Tracking across all naval freight.</li>
      <li>Customs pre-clearance using our localized corporate authority in the UAE.</li>
      <li>Deployment of dedicated air-freight contingencies for critical microchips.</li>
    </ul>
    <h3>The Result</h3>
    <p>We reduced their total transit time by 40%, ensuring all assembly factories remained operational around the clock. Their resultant Q4 output exceeded projections by 1.2 million units, yielding an estimated €12M in gross margin recovery.</p>`;
  }
};

function buildBlogs() {
  const blogs = [];
  for (let i = 0; i < NUM_BLOGS; i++) {
    const baseTitle = BLOG_TOPICS[i % BLOG_TOPICS.length];
    const modifier = Math.floor(i / BLOG_TOPICS.length) > 0 ? ` (Part ${Math.floor(i / BLOG_TOPICS.length) + 1})` : "";
    const title = `${baseTitle}${modifier}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const image = BLOG_IMAGES[i % BLOG_IMAGES.length];
    
    blogs.push({
      id: `${i + 1}`,
      title,
      slug,
      date: `April ${Math.floor(Math.random() * 28) + 1}, 2026`,
      category: ["Insights", "Logistics", "Procurement", "Market Strategy"][Math.floor(Math.random() * 4)],
      readTime: `${Math.floor(Math.random() * 6) + 4} min read`,
      image,
      excerpt: `An in-depth analysis of ${title.toLowerCase()}, outlining how global enterprises can optimize their supply chain frameworks.`,
      content: generateContent(i, 'blog')
    });
  }
  
  const fileContent = `export const blogs = ${JSON.stringify(blogs, null, 2)};`;
  fs.writeFileSync(path.join(__dirname, '../src/data/blogs.ts'), fileContent);
}

const CASE_CLIENTS = [
  "Tier-1 European Electronics Fleet",
  "Asian Semiconductor Conglomerate",
  "North American Logistics Operator",
  "Global Tech Enterprise",
  "Emerging UAE Hardware Startup",
  "Trans-Pacific Assembly Line"
];
const CASE_METRICS = ["40% Faster Delivery", "€12M Annual Savings", "99.9% Visibility", "$5M Overhead Reduction", "Zero Compliance Breaches", "2x Procurement Output"];

function buildCaseStudies() {
  const cases = [];
  for (let i = 0; i < NUM_CASES; i++) {
    const client = CASE_CLIENTS[i % CASE_CLIENTS.length];
    const metric = CASE_METRICS[i % CASE_METRICS.length];
    const title = `Optimizing Operations for ${client}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const image = BLOG_IMAGES[(i+3) % BLOG_IMAGES.length];
    
    cases.push({
      id: `${i + 1}`,
      title,
      slug,
      metric,
      client,
      industry: ["Consumer Electronics", "Maritime Freight", "Automotive Chips", "Aerospace Logistics"][Math.floor(Math.random() * 4)],
      image,
      desc: `How we successfully partnered with a ${client} to achieve ${metric} through restructuring their global trade operations.`,
      content: generateContent(i, 'case')
    });
  }
  
  const fileContent = `export const caseStudies = ${JSON.stringify(cases, null, 2)};`;
  fs.writeFileSync(path.join(__dirname, '../src/data/case-studies.ts'), fileContent);
}

buildBlogs();
buildCaseStudies();
console.log("Data layer generated: 30 blogs, 20 case studies.");
