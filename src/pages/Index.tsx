import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle2, 
  QrCode, 
  Building2, 
  GraduationCap, 
  Briefcase,
  Lock,
  Zap,
  Globe,
  ArrowRight,
  Users,
  FileCheck,
  Clock
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Instant QR Verification",
    description: "Verify any credential in seconds with our QR code scanning technology. No waiting, no phone calls.",
  },
  {
    icon: Lock,
    title: "Tamper-Proof Security",
    description: "Cryptographically signed credentials that cannot be forged, edited, or duplicated.",
  },
  {
    icon: Globe,
    title: "Universal Standard",
    description: "Works across institutions worldwide with a unified digital credential format.",
  },
  {
    icon: Zap,
    title: "Real-Time Verification",
    description: "Instant verification during interviews, admissions, or any hiring process.",
  },
];

const stats = [
  { value: "50M+", label: "Credentials Verified" },
  { value: "10K+", label: "Institutions" },
  { value: "99.9%", label: "Uptime" },
  { value: "<2s", label: "Verification Time" },
];

const howItWorks = [
  {
    step: "01",
    title: "Institution Issues Credential",
    description: "Universities, companies, and certification bodies issue digital credentials through our secure platform.",
    icon: Building2,
  },
  {
    step: "02",
    title: "Student Receives & Stores",
    description: "Recipients get their verified credentials in a secure digital wallet, accessible anytime.",
    icon: GraduationCap,
  },
  {
    step: "03",
    title: "Employer Verifies Instantly",
    description: "Recruiters scan the QR code or enter the credential ID to verify authenticity in seconds.",
    icon: Briefcase,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full text-sm mb-8 animate-fade-in-up">
              <Shield className="w-4 h-4" />
              <span>Trusted by 10,000+ institutions worldwide</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-200">
              Universal Digital Credential
              <span className="block text-accent mt-2">Verification Platform</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Eliminate credential fraud. Verify academic certificates, internship letters, 
              and skill certifications instantly with our secure, unified platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link to="/verify">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Verify a Credential
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/issue">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto text-primary-foreground">
                  Issue Credentials
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.8333C96 41.6667 192 33.3333 288 35.4167C384 37.5 480 50 576 54.1667C672 58.3333 768 54.1667 864 45.8333C960 37.5 1056 25 1152 22.9167C1248 20.8333 1344 29.1667 1392 33.3333L1440 37.5V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(210, 20%, 98%)"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose VeriTrust?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform solves the biggest challenges in credential verification with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process that transforms credential verification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-accent/20 mb-4">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Everyone
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a student, employer, or institution, VeriTrust has you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">For Students & Professionals</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Store all credentials in one secure wallet
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Share verified credentials with one click
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Never worry about lost documents again
                </li>
              </ul>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full mt-6">
                  Access Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md">
              <Briefcase className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">For Employers & Recruiters</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Verify credentials in under 2 seconds
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Reduce hiring cycle time by 80%
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Eliminate credential fraud completely
                </li>
              </ul>
              <Link to="/verify">
                <Button variant="outline" className="w-full mt-6">
                  Start Verifying
                </Button>
              </Link>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md">
              <Building2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">For Institutions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Issue tamper-proof digital credentials
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Reduce administrative overhead by 90%
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                  Protect your institution's reputation
                </li>
              </ul>
              <Link to="/issue">
                <Button variant="outline" className="w-full mt-6">
                  Issue Credentials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FileCheck className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Credential Verification?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join thousands of institutions already using VeriTrust to issue and verify credentials securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button variant="hero" size="lg">
                  Verify Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="heroOutline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
