import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Terminal, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Register = () => {
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    // Prevent duplicate submissions using LocalStorage
    if (localStorage.getItem(`submitted_${email}`)) {
      alert("⚠️ You have already submitted a request with this email.");
      return;
    }

    // Create an HTML table for the email content
    const tableHTML = `
      <h2>New Join Request - Tanzania Cyber Academy</h2>
      <table border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse; font-family:Arial; width:100%;">
        <tr><th align="left">First Name</th><td>${formData.get("firstName")}</td></tr>
        <tr><th align="left">Last Name</th><td>${formData.get("lastName")}</td></tr>
        <tr><th align="left">Email</th><td>${formData.get("email")}</td></tr>
        <tr><th align="left">Phone</th><td>${formData.get("phone")}</td></tr>
        <tr><th align="left">Role</th><td>${formData.get("role")}</td></tr>
      </table>
      <p>📬 Submitted via the official Tanzania Cyber Academy Join Request Form.</p>
    `;

    // Append the HTML content to the form
    const htmlInput = document.createElement("input");
    htmlInput.type = "hidden";
    htmlInput.name = "_html";
    htmlInput.value = tableHTML;
    form.appendChild(htmlInput);

    // Mark email as submitted
    localStorage.setItem(`submitted_${email}`, "true");

    // Submit form to FormSubmit
    form.submit();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between pt-28">
      <Navigation />

      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-orbitron font-bold text-matrix">
              REQUEST TO <span className="text-neon-cyan">JOIN</span>
            </h2>
            <p className="mt-2 text-muted-foreground font-mono text-sm">
              Fill in your details to request admission to the academy.
            </p>
          </div>

          {/* Request Form */}
          <div className="bg-background-secondary border border-primary/20 rounded-lg p-8 shadow-neon">
            <form
              action="https://formsubmit.co/cmdhackertz@gmail.com"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Hidden Fields for Email Handling */}
              <input type="hidden" name="_subject" value="New Academy Join Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_replyto" value="cmdhackertz@gmail.com" />
              <input type="hidden" name="_from" value="Tanzania Cyber Academy <noreply@tanzania-cyber.academy>" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for requesting to join the Tanzania Cyber Academy! We have received your submission and will contact you soon."
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="font-mono text-matrix">
                    FIRST_NAME
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Firsh_Name"
                    required
                    className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="font-mono text-matrix">
                    LAST_NAME
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last_Name"
                    required
                    className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="font-mono text-matrix">
                  EMAIL_ADDRESS
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-mono text-matrix">
                  PHONE_NUMBER
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+255 XXX XXX XXX"
                  required
                  className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="role" className="font-mono text-matrix">
                  ROLE
                </Label>
                <Select name="role" onValueChange={setRole} required>
                  <SelectTrigger className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-background-secondary border-primary/20">
                    <SelectItem value="student" className="font-mono">
                      Student
                    </SelectItem>
                    <SelectItem value="instructor" className="font-mono">
                      Instructor
                    </SelectItem>
                    <SelectItem value="researcher" className="font-mono">
                      Researcher
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  className="mt-1 rounded bg-background/50 border-primary/20"
                />
                <span className="font-mono text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link
                    to="..//components/Footer.tsx"
                    className="text-neon-cyan hover:text-matrix transition-colors"
                  >
                    Terms of Service
                  </Link>{""}
                  and{" "}
                  <Link
                    to="..//components/Footer.tsx"
                    className="text-neon-cyan hover:text-matrix transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-cyber text-black font-mono font-bold hover:shadow-cyber transition-all duration-300"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                SUBMIT YOUR INFORMATION
              </Button>
            </form><br /><hr />
            <p>Once you submit admin will contact and tell the procedures to join the team, so make sure you write correct contact</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
