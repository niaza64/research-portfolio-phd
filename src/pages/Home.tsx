import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code, GraduationCap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Niaz Ahmad
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Deep Learning Researcher & Computer Vision Specialist
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Pursuing PhD in Computer Vision with focus on Multimodal Learning
            </p>
            <div className="flex gap-4 justify-center flex-wrap pt-6">
              <Link to="/research">
                <Button size="lg" className="gap-2">
                  View Research <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Research Excellence</h3>
              <p className="text-muted-foreground">
                Led development of state-of-the-art talking head synthesis system achieving 96.8% accuracy, with research paper in progress.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2 hover:border-secondary/50">
              <Code className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Industry Impact</h3>
              <p className="text-muted-foreground">
                Software engineer serving 2M+ users at Educative, implementing global payment systems and achieving 33% feature adoption.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent/50">
              <GraduationCap className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Education Leader</h3>
              <p className="text-muted-foreground">
                Created comprehensive deep learning courses on Educative.io, teaching thousands of students worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Current Focus</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              Currently enrolled at <span className="font-semibold text-foreground">Tampere University</span> pursuing master's studies in:
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              {["Machine Learning", "Deep Learning", "Computer Vision", "Advanced Deep Learning", "Recommender Systems", "Reinforcement Learning"].map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
            <p className="pt-6">
              Self-directed research on <span className="font-semibold text-primary">masked encoders with SAM for anomaly detection</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
