import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Johnson.</span>
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Back to Top ↑
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-4 pt-4 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Designed and built with modern tools and best practices. 
            Always learning, always growing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;