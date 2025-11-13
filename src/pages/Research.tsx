import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Research & Projects
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Advancing computer vision and multimodal learning through innovative deep learning approaches
        </p>

        <div className="space-y-12">
          {/* Main Research Project */}
          <Card className="p-8 shadow-elegant border-2 border-primary/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Talking Head Synthesis System
                </h2>
                <p className="text-muted-foreground">Aletheia AI • 2024-2025</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">
                Research Paper in Progress
              </Badge>
            </div>

            <p className="text-lg mb-6 text-foreground/90">
              Led development of a sophisticated audio-driven facial animation system achieving state-of-the-art 
              performance in photorealistic talking head generation, optimized for CPU-level deployment.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Project Overview</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Developed an end-to-end system transforming static portrait images into realistic animated videos 
                  synchronized with input audio. The system achieves both high-quality output and computational 
                  efficiency suitable for consumer-grade CPUs, making it accessible for virtual assistants, 
                  educational technology, and accessibility tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Technical Innovation</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Built upon the LivePortrait framework using a sophisticated descriptor system encoding facial 
                  configurations through rotation matrices (3×3), translation vectors (1×3), expression matrices 
                  (1×21×3), and additional parameters for lip and eye closure. The mathematical relationship:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                  Pose = T(kp, R, t, exp) ≡ kp·R + t + exp
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Architecture Evolution</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/50 pl-4">
                    <h4 className="font-semibold mb-2">Phase 1: Hierarchical Clustering with BiLSTM</h4>
                    <p className="text-foreground/80">
                      Initial approach using 10,000 facial configurations from RAVDESS dataset (3,678 videos, 
                      22 actors). Achieved 96.8% accuracy at top-level clusters but only 40.13% at leaf level, 
                      revealing fundamental limitations in fine-grained expression prediction.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary/50 pl-4">
                    <h4 className="font-semibold mb-2">Phase 2: Transformer Exploration</h4>
                    <p className="text-foreground/80">
                      Investigated transformer architectures for improved long-range dependency modeling. 
                      Despite theoretical advantages, found 3-4x slower inference on target CPUs with no 
                      meaningful accuracy improvement, clarifying that data size, not model capacity, was 
                      the bottleneck.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent/50 pl-4">
                    <h4 className="font-semibold mb-2">Phase 3: Phoneme-Viseme Mapping (Breakthrough)</h4>
                    <p className="text-foreground/80">
                      Paradigm shift grounding the system in linguistic principles. Implemented 22×22×22 viseme 
                      triplet library (10,648 configurations) capturing coarticulation effects. Achieved 
                      near-perfect accuracy with deterministic mapping, eliminating neural network inference 
                      during runtime.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Key Results</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">96.8%</div>
                    <div className="text-sm text-foreground/70">Expression Accuracy</div>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">30 FPS</div>
                    <div className="text-sm text-foreground/70">CPU Performance</div>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent mb-1">Real-time</div>
                    <div className="text-sm text-foreground/70">Inference Speed</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "BiLSTM", "Transformers", "Computer Vision", "Wav2Vec", "LivePortrait", "Video-Retalking", "Hierarchical Clustering", "K-means", "Autoencoders"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Current Research */}
          <Card className="p-8 shadow-card-custom">
            <h2 className="text-3xl font-bold mb-4">Current Self-Directed Research</h2>
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Masked Encoders with SAM for Anomaly Detection
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Exploring novel applications of Segment Anything Model (SAM) combined with masked autoencoder 
              architectures for anomaly detection tasks. Investigating how foundation models' learned 
              representations can be leveraged for identifying outliers and abnormalities in visual data 
              across various domains.
            </p>
          </Card>

          {/* Past Projects */}
          <Card className="p-8 shadow-card-custom">
            <h2 className="text-3xl font-bold mb-6">Past Projects</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary/50 pl-4">
                <h3 className="text-xl font-semibold mb-2">
                  Agricultural Computer Vision System
                </h3>
                <p className="text-muted-foreground mb-2">
                  Bachelor's Final Year Project • 2020
                </p>
                <p className="text-foreground/80">
                  Designed and implemented fully convolutional neural network for crop weed detection in 
                  agricultural images. Developed in MATLAB, achieving high precision in distinguishing 
                  between crops and weeds for automated agricultural applications.
                </p>
                <div className="flex gap-2 mt-3">
                  <Badge variant="outline">MATLAB</Badge>
                  <Badge variant="outline">CNNs</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Publications */}
          <Card className="p-8 shadow-card-custom bg-accent/5 border-accent/20">
            <h2 className="text-3xl font-bold mb-4">Publications & Reports</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg">
                  "Lightweight Facial Animation Synthesis: Bidirectional LSTM Approach for CPU-Level Inference"
                </h3>
                <p className="text-muted-foreground">2024 • Initial Draft in Progress</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">
                  "Agricultural Computer Vision System"
                </h3>
                <p className="text-muted-foreground">Technical Report • 2020</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Research;
