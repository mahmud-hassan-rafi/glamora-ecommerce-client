import { errorNotify } from "@utils/notify/errorNotify";
import { Mail, Lock, User, EyeOff, Eye } from "lucide-react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCustomerRegisterMutation } from "../authAPI";
import { successNotify } from "@utils/notify/successNotify";

const initialRegisterData = {
  profile: {
    firstname: "",
    lastname: "hassan",
  },
  email: "",
  password: "",
  isCheckedTerms: false,
  role: "customer",
};

export default function Register() {
  const navigate = useNavigate();
  const [registerCustomer, { isLoading }] = useCustomerRegisterMutation();

  const [formData, setFormData] = useState(initialRegisterData);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnFormDataChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("profile.")) {
      setFormData((prev) => ({
        ...prev,
        profile: { ...prev.profile, [name.split(".")[1]]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOnTermsCheck = (e) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, isCheckedTerms: checked }));
  };

  const handleRegisterSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!formData.isCheckedTerms) {
        errorNotify("please checked the terms and conditions");
        return;
      }

      try {
        await registerCustomer(formData).unwrap();

        setFormData(initialRegisterData);
        navigate("/home");
        successNotify("register success");
      } catch (err) {
        errorNotify(err?.data?.message || err?.error || err?.message || err);
      }
    },
    [registerCustomer, formData, navigate],
  );

  return (
    <section className="py-10 flex min-h-screen w-full items-center justify-center bg-white px-4">
      <div className="w-full max-w-md border border-black/10 p-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-medium tracking-tight">
            Create account
          </h1>
          <p className="mt-2 text-sm text-black/60">
            Join us and start your beauty journey
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6" onSubmit={handleRegisterSubmit}>
          {/* Name */}
          <div>
            <label className="text-sm text-black/70">Full name</label>
            <div className="mt-2 flex items-center border border-black/10 px-4">
              <User size={18} className="text-black/50" />
              <input
                name="profile.firstname"
                value={formData.profile.firstname}
                required
                onChange={handleOnFormDataChange}
                type="text"
                placeholder="Your name"
                className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-black/70">Email</label>
            <div className="mt-2 flex items-center border border-black/10 px-4">
              <Mail size={18} className="text-black/50" />
              <input
                name="email"
                value={formData.email}
                required
                onChange={handleOnFormDataChange}
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
          {/* <div>
            <label className="text-sm text-black/70">Password</label>
            <div className="mt-2 flex items-center border border-black/10 px-4">
              <Lock size={18} className="text-black/50" />
              <input
                name="password"
                value={formData.password}
                required
                onChange={handleOnFormDataChange}
                type="password"
                placeholder="Create a strong password"
                className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              />
            </div>
          </div> */}

          <div>
            <label className="text-sm text-black/70">Password</label>
            <div className="relative mt-2 flex items-center border border-black/10 px-4 has-focus:ring-1 has-focus:ring-black/50">
              <Lock size={18} className="text-black/50" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                required
                onChange={handleOnFormDataChange}
                placeholder="Enter your password"
                className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              />
              {formData.password.length > 0 && (
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-black/50 "
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff size={16} className="cursor-pointer" />
                  ) : (
                    <Eye size={16} className="cursor-pointer" />
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2.5 text-sm text-black/60">
            <input
              id="terms"
              type="checkbox"
              required
              onChange={handleOnTermsCheck}
              className="mt-1 accent-black"
            />
            <label htmlFor="terms" className="select-none">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center border border-black text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-black/60">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-black underline underline-offset-2"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
