import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data (in a real app, this would come from an API or context)
  const projects = [
    {
      id: 1,
      title: "FoodieApp - Mobile Food Delivery",
      description: "A comprehensive food delivery app with intuitive ordering flow, real-time tracking, and personalized recommendations.",
      fullDescription: "FoodieApp is a modern food delivery solution designed to bridge the gap between hungry customers and local restaurants. The app focuses on creating an intuitive user experience with seamless ordering, real-time tracking, and personalized recommendations based on user preferences and order history.",
      tags: ["Mobile Design", "User Research", "Prototyping", "Figma"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      category: "Mobile App",
      status: "Case Study",
      problem: "Traditional food delivery apps often overwhelm users with too many options and complex navigation, leading to cart abandonment and poor user satisfaction.",
      solution: "I designed a streamlined interface that prioritizes user preferences, implements smart filtering, and provides clear visual hierarchy to guide users through the ordering process.",
      process: [
        "User Research & Competitive Analysis",
        "Information Architecture & User Flows",
        "Low-fidelity Wireframes",
        "High-fidelity Prototypes",
        "Usability Testing & Iterations"
      ],
      tools: ["Figma", "Adobe Illustrator", "Principle", "Maze"],
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      title: "EcoBank - Sustainable Banking",
      description: "Modern banking dashboard focused on environmental impact tracking and sustainable investment options.",
      fullDescription: "EcoBank represents the future of conscious banking, where financial decisions align with environmental values. This digital banking platform helps users track their carbon footprint through spending habits while promoting sustainable investment opportunities.",
      tags: ["Web Design", "Dashboard", "Sustainability", "UX Research"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Web App",
      status: "Prototype",
      problem: "Traditional banking apps don't provide transparency about the environmental impact of financial decisions, missing opportunities to promote sustainable choices.",
      solution: "Created an intuitive dashboard that visualizes environmental impact alongside financial data, making sustainability a core part of the banking experience.",
      process: [
        "Market Research & User Interviews",
        "Persona Development",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design & Design System"
      ],
      tools: ["Figma", "Adobe XD", "InVision", "Photoshop"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      title: "MindfulMe - Mental Health App",
      description: "Calming and supportive mental health app with meditation guides, mood tracking, and community features.",
      fullDescription: "MindfulMe is a comprehensive mental wellness platform designed to provide accessible mental health support through guided meditation, mood tracking, and peer community features, all wrapped in a calming and supportive interface.",
      tags: ["Mobile Design", "Health Tech", "Accessibility", "User Testing"],
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
      category: "Mobile App",
      status: "Case Study",
      problem: "Mental health apps often feel clinical or overwhelming, creating barriers for users who need accessible, gentle support for their mental wellness journey.",
      solution: "Designed a warm, approachable interface with calming colors and gentle interactions that make mental health support feel welcoming rather than intimidating.",
      process: [
        "User Research with Mental Health Professionals",
        "Accessibility Guidelines Research",
        "User Journey Mapping",
        "Prototyping & User Testing",
        "Iteration Based on Feedback"
      ],
      tools: ["Figma", "Principle", "Adobe After Effects", "Sketch"],
      images: [
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 4,
      title: "LearnHub - Online Learning Platform",
      description: "Educational platform redesign focusing on course discovery, progress tracking, and student engagement.",
      fullDescription: "LearnHub is a comprehensive learning management system redesign that transforms how students discover, engage with, and complete online courses. The platform prioritizes clear progress visualization and social learning features.",
      tags: ["Web Design", "Education", "Wireframing", "User Journey"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      category: "Web Design",
      status: "Live",
      problem: "Existing learning platforms suffer from poor course discovery, unclear progress tracking, and lack of social engagement features that motivate continued learning.",
      solution: "Redesigned the platform with intuitive course discovery, gamified progress tracking, and integrated social features to boost engagement and completion rates.",
      process: [
        "Stakeholder Interviews",
        "Competitive Analysis",
        "User Flow Documentation",
        "Wireframing & Information Architecture",
        "High-fidelity Design & Handoff"
      ],
      tools: ["Figma", "Miro", "Adobe Creative Suite", "Principle"],
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      title: "TravelBuddy - Trip Planning",
      description: "Collaborative trip planning tool with budget tracking, itinerary sharing, and local recommendations.",
      fullDescription: "TravelBuddy simplifies group travel planning by providing collaborative tools for itinerary creation, budget management, and discovering local experiences. The app focuses on reducing the stress of coordinating group trips.",
      tags: ["Mobile Design", "Travel", "Collaboration", "Maps"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      category: "Mobile App",
      status: "Prototype",
      problem: "Planning group trips involves juggling multiple apps, spreadsheets, and communication channels, leading to confusion and missed opportunities.",
      solution: "Created an all-in-one collaborative platform that centralizes trip planning with real-time collaboration, budget tracking, and local discovery features.",
      process: [
        "User Interviews with Frequent Travelers",
        "Journey Mapping",
        "Feature Prioritization",
        "Prototype Development",
        "Usability Testing"
      ],
      tools: ["Figma", "InVision", "Adobe XD", "Marvel"],
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 6,
      title: "SmartHome - IoT Dashboard",
      description: "Intuitive smart home control interface with energy monitoring, automation rules, and security features.",
      fullDescription: "SmartHome dashboard provides a unified interface for managing IoT devices, monitoring energy consumption, and creating automation rules. The design prioritizes at-a-glance information and quick device control.",
      tags: ["Dashboard", "IoT", "Smart Home", "Data Viz"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Dashboard",
      status: "Case Study",
      problem: "Smart home ecosystems are fragmented, requiring multiple apps to control different devices, creating a poor user experience and limiting adoption.",
      solution: "Designed a unified dashboard that provides centralized control, intelligent automation, and clear energy insights in an intuitive interface.",
      process: [
        "IoT Market Research",
        "User Persona Development",
        "Information Architecture",
        "Data Visualization Design",
        "Responsive Design Implementation"
      ],
      tools: ["Figma", "Sketch", "Adobe Illustrator", "InVision"],
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-primary/5"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge 
                  className={`${
                    project.status === "Live" 
                      ? "bg-success text-success-foreground"
                      : project.status === "Prototype"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {project.status}
                </Badge>
                <Badge variant="outline" className="border-primary/20 text-primary">
                  {project.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="flex gap-4">
                <Button className="group">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  View Prototype
                </Button>
                <Button variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Case Study
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem & Solution */}
              <div className="space-y-8">
                <Card className="p-8 border-destructive/20">
                  <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </Card>
                
                <Card className="p-8 border-success/20">
                  <h3 className="text-2xl font-bold mb-4 text-success">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </Card>
              </div>

              {/* Design Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Design Process</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.process.map((step, index) => (
                    <Card key={index} className="p-4 text-center border-primary/20">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm font-medium">{step}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Project Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Project Details</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium">{project.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">6 weeks</p>
                  </div>
                </div>
              </Card>

              {/* Tools Used */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Skills */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;