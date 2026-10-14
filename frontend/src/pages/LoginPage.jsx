import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-6 sm:p-8">
      {/* Form card */}
      <div className="w-full max-w-sm bg-base-100 border border-base-300 rounded-2xl shadow-soft p-6 sm:p-8 space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-2xl bg-primary text-primary-content shadow-soft-sm flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight mt-2">Welcome Back</h1>
              <p className="text-sm text-base-content/55">Sign in to your real-time conversations</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="label px-0.5">
                <span className="text-[13px] font-medium text-base-content/70">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className="input w-full h-11 pl-10"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="label px-0.5">
                <span className="text-[13px] font-medium text-base-content/70">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full h-11 pl-10"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-base-content/70"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full h-11 text-[15px] shadow-glow" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="font-medium text-primary hover:underline underline-offset-4">
                Create account
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;