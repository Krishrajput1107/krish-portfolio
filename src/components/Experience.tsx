
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <CardTitle className="text-xl">Intern - Machine Learning</CardTitle>
                <CardDescription className="text-lg font-medium">VerveBridge</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">July 2024 - August 2024</p>
                <p className="text-sm text-muted-foreground">Remote</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 space-y-2">
              <li>Contributed to machine learning projects focusing on data analysis and model implementation</li>
              <li>Applied various machine learning techniques to solve real-world problems</li>
              <li>Collaborated with a team of data scientists to develop and optimize algorithms</li>
              <li>Documented methods and results for future reference and improvement</li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold mb-6">Achievements</h3>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <div>
                <p className="font-medium">Dean's Letter of Appreciation</p>
                <p className="text-slate">Received 2 times for achieving 9.88 SGPA in the 4th semester and 9.54 SGPA in the 5th semester.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <div>
                <p className="font-medium">JEE Mains 2022</p>
                <p className="text-slate">Scored 87.53 percentile.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <div>
                <p className="font-medium">Data Science 2.0 Course</p>
                <p className="text-slate">Completed a 9-month course from Physics Wallah.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <div>
                <p className="font-medium">Software Development Processes and Methodologies</p>
                <p className="text-slate">Completed an in-depth certification program.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <div>
                <p className="font-medium">Google Cloud Computing Foundations Certificate</p>
                <p className="text-slate">Participated in a collaborative learning program conducted by GDSC.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
