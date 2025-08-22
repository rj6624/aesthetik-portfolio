import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Dribbble,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      // TODO: Replace with your own EmailJS credentials
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title: "Message sent successfully!",
              description:
                "Thank you for reaching out. I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              variant: "destructive",
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jay.r2@ahduni.edu.in",
      href: "mailto:jay.r2@ahduni.edu.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8320486720",
      href: "tel:8320486720",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajkot, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jay-rupareliya-246a45303/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rj6624",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Ready to start your next project? I'd love to hear about your ideas
            and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-large animate-fade-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-border/50 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-border/50 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="border-border/50 focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Contact Details */}
            <Card className="border-border/50 shadow-medium">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <div className="p-2 bg-primary-muted rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {info.label}
                      </div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50 shadow-medium">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-medium ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Connect with me on social media to see my latest work and
                  design inspiration.
                </p>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
