import { useState, useMemo } from "react";
import Layout from "@/components/layout";
import { resources, categories, SkillLevel, Category } from "@/lib/data";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Resources() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialLevel = params.get("level") as SkillLevel | "all" || "all";

  const [activeLevel, setActiveLevel] = useState<SkillLevel | "all">(initialLevel);
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesLevel = activeLevel === "all" || resource.skillLevel === activeLevel;
      const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesLevel && matchesCategory && matchesSearch;
    });
  }, [activeLevel, activeCategory, searchQuery]);

  return (
    <Layout>
      <div className="bg-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Resource Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Everything you need to know about maintaining, repairing, and upgrading your home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search guides..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Skill Level Filter */}
            <div>
              <h3 className="font-serif font-bold mb-4 text-lg">Skill Level</h3>
              <div className="space-y-2">
                {["all", "beginner", "intermediate", "advanced"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveLevel(level as any)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeLevel === level 
                        ? "bg-primary/10 text-primary font-semibold" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-serif font-bold mb-4 text-lg">Category</h3>
              <div className="space-y-2">
                <button
                   onClick={() => setActiveCategory("all")}
                   className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                     activeCategory === "all"
                       ? "bg-primary/10 text-primary font-semibold" 
                       : "text-muted-foreground hover:bg-muted hover:text-foreground"
                   }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-colors ${
                      activeCategory === cat.id
                        ? "bg-primary/10 text-primary font-semibold" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Showing {filteredResources.length} result{filteredResources.length !== 1 ? 's' : ''}
              </span>
              
              {(activeLevel !== "all" || activeCategory !== "all" || searchQuery) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setActiveLevel("all");
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear filters <X className="ml-2 h-3 w-3" />
                </Button>
              )}
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <Link key={resource.id} href={`/resource/${resource.id}`}>
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-card border rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full"
                    >
                      <div className="h-48 overflow-hidden relative">
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
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {resource.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border rounded-xl bg-muted/20">
                <h3 className="font-serif text-xl font-semibold mb-2">No guides found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
