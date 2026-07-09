"use client";

import "@/app/login/style.css";
import BigButton from "@/app/components/bigButton/BigButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import loginLogo from "@/app/assets/images/loginLogo.jpg";
import Link from "next/link";

export default function Login() {
  const signinSchema = z.object({
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  type LoginType = z.infer<typeof signinSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginType>({
    resolver: zodResolver(signinSchema),
    mode: "onSubmit",
  });

  function onSubmit(data: LoginType) {
    console.log(data);
    reset();
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Image src={loginLogo} alt="logo" width={50} height={50} />
        <h1>Login to your account</h1>
        <div className="inputContainer">
          <label className="loginLabel">Email</label>
          <input
            type="email"
            placeholder="you@mail.com"
            className="loginInput"
            {...register("email")}
          />
          {errors.email && (
            <p className="warningMessage">{errors.email.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label className="loginLabel">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
            {...register("password")}
          />
          {errors.password && (
            <p className="warningMessage">{errors.password.message}</p>
          )}
        </div>

        <div className="loginButtonContainer">
          <Link href='/dashboard'>
            <BigButton text="Log In" />
          </Link>
        </div>
      </form>
    </div>
  );
}
