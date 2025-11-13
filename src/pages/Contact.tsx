import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Let's discuss research collaborations, opportunities, or interesting projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-elegant">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:niazahmad9620804@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    niazahmad9620804@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/niaz-ahmad-fn84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-secondary transition-colors"
                  >
                    linkedin.com/in/niaz-ahmad-fn84
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/niaza64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    github.com/niaza64
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-lg">
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-foreground/80">Tampere Hervanta, Finland</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant bg-gradient-hero">
            <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
            
            <div className="space-y-4">
              <p className="text-foreground/80">
                I'm particularly interested in discussing:
              </p>
              
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>PhD opportunities in Computer Vision and Multimodal Learning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Research collaborations in audio-visual synchronization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Deep learning optimization for resource-constrained environments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Applications of foundation models (SAM, CLIP) in novel domains</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Full-stack AI application development</span>
                </li>
              </ul>

              <div className="pt-4">
                <a href="mailto:niazahmad9620804@gmail.com">
                  <Button size="lg" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Send me an email
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 shadow-card-custom mt-8">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="https://educative.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <p className="font-semibold">Educative.io</p>
              <p className="text-sm text-muted-foreground">My Courses</p>
            </a>
            <a 
              href="https://github.com/niaza64" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-muted-foreground">Code Portfolio</p>
            </a>
            <a 
              href="https://linkedin.com/in/niaz-ahmad-fn84" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-muted-foreground">Professional Network</p>
            </a>
            <a 
              href="https://tampere.fi/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <p className="font-semibold">Tampere University</p>
              <p className="text-sm text-muted-foreground">Current Institution</p>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
