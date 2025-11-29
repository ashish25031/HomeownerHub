import { Home, PaintRoller, Hammer, Wrench, Shield, Leaf, Zap, Droplets } from "lucide-react";

export type SkillLevel = "beginner" | "intermediate" | "advanced";
export type Category = "maintenance" | "renovation" | "decor" | "outdoor" | "systems";

export interface Resource {
  id: string;
  title: string;
  description: string;
  content: string;
  skillLevel: SkillLevel;
  category: Category;
  readTime: string;
  imageUrl: string;
  date: string;
}

// Mock Data
export const resources: Resource[] = [
  {
    id: "1",
    title: "The Essential Homeowner's Toolkit",
    description: "Don't get caught unprepared. Here is every tool you need to handle 90% of home emergencies.",
    content: `
      <p>Every new homeowner needs a dedicated toolkit. While you might be tempted to buy one of those "100-piece" kits from a big box store, you're often better off buying higher quality individual tools that will last a lifetime.</p>
      <h3>The Absolute Essentials</h3>
      <ul>
        <li><strong>Claw Hammer:</strong> A 16-ounce hammer is perfect for most jobs.</li>
        <li><strong>Tape Measure:</strong> Get a 25-foot tape with a wide blade (it stands out further without bending).</li>
        <li><strong>Screwdriver Set:</strong> You need both Phillips and Flathead in various sizes.</li>
        <li><strong>Utility Knife:</strong> For opening boxes, cutting carpet, and scoring drywall.</li>
        <li><strong>Level:</strong> Essential for hanging pictures and shelves straight.</li>
      </ul>
      <p>Once you have these basics, you can start adding specialty tools as projects arise. Don't rush to buy a power saw until you actually have wood to cut.</p>
    `,
    skillLevel: "beginner",
    category: "maintenance",
    readTime: "5 min read",
    imageUrl: "attached_assets/stock_images/basic_home_tool_kit__8c7c3bed.jpg",
    date: "Oct 12, 2024"
  },
  {
    id: "2",
    title: "Painting 101: Transform Your Space",
    description: "Learn the professional techniques for a flawless finish, from taping to rolling.",
    content: `
      <p>Painting is the highest ROI activity you can do for your home. It transforms the feel of a room instantly. However, the difference between a DIY job and a pro job is usually in the prep work.</p>
      <h3>Prep is 80% of the Job</h3>
      <p>Don't just start rolling. You need to:</p>
      <ol>
        <li>Clean the walls with TSP (Trisodium Phosphate) to remove grease and dust.</li>
        <li>Patch any holes with spackle and sand smooth.</li>
        <li>Remove outlet covers and switch plates.</li>
        <li>Tape off trim with high-quality painter's tape.</li>
      </ol>
      <h3>The "W" Technique</h3>
      <p>When rolling, don't go in straight up-and-down lines immediately. Paint a large "W" on the wall, then fill it in without lifting the roller. This ensures even coverage and prevents "banding" lines.</p>
    `,
    skillLevel: "intermediate",
    category: "decor",
    readTime: "8 min read",
    imageUrl: "attached_assets/stock_images/person_painting_a_wa_ad4886eb.jpg",
    date: "Nov 03, 2024"
  },
  {
    id: "3",
    title: "Understanding Your Circuit Breaker",
    description: "Electricity isn't magic. Learn to identify circuits and safely reset a tripped breaker.",
    content: "Electrical safety is paramount...",
    skillLevel: "beginner",
    category: "systems",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop", // Fallback external if needed, but using placeholders for now
    date: "Sep 15, 2024"
  },
  {
    id: "4",
    title: "Seasonal HVAC Maintenance Guide",
    description: "Keep your heating and cooling running efficiently to save money and extend system life.",
    content: "HVAC systems are expensive...",
    skillLevel: "intermediate",
    category: "systems",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    date: "Aug 20, 2024"
  },
  {
    id: "5",
    title: "Installing a Backsplash",
    description: "A step-by-step guide to tiling your kitchen backsplash like a pro.",
    content: "Tiling requires patience...",
    skillLevel: "advanced",
    category: "renovation",
    readTime: "15 min read",
    imageUrl: "attached_assets/stock_images/home_renovation_cons_3730996a.jpg",
    date: "Dec 01, 2024"
  },
  {
    id: "6",
    title: "Curb Appeal: Landscaping Basics",
    description: "Simple planting strategies to make your home look welcoming from the street.",
    content: "You don't need a green thumb...",
    skillLevel: "beginner",
    category: "outdoor",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop",
    date: "Jul 10, 2024"
  }
];

export const categories: { id: Category; label: string; icon: any }[] = [
  { id: "maintenance", label: "Maintenance", icon: Wrench },
  { id: "renovation", label: "Renovation", icon: Hammer },
  { id: "decor", label: "Decor & Paint", icon: PaintRoller },
  { id: "outdoor", label: "Outdoor", icon: Leaf },
  { id: "systems", label: "Systems (HVAC/Elec)", icon: Zap },
];
