import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import RegisterForm from "@/components/auth/RegisterForm";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function Login() {
  return (
    <div className="h-[93vh] flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4 w-screen">
      <div className="w-full max-w-md space-y-8 p-8 rounded-xl shadow-lg sm:max-w-[425px] md:max-w-screen-md md:mx-auto backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Log in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>
        <RegisterForm/>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
          </span>
          <Link 
            to="/login" 
            className="text-sm font-medium text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary transition-colors"
          >
            Login now
          </Link>
        </div>
      </div>
    </div>
  );
}
