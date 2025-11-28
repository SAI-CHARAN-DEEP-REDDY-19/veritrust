import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Globe, 
  Lock,
  Target,
  Heart,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileCheck
} from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Security First",
    description: "Every credential is cryptographically signed and tamper-proof, ensuring complete authenticity.",
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "Our platform works across borders, institutions, and industries with a unified standard.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Verify any credential in under 2 seconds, eliminating delays and manual processes.",
  },
  {
    icon: Heart,
    title: "User Privacy",
    description: "Your data is yours. Share only what you want, when you want, with whom you want.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Building Trust in the
              <span className="block text-accent mt-2">Digital Credential Ecosystem</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We're on a mission to eliminate credential fraud and create a world where 
              verifying education and skills is instant, secure, and universal.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  The Problem We Solve
                </h2>
                <div className="space-y-4">
                  {[
                    "Rampant certificate forgery affects millions",
                    "Manual verification takes days or weeks",
                    "Fragmented systems across institutions",
                    "No universal digital proof of authenticity",
                    "Trust deficit in digital documents",
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-destructive text-sm">✕</span>
                      </div>
                      <p className="text-muted-foreground">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Our Solution
                </h3>
                <div className="space-y-4">
                  {[
                    "Cryptographically signed, tamper-proof credentials",
                    "Instant verification in under 2 seconds",
                    "Unified platform for all institutions",
                    "QR code and ID-based verification",
                    "Global standard for digital credentials",
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <p className="text-foreground">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section - Simplified */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Journey
            </h2>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6">
                2025
              </div>
              <p className="text-lg text-muted-foreground">
                VeriTrust was born with a mission to eliminate credential fraud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "50M+", label: "Credentials Verified", icon: FileCheck },
              { value: "10K+", label: "Partner Institutions", icon: Building2 },
              { value: "180+", label: "Countries", icon: Globe },
              { value: "2M+", label: "Users Worldwide", icon: Users },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Target className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're a student, employer, or institution, VeriTrust is here to help you 
              build trust in the digital credential ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button variant="accent" size="lg">
                  Start Verifying
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/issue">
                <Button variant="outline" size="lg">
                  Issue Credentials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
