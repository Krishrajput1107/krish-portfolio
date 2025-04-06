
import { ArrowRight, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif animate-fade-in">
            <span className="text-primary">K</span>rish
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-slate-dark animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Machine Learning Engineer & Full Stack Developer
          </h2>
          <p className="text-lg mb-8 text-slate animate-fade-in" style={{ animationDelay: "0.4s" }}>
            B. Tech Computer Science graduate with expertise in machine learning,
            data science, and full-stack development. Passionate about building
            innovative solutions and solving complex problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <Code className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
            <a href="#about" aria-label="Scroll to About section">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
