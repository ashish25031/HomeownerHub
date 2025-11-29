import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Hammer, PaintRoller, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Layout from "@/components/layout";
import heroImage from "@assets/stock_images/cozy_modern_living_r_d30c0a1b.jpg";
import beginnerImage from "@assets/stock_images/basic_home_tool_kit__8c7c3bed.jpg";
import intermediateImage from "@assets/stock_images/person_painting_a_wa_ad4886eb.jpg";
import advancedImage from "@assets/stock_images/home_renovation_cons_3730996a.jpg";
import { resources } from "@/lib/data";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Cozy modern living room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6">
              New Homeowner Education
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Make Your House <br/> Feel Like Home
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 font-light leading-relaxed">
              From fixing a leaky faucet to a full kitchen remodel. We provide the guides, tools, and confidence you need to build your dream space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/resources">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-base h-12 px-8">
                  Explore Guides
                </Button>
              </Link>
              <Link href="/resources?level=beginner">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-base h-12 px-8">
                  Start for Beginners
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Levels Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">Pick Your Path</h2>
            <p className="text-muted-foreground text-lg">
              We organize content by skill level so you never feel overwhelmed. Start where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner */}
            <Link href="/resources?level=beginner">
              <motion.div 
                whileHover={{ y: -8 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={beginnerImage} alt="Beginner tools" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">The Novice</h3>
                  <p className="text-muted-foreground mb-6">
                    Perfect for first-time owners. Learn to hang shelves, unclog drains, and use basic tools safely.
                  </p>
                  <span className="text-primary font-medium flex items-center gap-2 group-hover:underline">
                    View Beginner Guides <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Intermediate */}
            <Link href="/resources?level=intermediate">
              <motion.div 
                whileHover={{ y: -8 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={intermediateImage} alt="Intermediate painting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <PaintRoller className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">The Improver</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to upgrade? Tackle painting, light fixture swaps, and landscaping projects.
                  </p>
                  <span className="text-secondary font-medium flex items-center gap-2 group-hover:underline">
                    View Intermediate Guides <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Advanced */}
            <Link href="/resources?level=advanced">
              <motion.div 
                whileHover={{ y: -8 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={advancedImage} alt="Advanced renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground mb-6">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">The Renovator</h3>
                  <p className="text-muted-foreground mb-6">
                    Big projects. Tiling, flooring, and structural changes. For those who know their way around a saw.
                  </p>
                  <span className="text-foreground font-medium flex items-center gap-2 group-hover:underline">
                    View Advanced Guides <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Articles</h2>
              <p className="text-muted-foreground">Latest tips and tricks from our experts.</p>
            </div>
            <Link href="/resources">
              <Button variant="ghost" className="hidden md:flex">View All Articles</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.slice(0, 3).map((resource) => (
              <Link key={resource.id} href={`/resource/${resource.id}`}>
                <div className="bg-card rounded-xl overflow-hidden border hover:shadow-md transition-shadow cursor-pointer group h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-foreground z-10">
                      {resource.category}
                    </span>
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className={
                        resource.skillLevel === 'beginner' ? "text-primary font-medium" :
                        resource.skillLevel === 'intermediate' ? "text-secondary font-medium" :
                        "text-foreground font-medium"
                      }>
                        {resource.skillLevel.charAt(0).toUpperCase() + resource.skillLevel.slice(1)}
                      </span>
                      <span>•</span>
                      <span>{resource.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/resources">
              <Button variant="outline" className="w-full">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Build Your Confidence</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join 15,000+ new homeowners receiving our weekly maintenance checklist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            />
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
