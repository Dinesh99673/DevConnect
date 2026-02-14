import { useState, useEffect } from "react"
import { Particles } from "@/components/ui/particles.jsx"
import { CodeXml } from "lucide-react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { SiGithub, SiGoogle, SiX } from "react-icons/si"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {useAuth} from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const {isLoggedIn} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn){
      navigate("/")
    }
    console.log("User is not loggedIn");
    
  })

  return (
    <Particles className="bg-linear-to-br from-[#0B1020] via-[#0F172A] to-[#020617]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 md:w-1/4 flex flex-col items-center justify-center">
          <p className="mb-5 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <CodeXml className="size-6 text-blue-500 sm:size-7 md:size-8 lg:size-9 shrink-0" />
            DevConnect
          </p>
          <div className="w-full max-w-md rounded-2xl border border-border bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-black/20">
            {/* Card content */}
            <div className="space-y-1 text-center mb-6">
              <h1 className="text-2xl font-semibold text-foreground">Welcome back</h1>
              <p className="text-sm text-muted-foreground">Sign in to your account</p>
            </div>
            <div className="space-y-2 mb-2">
              <Label htmlFor="email" className="text-muted-foreground">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="pl-10 bg-input/50 border-border"
                />
              </div>
            </div>
            <div className="space-y-2 mb-2">
              <Label htmlFor="password" className="text-muted-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10 bg-input/50 border-border"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
            <div className="flex justify-end mb-2">
              <Link
                to="/forgot-password"
                className="text-sm text-violet-500 hover:text-violet-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              className=" mb-2 w-full bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white"
              size="lg"
            >
              Sign In
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-violet-500 hover:text-violet-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">or sign in with</span>
              </div>
            </div>
            <div className="flex justify-center gap-3 w-full">
              <Button variant="outline" size="icon" className="w-[70%] h-full p-1 flex flex-col md:flex-row">
                <SiGoogle color="#4285F4" size={20} /> 
                Sign in with google
              </Button>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © 2025 DevConnect • Terms • Privacy
          </p>
        </div>
      </div>
     </Particles>
  )
}

export default Login
