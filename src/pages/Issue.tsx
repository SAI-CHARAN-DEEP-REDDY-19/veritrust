import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  FileText, 
  User, 
  Calendar,
  Mail,
  Award,
  CheckCircle2,
  ArrowRight,
  Shield
} from "lucide-react";
import { toast } from "sonner";

const credentialTypes = [
  { id: "degree", label: "Academic Degree", icon: Award },
  { id: "certificate", label: "Course Certificate", icon: FileText },
  { id: "internship", label: "Internship Letter", icon: Building2 },
  { id: "skill", label: "Skill Badge", icon: CheckCircle2 },
];

const Issue = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    credentialType: "",
    recipientName: "",
    recipientEmail: "",
    credentialName: "",
    issueDate: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [issuedCredential, setIssuedCredential] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeSelect = (typeId: string) => {
    setFormData({ ...formData, credentialType: typeId });
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.recipientName || !formData.recipientEmail || !formData.credentialName) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const credentialId = `VT-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    setIssuedCredential(credentialId);
    setStep(3);
    setIsSubmitting(false);
    toast.success("Credential issued successfully!");
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      credentialType: "",
      recipientName: "",
      recipientEmail: "",
      credentialName: "",
      issueDate: "",
      description: "",
    });
    setIssuedCredential(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>For Institutions</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Issue Digital Credentials
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Create tamper-proof, verifiable digital credentials for your students and employees.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: "Select Type" },
                { num: 2, label: "Enter Details" },
                { num: 3, label: "Complete" },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                        step >= s.num 
                          ? "bg-accent text-accent-foreground" 
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                    </div>
                    <span className={`ml-3 text-sm font-medium hidden sm:block ${
                      step >= s.num ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {s.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className={`w-16 sm:w-24 h-0.5 mx-4 ${
                      step > s.num ? "bg-accent" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Select Type */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                  What type of credential are you issuing?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {credentialTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleTypeSelect(type.id)}
                      className="bg-card rounded-2xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-200 text-left group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <type.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{type.label}</h3>
                      <p className="text-sm text-muted-foreground">
                        Issue a verified {type.label.toLowerCase()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Enter Details */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Credential Details
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          Recipient Name *
                        </label>
                        <Input
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          Recipient Email *
                        </label>
                        <Input
                          name="recipientEmail"
                          type="email"
                          value={formData.recipientEmail}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Award className="w-4 h-4 text-muted-foreground" />
                        Credential Name *
                      </label>
                      <Input
                        name="credentialName"
                        value={formData.credentialName}
                        onChange={handleInputChange}
                        placeholder="Bachelor of Computer Science"
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        Issue Date
                      </label>
                      <Input
                        name="issueDate"
                        type="date"
                        value={formData.issueDate}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        Description (Optional)
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Additional details about the credential..."
                        rows={3}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        variant="accent"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                            Issuing...
                          </>
                        ) : (
                          <>
                            Issue Credential
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && issuedCredential && (
              <div className="animate-scale-in">
                <div className="bg-card rounded-2xl shadow-xl border border-success/30 overflow-hidden">
                  <div className="bg-success/10 p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      Credential Issued Successfully!
                    </h2>
                    <p className="text-muted-foreground">
                      The credential has been created and will be sent to the recipient.
                    </p>
                  </div>
                  
                  <div className="p-8">
                    <div className="bg-muted rounded-xl p-6 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Credential ID</p>
                          <p className="font-mono font-semibold text-foreground">{issuedCredential}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Recipient</p>
                          <p className="font-semibold text-foreground">{formData.recipientName}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Credential</p>
                          <p className="font-semibold text-foreground">{formData.credentialName}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Status</p>
                          <span className="inline-flex items-center gap-1 text-success font-semibold">
                            <CheckCircle2 className="w-4 h-4" />
                            Active
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={resetForm} className="flex-1">
                        Issue Another
                      </Button>
                      <Button variant="accent" className="flex-1">
                        View Dashboard
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Issue;
