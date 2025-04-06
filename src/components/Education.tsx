
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Bennett University (Times of India Group)",
      degree: "B. Tech Computer Science",
      grade: "CGPA - 9.1",
      location: "Greater Noida, Uttar Pradesh, India",
      period: "2022-2026"
    },
    {
      institution: "Maples Academy",
      degree: "12th Class",
      grade: "Percentage - 86.4",
      location: "Khatauli, Uttar Pradesh, India",
      period: "2022"
    },
    {
      institution: "ST. Thomas",
      degree: "10th Class",
      grade: "Percentage - 94.2",
      location: "Khatauli, Uttar Pradesh, India",
      period: "2020"
    }
  ];

  return (
    <section id="education" className="bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.institution}</CardTitle>
                    <CardDescription className="text-lg">{item.degree}</CardDescription>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="font-medium">{item.grade}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate">{item.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
