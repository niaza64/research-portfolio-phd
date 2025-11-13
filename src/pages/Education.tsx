import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Academic journey toward PhD in Computer Vision and Multimodal Learning
        </p>

        <div className="space-y-8">
          {/* Master's Degree */}
          <Card className="p-8 shadow-elegant border-l-4 border-primary">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Master of Science in Computer Science</h2>
                <p className="text-xl text-muted-foreground mb-1">Tampere University, Finland</p>
                <p className="text-lg text-foreground/70">Expected: 2027</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Focus Areas</h3>
                <p className="text-foreground/80 mb-3">
                  Specializing in Human-Computer Interaction with emphasis on Computer Vision and Multimodal Learning. 
                  Preparing for doctoral research in advanced deep learning architectures for visual understanding.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Current Coursework</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "Advanced Deep Learning",
                    "Recommender Systems",
                    "Reinforcement Learning"
                  ].map((course) => (
                    <div key={course} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Research Direction</h3>
                <p className="text-foreground/80">
                  Currently conducting self-directed research on masked encoders with SAM (Segment Anything Model) 
                  for anomaly detection. Planning to pursue PhD focusing on multimodal learning approaches in 
                  computer vision, particularly audio-visual synchronization and realistic avatar generation.
                </p>
              </div>
            </div>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="p-8 shadow-card-custom border-l-4 border-secondary">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Bachelor of Computer Engineering</h2>
                <p className="text-xl text-muted-foreground mb-1">
                  Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
                </p>
                <p className="text-lg text-foreground/70">Sawabi, Pakistan • 2020</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">🏆 Full Academic Scholarship</h3>
                <p className="text-foreground/80">
                  Selected as top 20 national candidate based on academic excellence and competitive examination performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Calculus",
                    "Applied Artificial Intelligence",
                    "GPU Programming (GP-GPU)",
                    "Computer Vision",
                    "Neural Networks"
                  ].map((course) => (
                    <Badge key={course} variant="outline" className="text-sm">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Final Year Project</h3>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Fully Convolutional Neural Network for Weed Detection in Agricultural Images
                  </h4>
                  <p className="text-foreground/80 mb-3">
                    Designed and implemented a deep learning system for automated crop protection, achieving 
                    high precision in distinguishing between crops and weeds in agricultural imagery.
                  </p>
                  <div className="flex gap-2">
                    <Badge>MATLAB</Badge>
                    <Badge>CNNs</Badge>
                    <Badge>Computer Vision</Badge>
                    <Badge>Image Processing</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Continuous Learning */}
          <Card className="p-8 shadow-card-custom bg-gradient-hero">
            <h2 className="text-3xl font-bold mb-6">Continuous Learning & Development</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Teaching & Mentoring</h3>
                <p className="text-foreground/80 mb-3">
                  Teaching Fellow at Lahore University of Management Sciences, instructing 250+ students in 
                  Advanced Algorithms and Software Engineering. This experience deepens my understanding of 
                  foundational concepts while developing leadership and communication skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Course Development</h3>
                <p className="text-foreground/80 mb-3">
                  Created comprehensive curriculum for Educative.io, including:
                </p>
                <ul className="space-y-2 ml-4 text-foreground/80">
                  <li>• Introduction to Deep Learning & Neural Networks</li>
                  <li>• Become a Deep Learning Professional (co-developed with AI expert)</li>
                  <li>• Data Structures and Algorithms in Python</li>
                  <li>• Software Design Patterns</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Research Publications</h3>
                <p className="text-foreground/80">
                  Currently preparing research paper on lightweight facial animation synthesis based on work 
                  at Aletheia AI. The paper details novel phoneme-viseme mapping approach achieving 
                  state-of-the-art results with CPU-level efficiency.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
