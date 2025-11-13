import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Building AI systems and scalable applications across research and industry
        </p>

        <div className="space-y-8">
          {/* Aletheia AI */}
          <Card className="p-8 shadow-elegant border-l-4 border-primary">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">Deep Learning Engineer</h2>
                <p className="text-lg text-muted-foreground">Aletheia AI • 2024–2025</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                Led research and development of an advanced talking head synthesis system combining computer vision, 
                deep learning, and audio processing. Pioneered a novel phoneme-viseme mapping approach that achieved 
                state-of-the-art results.
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Designed facial descriptor module leveraging rotation matrices, translation vectors, and 
                  expression parameters to capture nuanced facial movements with 96.8% accuracy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Implemented bidirectional LSTMs and hierarchical clustering for audio-to-expression mapping, 
                  processing RAVDESS dataset of 3,678 videos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Optimized model architecture for lightweight inference, achieving real-time performance (30 FPS) 
                  on consumer-grade CPUs without GPU requirements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Combined cluster analysis, neural networks, and autoencoders in PyTorch to generate 
                  photorealistic facial animations from single images and audio inputs</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>PyTorch</Badge>
                <Badge>Computer Vision</Badge>
                <Badge>BiLSTM</Badge>
                <Badge>Transformers</Badge>
                <Badge>Audio Processing</Badge>
              </div>
            </div>
          </Card>

          {/* Educative - Software Engineer */}
          <Card className="p-8 shadow-card-custom border-l-4 border-secondary">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">Software Engineer</h2>
                <p className="text-lg text-muted-foreground">Educative • 2023–2024</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                Engineered full-stack solutions for a platform serving 2M+ users, focusing on payment systems, 
                performance optimization, and feature development.
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Led end-to-end rollout of global Stripe integration, developing Flask backend services and 
                  React frontend components on Google Cloud Platform</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Optimized multi-tiered Jenkins CI/CD pipeline, reducing algorithmic complexity from O(N) 
                  to O(Log N) for improved deployment efficiency</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Designed and launched premium trial feature achieving 33% opt-in rate among new users 
                  during initial release</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Participated in bi-monthly on-call rotation, troubleshooting critical payment system issues 
                  to ensure minimal service disruption</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Implemented automated testing frameworks using Selenium and Pytest for production-grade 
                  deployments</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>React</Badge>
                <Badge>Flask</Badge>
                <Badge>Stripe API</Badge>
                <Badge>GCP</Badge>
                <Badge>Jenkins</Badge>
                <Badge>Selenium</Badge>
              </div>
            </div>
          </Card>

          {/* Educative - Developer Advocate */}
          <Card className="p-8 shadow-card-custom border-l-4 border-accent">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">Developer Advocate & Curriculum Designer</h2>
                <p className="text-lg text-muted-foreground">Educative • 2020–2022</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                Led technical education initiatives and curriculum development, creating comprehensive deep learning 
                courses that have taught thousands of students globally.
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Led team of 5 developer advocates in technical education and platform development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Introduction to Deep Learning & Neural Networks</strong> - Pioneered platform's 
                  first comprehensive deep learning curriculum</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Become a Deep Learning Professional</strong> - Co-developed advanced course with 
                  AI expert Harsh Jain</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Additional Courses</strong>: PowerShell Guide to Python, Data Structures and 
                  Algorithms in Python, Software Design Patterns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Designed research-driven interactive assessments combining theoretical foundations with 
                  practical implementation</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>Technical Writing</Badge>
                <Badge>Curriculum Design</Badge>
                <Badge>Deep Learning</Badge>
                <Badge>Team Leadership</Badge>
              </div>
            </div>
          </Card>

          {/* LUMS */}
          <Card className="p-8 shadow-card-custom border-l-4 border-primary">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">Research Assistant & Teaching Fellow</h2>
                <p className="text-lg text-muted-foreground">Lahore University of Management Sciences • 2024–Present</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                Conducting research in advanced algorithms while mentoring 250+ undergraduate and graduate students 
                through comprehensive software development lifecycle.
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Instruct Advanced Algorithms course for 250 students, developing and delivering 
                  specialized tutorials</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Co-instruct Software Engineering for 220+ students with project-based assessment 
                  (55% of final evaluation)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Supervise 44 undergraduate research teams through complete software development lifecycle</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Design hands-on learning experiences combining theoretical foundations with practical 
                  implementation</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>Teaching</Badge>
                <Badge>Research</Badge>
                <Badge>Mentoring</Badge>
                <Badge>Curriculum Design</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
