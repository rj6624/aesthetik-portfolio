import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Search, 
  Layout, 
  Smartphone, 
  Users, 
  BarChart3,
  Figma,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, cohesive visual identities with attention to typography, color theory, and composition.",
      level: 90,
      tools: ["Figma", "Photoshop", "Illustrator"]
    },
    {
      icon: Search,
      title: "UX Research",
      description: "Understanding user needs through interviews, surveys, and usability testing to inform design decisions.",
      level: 85,
      tools: ["User Interviews", "Surveys", "Analytics"]
    },
    {
      icon: Layout,
      title: "Wireframing",
      description: "Translating ideas into structured layouts and information architecture for optimal user flow.",
      level: 95,
      tools: ["Figma", "Sketch", "Balsamiq"]
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Designing responsive, touch-friendly interfaces optimized for mobile devices and tablets.",
      level: 88,
      tools: ["iOS Guidelines", "Material Design", "Responsive"]
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Creating engaging web experiences with focus on usability, accessibility, and modern design trends.",
      level: 92,
      tools: ["HTML/CSS", "Responsive", "Web Standards"]
    },
    {
      icon: Users,
      title: "User Testing",
      description: "Conducting usability tests to validate design decisions and iterate based on user feedback.",
      level: 80,
      tools: ["Maze", "UserTesting", "Hotjar"]
    },
    {
      icon: Layout,
      title: "Prototyping",
      description: "Building interactive prototypes to communicate design concepts and test user interactions.",
      level: 87,
      tools: ["Figma", "Principle", "Framer"]
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Presenting complex data in clear, actionable visual formats for better decision making.",
      level: 75,
      tools: ["Charts", "Dashboards", "Infographics"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            A comprehensive skill set covering the entire design process from research to implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="group border-border/50 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-primary-muted text-primary text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in-up">
              What I Can Offer
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up animate-delay-100">
              Ready to bring fresh perspectives and dedicated effort to your design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "App Design", description: "Mobile and web application interfaces" },
              { title: "Web Design", description: "Responsive websites and landing pages" },
              { title: "Wireframing", description: "Low to high-fidelity wireframes" },
              { title: "Prototyping", description: "Interactive prototypes for testing" }
            ].map((service, index) => (
              <Card
                key={service.title}
                className="text-center border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;