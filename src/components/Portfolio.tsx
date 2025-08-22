import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Internal Task Management System",
      description:
        "Designed a task management system for project managers, staff, and admins to create projects, assign tasks, track deadlines, and streamline internal workflow efficiently.",
      tags: ["User Research", "User Personas", "Wireframing", "Prototyping"],
      image: "/Taskmanagement/task-management-poster.jpg",
      category: "UI/UX Design",
      status: "Case Study",
      liveLink: "#",
      githubLink: "https://github.com/rj6624",
    },
    {
      id: 2,
      title: "E-learning platform",
      description:
        "Designed an e-learning platform from both student and instructor perspectives, incorporating gamified features and an interactive mascot to enhance user engagement.",
      tags: ["Gamification", "User Research", "Prototyping", "Figma"],
      image: "/E-learning Platform/Elearning-platform.jpg",
      category: "UI/UX Design",
      status: "Case Study",
      liveLink: "#",
      githubLink: "https://github.com/rj6624",
    },
    {
      id: 3,
      title: "Luxury Los Santos",
      description:
        "Developed a GTA-V-themed e-commerce platform where users can seamlessly buy and sell luxury items, including cars, penthouses, planes, and yachts.",
      tags: ["JavaScript", "NodeJS", "ExpressJS", "Bootstrap"],
      image: "/Luxury Los Santos/Luxury los santos.jpg",
      category: "Web Development",
      status: "Live",
      liveLink: "https://github.com/rj6624/Luxury-Los-Santos",
      githubLink: "https://github.com/rj6624/Luxury-Los-Santos",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            A collection of projects showcasing my design process and
            problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/50 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/20 text-primary"
                    >
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
      </div>
    </section>
  );
};

export default Portfolio;
