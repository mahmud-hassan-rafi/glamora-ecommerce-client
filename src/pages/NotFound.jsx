import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-200 px-4">
      <div className="text-center max-w-xl">
        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-gray-800"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-600"
        >
          Oops! The page you are looking for does not exist.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer underline"
          >
            Go Home
          </button>
          <button
            variant="outline"
            onClick={() => navigate(-1)}
            className="text-blue-600 cursor-pointer"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
