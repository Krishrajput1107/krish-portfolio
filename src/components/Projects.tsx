
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Edutech",
      description: "An educational website for students to watch tutorial videos on various courses like HTML/CSS, JavaScript, ML/DL and more.",
      details: [
        "Developed an educational website for students to watch tutorial videos on various courses like HTML/CSS, JavaScript, ML/DL and more.",
        "Integrated features like quizzes, doubt clearing via Discord, and social media connectivity for enhanced user engagement.",
        "Included a chatbot for instant help and a dashboard displaying the creators' information."
      ],
      tech: "HTML, CSS, JavaScript, Python",
      repoLink: "#",
      demoLink: "#"
    },
    {
      title: "Psoriasis Detection using CNN",
      description: "Built a CNN model based on ResNet50 to detect psoriasis from skin lesion images, aiming to aid dermatologists in early detection.",
      details: [
        "Built a CNN model based on ResNet50 to detect psoriasis from skin lesion images, aiming to aid dermatologists in early detection.",
        "Applied data preprocessing and augmentation techniques for better accuracy, achieving a validation accuracy of 99.7%."
      ],
      tech: "Python, TensorFlow, Keras, ResNet50",
      repoLink: "#",
      demoLink: null
    },
    {
      title: "Credit Card Financial Dashboard",
      description: "Built an interactive dashboard using SQL transaction and customer data to provide real-time insights.",
      details: [
        "Built an interactive dashboard using SQL transaction and customer data to provide real-time insights.",
        "Streamlined data processing to monitor key performance metrics and trends.",
        "Delivered actionable insights to support decision-making."
      ],
      tech: "Power BI, DAX, Power Query, PostgreSQL",
      repoLink: "#",
      demoLink: "#"
    },
    {
      title: "Diamond Price Prediction",
      description: "Implemented a regression model to predict diamond prices based on 10 features such as carat, cut, color, and clarity.",
      details: [
        "Implemented a regression model to predict diamond prices based on 10 features such as carat, cut, color, and clarity.",
        "Performed data preprocessing including missing value imputation, feature encoding, and standardization using Scikit-learn pipelines.",
        "Trained and evaluated multiple regression models (Linear Regression, Lasso, Ridge, ElasticNet) to determine the best-performing model."
      ],
      tech: "Python, Pandas, Scikit-learn, NumPy, Regression Models",
      repoLink: "#",
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc ml-5 space-y-2 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                  <p className="text-sm text-slate">{project.tech}</p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 border-t pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Repository
                  </a>
                </Button>
                {project.demoLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
