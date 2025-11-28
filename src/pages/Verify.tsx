import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  QrCode, 
  CheckCircle2, 
  XCircle, 
  Shield, 
  FileText,
  Building2,
  Calendar,
  Award,
  Upload
} from "lucide-react";
import { toast } from "sonner";

// Mock credential data for demonstration
const mockCredentials: Record<string, {
  status: "verified" | "invalid";
  name: string;
  type: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  recipientName: string;
  credentialId: string;
}> = {
  "VT-2024-ABC123": {
    status: "verified",
    name: "Bachelor of Computer Science",
    type: "Academic Degree",
    issuer: "Stanford University",
    issuedDate: "May 15, 2024",
    recipientName: "John Anderson",
    credentialId: "VT-2024-ABC123",
  },
  "VT-2024-DEF456": {
    status: "verified",
    name: "AWS Solutions Architect",
    type: "Professional Certification",
    issuer: "Amazon Web Services",
    issuedDate: "March 10, 2024",
    expiryDate: "March 10, 2027",
    recipientName: "Sarah Mitchell",
    credentialId: "VT-2024-DEF456",
  },
  "VT-2024-GHI789": {
    status: "verified",
    name: "Software Engineering Internship",
    type: "Internship Letter",
    issuer: "Google LLC",
    issuedDate: "August 30, 2024",
    recipientName: "Michael Chen",
    credentialId: "VT-2024-GHI789",
  },
};

const Verify = () => {
  const [credentialId, setCredentialId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<typeof mockCredentials[string] | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleVerify = async () => {
    if (!credentialId.trim()) {
      toast.error("Please enter a credential ID");
      return;
    }

    setIsSearching(true);
    setSearchPerformed(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const credential = mockCredentials[credentialId.toUpperCase()];
    setResult(credential || { status: "invalid" } as any);
    setIsSearching(false);

    if (credential) {
      toast.success("Credential verified successfully!");
    } else {
      toast.error("Credential not found or invalid");
    }
  };

  const handleScanQR = () => {
    toast.info("QR Scanner would open here. For demo, try: VT-2024-ABC123");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Instant Verification</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Verify Credentials
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Enter a credential ID or scan a QR code to instantly verify authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter Credential ID (e.g., VT-2024-ABC123)"
                    value={credentialId}
                    onChange={(e) => setCredentialId(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                    className="pl-12 h-14 text-base"
                  />
                </div>
                <Button 
                  onClick={handleVerify} 
                  disabled={isSearching}
                  variant="accent"
                  size="lg"
                  className="h-14"
                >
                  {isSearching ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Verify
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-4 justify-center">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">or</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button 
                  variant="outline" 
                  className="flex-1 h-12"
                  onClick={handleScanQR}
                >
                  <QrCode className="w-5 h-5" />
                  Scan QR Code
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 h-12"
                  onClick={() => toast.info("File upload would open here")}
                >
                  <Upload className="w-5 h-5" />
                  Upload Certificate
                </Button>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Demo Credentials to Try:</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.keys(mockCredentials).map((id) => (
                  <button
                    key={id}
                    onClick={() => setCredentialId(id)}
                    className="text-xs bg-background px-3 py-1.5 rounded-lg border border-border hover:border-accent transition-colors font-mono"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searchPerformed && !isSearching && (
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {result?.status === "verified" ? (
                <div className="bg-card rounded-2xl shadow-xl border border-success/30 overflow-hidden animate-scale-in">
                  <div className="bg-success/10 border-b border-success/20 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center animate-pulse-glow">
                        <CheckCircle2 className="w-8 h-8 text-success" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Credential Verified</h3>
                        <p className="text-sm text-muted-foreground">This credential is authentic and valid</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                          <Award className="w-3 h-3" />
                          Credential Name
                        </div>
                        <p className="font-semibold text-foreground">{result.name}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                          <FileText className="w-3 h-3" />
                          Type
                        </div>
                        <p className="font-semibold text-foreground">{result.type}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                          <Building2 className="w-3 h-3" />
                          Issuing Organization
                        </div>
                        <p className="font-semibold text-foreground">{result.issuer}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                          <Calendar className="w-3 h-3" />
                          Issue Date
                        </div>
                        <p className="font-semibold text-foreground">{result.issuedDate}</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Recipient</p>
                          <p className="font-semibold text-foreground">{result.recipientName}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Credential ID</p>
                          <p className="font-mono text-sm text-foreground">{result.credentialId}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-card rounded-2xl shadow-xl border border-destructive/30 overflow-hidden animate-scale-in">
                  <div className="bg-destructive/10 border-b border-destructive/20 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center">
                        <XCircle className="w-8 h-8 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Verification Failed</h3>
                        <p className="text-sm text-muted-foreground">This credential could not be verified</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-muted rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        The credential ID "{credentialId}" was not found in our system. This could mean:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          The credential ID is incorrect or has typos
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          The credential was not issued through VeriTrust
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          The credential may have been revoked
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          The credential may be fraudulent
                        </li>
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => {
                        setCredentialId("");
                        setSearchPerformed(false);
                        setResult(null);
                      }}
                    >
                      Try Another Credential
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Verify;
