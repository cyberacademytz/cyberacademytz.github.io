import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Terminal, Shield, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
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
            ACCESS <span className="text-neon-cyan">TERMINAL</span>
          </h2>
          <p className="mt-2 text-muted-foreground font-mono text-sm">
            Enter your credentials to access the cyber academy
          </p>
        </div>

        {/* Terminal-style login form */}
        <div className="bg-background-secondary border border-primary/20 rounded-lg p-8 shadow-neon">
          <div className="bg-background/50 rounded p-4 font-mono text-sm mb-6">
            <div className="text-matrix mb-2">
              <span className="text-neon-cyan">root@tanzania-cyber:~$</span> login
            </div>
            <div className="text-muted-foreground">
              Initializing secure connection...
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="font-mono text-matrix">
                EMAIL_ADDRESS
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="user@cybersec.academy"
                className="mt-1 bg-background/50 border-primary/20 text-matrix font-mono focus:border-primary"
              />
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

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded bg-background/50 border-primary/20" />
                <span className="font-mono text-sm text-muted-foreground">Remember session</span>
              </label>
              <Link to="/forgot-password" className="font-mono text-sm text-neon-cyan hover:text-matrix transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-gradient-cyber text-black font-mono font-bold hover:shadow-cyber transition-all duration-300">
              <Shield className="h-4 w-4 mr-2" />
              AUTHENTICATE
            </Button>

            <div className="text-center">
              <span className="font-mono text-sm text-muted-foreground">New to the academy? </span>
              <Link to="/register" className="font-mono text-sm text-neon-cyan hover:text-matrix transition-colors">
                Create Account
              </Link>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-primary/20">
            <div className="bg-background/50 rounded p-3 font-mono text-xs">
              <div className="text-neon-cyan mb-1">SECURITY_STATUS:</div>
              <div className="text-muted-foreground">
                • SSL/TLS encryption enabled<br/>
                • 2FA authentication ready<br/>
                • Session timeout: 30 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;