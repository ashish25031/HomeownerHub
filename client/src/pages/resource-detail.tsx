import { useRoute } from "wouter";
import Layout from "@/components/layout";
import { resources } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

export default function ResourceDetail() {
  const [match, params] = useRoute("/resource/:id");
  
  if (!match) return <NotFound />;

  const resource = resources.find(r => r.id === params.id);

  if (!resource) return <NotFound />;

  return (
    <Layout>
      <article className="min-h-screen pb-24">
        {/* Header */}
        <div className="w-full h-[50vh] relative">
          <img 
            src={resource.imageUrl} 
            alt={resource.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="container mx-auto max-w-4xl">
              <Link href="/resources">
                <Button variant="link" className="text-white/80 hover:text-white pl-0 mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
                </Button>
              </Link>
              <div className="flex gap-3 mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {resource.skillLevel}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                  {resource.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {resource.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {resource.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {resource.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl mt-12">
          <div className="grid md:grid-cols-[1fr_250px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg prose-stone max-w-none">
               <div className="lead text-xl text-muted-foreground font-light mb-8">
                {resource.description}
               </div>
               <div dangerouslySetInnerHTML={{ __html: resource.content }} />
               
               <div className="mt-12 p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                  <h3 className="font-serif font-bold text-xl mb-2">Disclaimer</h3>
                  <p className="text-sm text-muted-foreground m-0">
                    This guide is for educational purposes only. Always consult a professional if you are unsure about your ability to safely complete a project.
                  </p>
               </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <div className="bg-card border rounded-xl p-6 shadow-sm mb-6">
                  <h3 className="font-serif font-bold text-lg mb-4">Share this guide</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="w-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-serif font-bold text-lg mb-4">Related Topics</h3>
                  <div className="space-y-3">
                    {resources
                      .filter(r => r.category === resource.category && r.id !== resource.id)
                      .slice(0, 3)
                      .map(r => (
                        <Link key={r.id} href={`/resource/${r.id}`}>
                          <div className="group cursor-pointer">
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                              {r.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">{r.readTime}</span>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
