import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "FoodieApp - Mobile Food Delivery",
      description: "A comprehensive food delivery app with intuitive ordering flow, real-time tracking, and personalized recommendations.",
      tags: ["Mobile Design", "User Research", "Prototyping", "Figma"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      category: "Mobile App",
      status: "Case Study"
    },
    {
      id: 2,
      title: "EcoBank - Sustainable Banking",
      description: "Modern banking dashboard focused on environmental impact tracking and sustainable investment options.",
      tags: ["Web Design", "Dashboard", "Sustainability", "UX Research"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Web App",
      status: "Prototype"
    },
    {
      id: 3,
      title: "MindfulMe - Mental Health App",
      description: "Calming and supportive mental health app with meditation guides, mood tracking, and community features.",
      tags: ["Mobile Design", "Health Tech", "Accessibility", "User Testing"],
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
      category: "Mobile App",
      status: "Case Study"
    },
    {
      id: 4,
      title: "LearnHub - Online Learning Platform",
      description: "Educational platform redesign focusing on course discovery, progress tracking, and student engagement.",
      tags: ["Web Design", "Education", "Wireframing", "User Journey"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "Web Design",
      status: "Live"
    },
    {
      id: 5,
      title: "TravelBuddy - Trip Planning",
      description: "Collaborative trip planning tool with budget tracking, itinerary sharing, and local recommendations.",
      tags: ["Mobile Design", "Travel", "Collaboration", "Maps"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      category: "Mobile App",
      status: "Prototype"
    },
    {
      id: 6,
      title: "SmartHome - IoT Dashboard",
      description: "Intuitive smart home control interface with energy monitoring, automation rules, and security features.",
      tags: ["Dashboard", "IoT", "Smart Home", "Data Viz"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Dashboard",
      status: "Case Study"
    }
  ];

  const categories = ["All", "Mobile App", "Web App", "Web Design", "Dashboard"];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            A collection of projects showcasing my design process and problem-solving skills
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 animate-fade-in-up ${
                index === 0 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                  : "hover:bg-primary/5 border-primary/20"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/50 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <Badge
                  className={`absolute top-3 right-3 ${
                    project.status === "Live" 
                      ? "bg-success text-success-foreground"
                      : project.status === "Prototype"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {project.status}
                </Badge>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-background/90 text-foreground hover:bg-background">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-background/90 text-foreground hover:bg-background">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;