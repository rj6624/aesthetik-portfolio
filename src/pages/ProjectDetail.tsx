import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Project data (in a real app, this would come from an API or context)
  const projects = [
    {
      id: 1,
      title: "Internal Task Management System",
      description:
        "Designed a task management system for project managers, staff, and admins to create projects, assign tasks, track deadlines, and streamline internal workflow efficiently.",
      fullDescription:
        "This project involved designing an internal task management system for ZIDIO Development. The goal was to create a centralized platform for project managers, staff, and administrators to manage projects, assign tasks, monitor deadlines, and improve overall workflow efficiency. The system was designed with role-based access control to ensure clear task visibility and appropriate permissions for different user types.",
      tags: [
        "User Research",
        "User Personas",
        "Competitive Analysis",
        "Wireframing",
        "Interactive Prototyping",
      ],
      image: "/Taskmanagement/task-management-poster.jpg",
      category: "UI/UX Design",
      status: "Case Study",
      problem:
        "The company lacked a centralized system to manage internal projects, leading to inefficiencies, missed deadlines, and poor communication between team members. Tasks were tracked using spreadsheets and emails, which was not scalable.",
      solution:
        "A role-based task management system was designed with dedicated interfaces for project managers, staff, and admins. This provided clear task visibility, streamlined communication, and allowed for efficient tracking of project progress and deadlines.",
      process: [
        "User Research",
        "User Personas",
        "Competitive Analysis",
        "Wireframing",
        "Interactive Prototyping",
        "Usability Testing",
      ],
      tools: ["Figma"],
      images: [
        "/Taskmanagement/Add New Project.png",
        "/Taskmanagement/Add New Task.png",
        "/Taskmanagement/Add Sub Task.png",
        "/Taskmanagement/Admin Analytics.png",
        "/Taskmanagement/Admin Audit logs.png",
        "/Taskmanagement/Admin Calendar Timeline.png",
        "/Taskmanagement/Admin Collaboration.png",
        "/Taskmanagement/Admin Dashboard.png",
        "/Taskmanagement/Admin Data Management.png",
        "/Taskmanagement/Admin Log In.png",
        "/Taskmanagement/Admin Projects.png",
        "/Taskmanagement/Admin Resource Management.png",
        "/Taskmanagement/Admin Roles & Permission.png",
        "/Taskmanagement/Admin Settings.png",
        "/Taskmanagement/Admin Sign In.png",
        "/Taskmanagement/Admin Tasks.png",
        "/Taskmanagement/Assignee Analytics.png",
        "/Taskmanagement/Assignee Calendar & Timeline.png",
        "/Taskmanagement/Assignee Collaboration.png",
        "/Taskmanagement/Assignee Dashboard.png",
        "/Taskmanagement/Assignee Help & Support.png",
        "/Taskmanagement/Assignee Log In.png",
        "/Taskmanagement/Assignee Notification Settings.png",
        "/Taskmanagement/Assignee Notifications.png",
        "/Taskmanagement/Assignee Project Brief.png",
        "/Taskmanagement/Assignee Projects.png",
        "/Taskmanagement/Assignee Sign Up.png",
        "/Taskmanagement/Assignee Task Management.png",
        "/Taskmanagement/Assignee Tasks.png",
        "/Taskmanagement/Manager Analytics.png",
        "/Taskmanagement/Manager Calendar Timeline.png",
        "/Taskmanagement/Manager Collaboration.png",
        "/Taskmanagement/Manager Dashboard.png",
        "/Taskmanagement/Manager help & support.png",
        "/Taskmanagement/Manager Notifications.png",
        "/Taskmanagement/Manager Project Brief.png",
        "/Taskmanagement/Manager Projects.png",
        "/Taskmanagement/Manager Resource Management.png",
        "/Taskmanagement/Manager Settings.png",
        "/Taskmanagement/Manager Sign In.png",
        "/Taskmanagement/Manager Sign Up.png",
        "/Taskmanagement/Manager Task Management.png",
        "/Taskmanagement/Manager Tasks.png",
        "/Taskmanagement/Manger Notification Settings.png",
        "/Taskmanagement/Select Your Role.png",
      ],
      liveLink: "https://www.figma.com/proto/XADWSeD3mFXxRhGTkWfwRi/Zidio-Projects?page-id=721%3A4280&node-id=927-4810&viewport=-31%2C-1185%2C0.06&t=UTU96rjOhYkHhVzY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=927%3A4810",
      githubLink: "https://github.com/rj6624",
    },
    {
      id: 2,
      title: "E-learning platform",
      description:
        "Designed an e-learning platform from both student and instructor perspectives, incorporating gamified features and an interactive mascot to enhance user engagement.",
      fullDescription:
        "This project focused on designing an engaging e-learning platform for ZIDIO Development. The platform was designed for both students and instructors, with a key focus on enhancing user engagement through gamification and an interactive mascot. The goal was to create a more motivating and enjoyable learning experience.",
      tags: [
        "User Research",
        "User Personas",
        "Competitive Analysis",
        "Wireframing",
        "Interactive Prototyping",
        "Gamification",
      ],
      image: "/E-learning Platform/Elearning-platform.jpg",
      category: "UI/UX Design",
      status: "Case Study",
      problem:
        "Many e-learning platforms fail to keep users engaged and motivated. They often lack interactive elements and can feel monotonous, leading to low course completion rates.",
      solution:
        "An e-learning platform was designed with gamification elements like badges, points, and leaderboards. An interactive mascot was also introduced to guide users and make the learning process more enjoyable and engaging.",
      process: [
        "User Research",
        "User Personas",
        "Competitive Analysis",
        "Wireframing",
        "Interactive Prototyping",
        "Gamification Design",
      ],
      tools: ["Figma"],
      images: [
        "/E-learning Platform/Account Settings.png",
        "/E-learning Platform/Add Module.png",
        "/E-learning Platform/Admin Dashboard.png",
        "/E-learning Platform/Blog.png",
        "/E-learning Platform/Chat Bot.png",
        "/E-learning Platform/Course Assignment.png",
        "/E-learning Platform/Course Quiz.png",
        "/E-learning Platform/Course Video.png",
        "/E-learning Platform/Courses Overview.png",
        "/E-learning Platform/Courses.png",
        "/E-learning Platform/Game Page.png",
        "/E-learning Platform/Game.png",
        "/E-learning Platform/Inbox.png",
        "/E-learning Platform/Instructor Dashboard.png",
        "/E-learning Platform/Instructor.png",
        "/E-learning Platform/Landing Page.png",
        "/E-learning Platform/Log In.png",
        "/E-learning Platform/Payment Checkout.png",
        "/E-learning Platform/Progress.png",
        "/E-learning Platform/Sign Up.png",
        "/E-learning Platform/Store.png",
        "/E-learning Platform/Upload New Course.png",
        "/E-learning Platform/User Dashboard.png",
      ],
      liveLink: "https://www.figma.com/proto/XADWSeD3mFXxRhGTkWfwRi/Zidio-Projects?page-id=547%3A5933&node-id=549-5434&p=f&viewport=281%2C309%2C0.02&t=b1z5Hqmm6Cmq48JL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=549%3A5434",
      githubLink: "https://github.com/rj6624",
    },
    {
      id: 3,
      title: "Luxury Los Santos",
      description:
        "Developed a GTA-V-themed e-commerce platform where users can seamlessly buy and sell luxury items, including cars, penthouses, planes, and yachts.",
      fullDescription:
        "Luxury Los Santos is a full-stack e-commerce platform inspired by the game Grand Theft Auto V. It allows users to buy and sell in-game luxury items like cars, penthouses, and yachts using virtual currency. The platform features product browsing, a shopping cart, transaction history, and item filtering.",
      tags: ["JavaScript", "NodeJS", "ExpressJS", "Bootstrap", "HTML", "CSS"],
      image:
        "/Luxury Los Santos/Luxury los santos.jpg",
      category: "Web Development",
      status: "Live",
      problem:
        "There was no dedicated, user-friendly platform for players to trade luxury in-game items in a simulated economy, making it difficult to track assets and find items for sale.",
      solution:
        "A GTA-themed e-commerce platform was built with features for browsing, buying, and selling items. It includes a virtual currency system, transaction history, and filtering, providing a seamless trading experience.",
      process: [
        "Concept & Planning",
        "Frontend Development (HTML, CSS, Bootstrap)",
        "Backend Development (NodeJS, ExpressJS)",
        "Database Integration",
        "Testing & Deployment",
      ],
      tools: [
        "VS Code",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Git",
        "GitHub",
      ],
      images: [
        "/Luxury Los Santos/355557712-5eb5caa4-185a-4db4-b99a-07363631fb39.jpg",
        "/Luxury Los Santos/355557884-5a2ffba4-17f0-46a6-97cd-3ee6c34c0350.jpg",
        "/Luxury Los Santos/355557917-8fc72274-65d6-4bd8-b0f7-eb23b1ffb36a.jpg",
        "/Luxury Los Santos/355557963-598d5413-b8da-44bd-a672-a0028553d733.jpg",
      ],
      liveLink: "https://github.com/rj6624/wmc-project",
      githubLink: "https://github.com/rj6624/Luxury-Los-Santos",
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
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
            onClick={() => navigate("/")}
            className="hover:bg-[#8A2BE2] hover:text-white"
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
                  variant="outline"
                  className="border-primary/20 text-primary"
                >
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
                <Button
                  className="group"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {project.id === 3 ? "GitHub" : "View"}
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
                  <h3 className="text-2xl font-bold mb-4 text-destructive">
                    The Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </Card>

                <Card className="p-8 border-success/20">
                  <h3 className="text-2xl font-bold mb-4 text-success">
                    The Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </Card>
              </div>

              {/* Design Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Design Process</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.process.map((step, index) => (
                    <Card
                      key={index}
                      className="p-4 text-center border-primary/20"
                    >
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.images
                    .slice(0, showAllImages ? project.images.length : 8)
                    .map((image, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${
                                index + 1
                              }`}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${
                              index + 1
                            }`}
                            className="w-full h-auto rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>
                {!showAllImages && project.images.length > 8 && (
                  <div className="text-center mt-6">
                    <Button
                      onClick={() => setShowAllImages(true)}
                      variant="outline"
                    >
                      Load More
                    </Button>
                  </div>
                )}
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
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-primary/20 text-primary"
                    >
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
