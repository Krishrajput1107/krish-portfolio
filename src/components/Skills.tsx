
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Skills",
      skills: [
        "Machine Learning", 
        "Deep Learning", 
        "Computer Vision", 
        "Big Data Analysis", 
        "Time Series Analysis", 
        "NLP"
      ]
    },
    {
      title: "Tools and Frameworks",
      skills: [
        "React", 
        "Tailwind CSS", 
        "Power BI", 
        "Tableau", 
        "Jira", 
        "Keras", 
        "TensorFlow", 
        "Hadoop", 
        "GitHub", 
        "Canva"
      ]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Cloud Platforms",
      skills: ["Amazon Web Services (AWS)"]
    },
    {
      title: "Coursework",
      skills: [
        "Data Structures and Algorithms", 
        "Data Science (Specialisation)", 
        "Operating Systems", 
        "DBMS", 
        "Computer Networks"
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
