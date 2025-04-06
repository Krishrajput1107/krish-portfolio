
import { Github, Linkedin, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">
              <span className="text-primary">K</span>rish
            </h2>
            <p className="text-slate mt-2">
              Machine Learning Engineer & Full Stack Developer
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LeetCode"
            >
              <Code className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate/20 mt-8 pt-8 text-center">
          <p className="text-slate">
            &copy; {currentYear} Krish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
