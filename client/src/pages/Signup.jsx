import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Key, User, Github, Globe, ArrowLeft } from "lucide-react";
import { Snackbar, Alert, Button } from "@mui/material";


export default function Signup() {
  const [showAlert, setShowAlert] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    github: "",
    portfolio: "",
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password" || name === "confirmPassword") {
      setPasswordMismatch(
        name === "password"
          ? value !== formData.confirmPassword
          : value !== formData.password
      );
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = () => {
    setStep(2);
    setShowAlert(true);
  };

  const handleVerifyOtp = () => {
    setStep(3);
  };

  const handleCreateAccount = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);
    console.log("Account created", formData);
  };

  const steps = ["Email", "OTP", "Details"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute w-[30rem] h-[30rem] bg-cyan-500 opacity-30 rounded-full blur-3xl -z-10 animate-pulse top-[-10rem] left-[-10rem]"></div>

      <div className="w-full max-w-md backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-white">
          Create your DevConnect Account
        </h2>

        <div className="flex justify-center space-x-2">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index + 1 === step ? "bg-cyan-400 scale-125" : "bg-slate-600"
              }`}
            ></div>
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 transition text-white py-2 rounded-xl font-semibold shadow-lg"
            >
              Send OTP
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex justify-between space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  className="w-12 text-center py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm text-cyan-400 hover:underline"
              >
                <ArrowLeft size={16} /> Go Back
              </button>
              <button
                onClick={handleVerifyOtp}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 transition text-white py-2 px-4 rounded-xl font-semibold shadow-lg"
              >
                Verify OTP
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <Key className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <Key className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {passwordMismatch && (
              <p className="text-red-400 text-sm font-medium">Passwords do not match</p>
            )}
            <div className="relative">
              <Github className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="text"
                name="github"
                placeholder="GitHub URL (optional)"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white"
                value={formData.github}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <Globe className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="text"
                name="portfolio"
                placeholder="Portfolio URL (optional)"
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#334155] bg-[#0f172a] text-white"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={handleCreateAccount}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition text-white py-2 rounded-xl font-semibold shadow-lg"
            >
              Create Account
            </button>
          </motion.div>
        )}

        <div className="text-center text-sm text-slate-400">
          Already have an account? <a href="/login" className="text-cyan-400 hover:underline">Login</a>
        </div>

      </div>
      {/*Popup alert (still a sample needs more configurations) */}
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={()=>setShowAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={()=>setShowAlert(false )} severity="error" variant="filled" sx={{ width: "100%" }}>
          Something is wromg!
        </Alert>
      </Snackbar>
    </div>
  );
}
