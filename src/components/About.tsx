
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6">
              I'm a Computer Science graduate from Bennett University with a passion for machine learning,
              data science, and web development. My academic journey combined with practical
              experience has equipped me with a diverse set of skills across multiple domains.
            </p>
            <p className="text-lg mb-6">
              During my internship at VerveBridge, I worked on machine learning projects,
              gaining hands-on experience with real-world applications. I enjoy building
              solutions that solve complex problems and create meaningful impact.
            </p>
            <p className="text-lg">
              My technical expertise spans full-stack development, data analysis, and 
              machine learning model development. I'm constantly exploring new technologies
              and methodologies to enhance my skill set and deliver high-quality solutions.
            </p>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-slate">Khatauli, Uttar Pradesh, India</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-slate">+91-7248810380</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate">devgrade687@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
