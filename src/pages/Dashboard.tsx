import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Shield, 
  Search,
  Plus,
  Download,
  Share2,
  Eye,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  QrCode
} from "lucide-react";
import { toast } from "sonner";

// Mock user credentials
const userCredentials = [
  {
    id: "VT-2024-ABC123",
    name: "Bachelor of Computer Science",
    type: "Academic Degree",
    issuer: "Stanford University",
    issuerLogo: "🏛️",
    issuedDate: "May 15, 2024",
    status: "active" as const,
  },
  {
    id: "VT-2024-DEF456",
    name: "AWS Solutions Architect",
    type: "Professional Certification",
    issuer: "Amazon Web Services",
    issuerLogo: "☁️",
    issuedDate: "March 10, 2024",
    expiryDate: "March 10, 2027",
    status: "active" as const,
  },
  {
    id: "VT-2024-GHI789",
    name: "Software Engineering Internship",
    type: "Internship Letter",
    issuer: "Google LLC",
    issuerLogo: "🔍",
    issuedDate: "August 30, 2024",
    status: "active" as const,
  },
  {
    id: "VT-2023-JKL012",
    name: "React Developer Certificate",
    type: "Course Certificate",
    issuer: "Meta",
    issuerLogo: "📱",
    issuedDate: "December 1, 2023",
    status: "active" as const,
  },
  {
    id: "VT-2023-MNO345",
    name: "Python Programming",
    type: "Skill Badge",
    issuer: "Coursera",
    issuerLogo: "📚",
    issuedDate: "October 15, 2023",
    status: "expired" as const,
  },
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredCredentials = userCredentials.filter((cred) => {
    const matchesSearch = 
      cred.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cred.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || cred.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleShare = (credId: string) => {
    navigator.clipboard.writeText(`https://veritrust.edu/verify/${credId}`);
    toast.success("Verification link copied to clipboard!");
  };

  const handleDownload = (credName: string) => {
    toast.success(`Downloading ${credName}...`);
  };

  const handleViewQR = (credId: string) => {
    toast.info(`QR Code for ${credId}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full text-sm mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Your Digital Wallet</span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  My Credentials
                </h1>
                <p className="text-primary-foreground/80">
                  Manage, share, and verify all your digital credentials in one place.
                </p>
              </div>
              <Link to="/issue">
                <Button variant="hero" size="lg">
                  <Plus className="w-5 h-5" />
                  Request Credential
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Credentials", value: userCredentials.length, icon: Award },
                { label: "Active", value: userCredentials.filter(c => c.status === "active").length, icon: CheckCircle2 },
                { label: "Expiring Soon", value: 1, icon: Clock },
                { label: "Verifications", value: "23", icon: Eye },
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search credentials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <div className="flex gap-2">
                {["all", "active", "expired"].map((type) => (
                  <Button
                    key={type}
                    variant={filterType === type ? "accent" : "outline"}
                    size="sm"
                    onClick={() => setFilterType(type)}
                    className="capitalize"
                  >
                    <Filter className="w-4 h-4" />
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="space-y-4">
              {filteredCredentials.map((credential) => (
                <div 
                  key={credential.id}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon & Basic Info */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-2xl shrink-0">
                        {credential.issuerLogo}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground truncate">{credential.name}</h3>
                          {credential.status === "active" ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium shrink-0">
                              <Clock className="w-3 h-3" />
                              Expired
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{credential.type}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {credential.issuer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {credential.issuedDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleViewQR(credential.id)}
                        title="View QR Code"
                      >
                        <QrCode className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleShare(credential.id)}
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDownload(credential.name)}
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Link to="/verify">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Credential ID: <span className="font-mono">{credential.id}</span>
                    </span>
                    <Button 
                      variant="link" 
                      size="sm" 
                      className="text-xs h-auto p-0"
                      onClick={() => {
                        navigator.clipboard.writeText(credential.id);
                        toast.success("Credential ID copied!");
                      }}
                    >
                      Copy ID
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCredentials.length === 0 && (
              <div className="text-center py-16">
                <Award className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">No credentials found</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {searchTerm 
                    ? "Try adjusting your search or filters" 
                    : "Start by requesting your first credential"}
                </p>
                <Link to="/issue">
                  <Button variant="accent">
                    <Plus className="w-4 h-4" />
                    Request Credential
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
