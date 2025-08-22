import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Heart, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const tools = [
    "Figma",
    "Adobe XD", 
    "Sketch",
    "Photoshop",
    "Illustrator",
    "Principle",
    "Framer",
    "Miro"
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centered",
      description: "Every design decision is made with the user's needs and emotions in mind."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Finding innovative approaches to complex design challenges."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working closely with developers, stakeholders, and users throughout the process."
    },
    {
      icon: Zap,
      title: "Iterative",
      description: "Continuously testing, learning, and improving designs based on feedback."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            A passionate designer on a mission to create meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello! I'm Alex Johnson</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a fresh UI/UX designer, I bring enthusiasm, creativity, and a strong foundation in design principles to every project. My journey began with a fascination for how design can solve real-world problems and create delightful user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is invisible – it works so well that users don't even think about it. My approach combines user research, iterative design, and collaborative problem-solving to create interfaces that are not just beautiful, but truly functional.
              </p>
            </div>

            {/* Tools */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium">Design Tools & Software</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-primary-muted text-primary text-sm rounded-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <Button 
              size="lg" 
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6">My Design Philosophy</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary-muted rounded-lg">
                        <value.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;