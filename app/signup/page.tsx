"use client";
import "@/app/signup/style.css";
import BigButton from "@/app/components/bigButton/BigButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import signupLogo from "@/app/assets/images/signupLogo.jpg";
import Link from "next/link";

export default function SignUp() {
  const signupSchema = z
    .object({
      email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
      phoneNumber: z
        .string()
        .min(1, "phone number is required")
        .regex(/^(?:\+98|98|0)?9\d{9}$/, "Phone number is invalid"),
      password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: z
        .string()
        .min(1, "Confirm password is required")
        .min(8, "Confirm Password must be at least 8 characters"),
      age: z.number({ message: "age is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "password do not match",
      path: ["confirmPassword"],
    });

  type SignupType = z.infer<typeof signupSchema>;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupType>({
    mode: "onSubmit",
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data: SignupType) {
    console.log(data);
    reset();
  }

  return (
    <div className="signupContainer">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Image src={signupLogo} alt="logo" width={50} height={50} />
        <h1>Sign Up</h1>
        <div className="inputContainer">
          <label className="signupLabel">Email</label>
          <input
            className="signupInput"
            type="email"
            placeholder="you@mail.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="warningMessage">{errors.email.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label className="signupLabel">Phone number </label>
          <input
            className="signupInput"
            type="tel"
            placeholder="09123456789"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="warningMessage">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label className="signupLabel">Password</label>
          <input
            className="signupInput"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="warningMessage">{errors.password.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label className="signupLabel">Confirm Password</label>
          <input
            className="signupInput"
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="warningMessage">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="inputContainer">
          <label className="signupLabel">Age</label>
          <input
            className="signupInput"
            type="number"
            placeholder="age"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className="warningMessage">{errors.age.message}</p>}
        </div>
        <Link href="/chooseLanguage">
          <div className="signupButtonContainer">
            <BigButton text="Sign up" />
          </div>
        </Link>
      </form>
    </div>
  );
}
