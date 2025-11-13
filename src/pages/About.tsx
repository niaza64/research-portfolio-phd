import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="space-y-8">
          <Card className="p-8 shadow-card-custom">
            <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Full-Stack Engineer with expertise spanning deep learning model development and scalable web application 
              architecture. I combine strong technical foundations in machine learning, neural networks, and computer 
              vision with proven experience building production systems using React, Flask, and cloud platforms.
            </p>
          </Card>

          <Card className="p-8 shadow-card-custom">
            <h2 className="text-3xl font-bold mb-6">Research Interests</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Computer Vision</h3>
                <p className="text-foreground/80">
                  Focused on multimodal learning approaches, particularly in facial animation synthesis and 
                  audio-visual synchronization. Current self-directed research explores masked encoders with 
                  SAM (Segment Anything Model) for anomaly detection applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Deep Learning Architecture</h3>
                <p className="text-foreground/80">
                  Specializing in efficient neural network design for resource-constrained environments, 
                  including bidirectional LSTMs, transformers, and autoencoder-based systems optimized for 
                  CPU-level inference.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">Multimodal Learning</h3>
                <p className="text-foreground/80">
                  Exploring the intersection of audio, visual, and linguistic modalities. Seeking to pursue 
                  PhD research in this domain with applications to human-computer interaction and realistic 
                  avatar generation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card-custom">
            <h2 className="text-3xl font-bold mb-6">Core Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">AI/ML Expertise</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• PyTorch, TensorFlow, Transformers (3+ years)</li>
                  <li>• Computer Vision & NLP</li>
                  <li>• CNNs, RNNs, Attention Mechanisms</li>
                  <li>• Model Optimization & Deployment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Full-Stack Development</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• React, JavaScript, TypeScript (2+ years)</li>
                  <li>• Flask, RESTful APIs</li>
                  <li>• Cloud Platforms (AWS, GCP)</li>
                  <li>• Docker, Jenkins, CI/CD</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card-custom">
            <h2 className="text-3xl font-bold mb-4">Beyond Research</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm passionate about education and knowledge sharing. I've created multiple comprehensive deep learning 
              courses on Educative.io, teaching thousands of students globally. As a Teaching Fellow at Lahore University 
              of Management Sciences, I mentor 250+ students in advanced algorithms and software engineering, combining 
              theoretical rigor with practical implementation.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
