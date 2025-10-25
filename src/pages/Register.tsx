import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Terminal, UserPlus, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Terminal className="h-12 w-12 text-matrix animate-pulse-neon" />
            <div className="font-orbitron">
              <div className="text-2xl font-bold text-matrix">TANZANIA</div>
              <div className="text-sm text-neon-cyan">CYBER ACADEMY</div>
            </div>
          </div>
          <h2 className="text-3xl font-orbitron font-bold text-matrix">
            JOIN THE <span className="text-neon-cyan">ACADEMY</span>
          </h2>
          <p className="mt-2 text-muted-foreground font-mono text-sm">
            Create your account to start your cybersecurity journey
          </p>
        </div>

        {/* Registration form */}
        <div className="bg-background-secondary border border-primary/20 rounded-lg p-8 shadow-neon">
          <div className="bg-background/50 rounded p-4 font-mono text-sm mb-6">
            <div className="text-matrix mb-2">
              <span className="text-neon-cyan">root@tanzania-cyber:~$</span> create_user
            </div>
            <div className="text-muted-foreground">
              Initializing user registration protocol...
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="font-mono text-matrix">
                  FIRST_NAME
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="font-mono text-matrix">
                  LAST_NAME
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
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
                type="email"
                placeholder="john.doe@email.com"
                className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="font-mono text-matrix">
                PHONE_NUMBER
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+255 XXX XXX XXX"
                className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="role" className="font-mono text-matrix">
                USER_ROLE
              </Label>
              <Select>
                <SelectTrigger className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-background-secondary border-primary/20">
                  <SelectItem value="student" className="font-mono">Student</SelectItem>
                  <SelectItem value="instructor" className="font-mono">Instructor</SelectItem>
                  <SelectItem value="researcher" className="font-mono">Researcher</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="password" className="font-mono text-matrix">
                PASSWORD_HASH
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  className="bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-matrix"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="font-mono text-matrix">
                CONFIRM_PASSWORD
              </Label>
              <div className="relative mt-1">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  className="bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-matrix"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1 rounded bg-background/50 border-primary/20" />
              <span className="font-mono text-sm text-muted-foreground">
                I agree to the{" "}
                <Link to="/terms" className="text-neon-cyan hover:text-matrix transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-neon-cyan hover:text-matrix transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button className="w-full bg-gradient-cyber text-black font-mono font-bold hover:shadow-cyber transition-all duration-300">
              <UserPlus className="h-4 w-4 mr-2" />
              CREATE_ACCOUNT
            </Button>

            <div className="text-center">
              <span className="font-mono text-sm text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="font-mono text-sm text-neon-cyan hover:text-matrix transition-colors">
                Login Here
              </Link>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-primary/20">
            <div className="bg-background/50 rounded p-3 font-mono text-xs">
              <div className="text-neon-cyan mb-1">SECURITY_FEATURES:</div>
              <div className="text-muted-foreground">
                • Password encryption with bcrypt<br/>
                • Email verification required<br/>
                • 2FA setup after registration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;