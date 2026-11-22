import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCustomerLoginMutation } from "../authAPI";
import { errorNotify } from "@utils/notify/errorNotify";
import { successNotify } from "@utils/notify/successNotify";

const initialStateOfFormData = {
  email: "",
  password: "",
  role: "customer",
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [customerLogin, { isLoading, error }] = useCustomerLoginMutation();
  console.log(error);
  const [formData, setFormData] = useState(initialStateOfFormData);

  const [showPassword, setShowPassword] = useState(false);

  const handleOnFormDataChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleOnLogin = useCallback(
    async (e) => {
      console.log("on the login");
      e.preventDefault();
      try {
        console.log("before the login mutation");
        const res = await customerLogin(formData).unwrap();
        console.log("after the login mutation");
        console.log(res);
        setFormData(initialStateOfFormData);
        successNotify("success");
        navigate("/home");
      } catch (err) {
        errorNotify(err?.data?.message || err?.error || err?.message || err);
        return;
      }
    },
    [customerLogin, formData, navigate],
  );

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-8 md:px-12 xl:px-20">
      <div className="w-full max-w-md border border-black/10 p-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-medium tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-black/60">
            Login to continue your shopping experience
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6" onSubmit={handleOnLogin}>
          {/* Email */}
          <div>
            <label className="text-sm text-black/70">Email</label>
            <div className=" mt-2 flex items-center border border-black/10 px-4 has-focus:ring-1 has-focus:ring-black/50">
              <Mail size={18} className="text-black/50" />
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleOnFormDataChange}
                placeholder="you@example.com"
                className="h-12 w-full bg-transparent px-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-black/60 select-none">
              <input type="checkbox" className="accent-black " />
              Remember me
            </label>

            <a href="#" className="text-black underline underline-offset-2">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center border border-black text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            {isLoading ? "Loading..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-black/60">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-black underline underline-offset-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
