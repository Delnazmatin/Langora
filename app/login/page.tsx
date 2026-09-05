"use client";

import "./style.css";
import BigButton from "../components/bigButton/BigButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import loginLogo from "../assets/images/loginLogo.jpeg";
import { LoginType, signinSchema } from "./schema";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
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

    router.push("/dashboard");
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Image src={loginLogo} alt="logo" width={50} height={50} />
        <h1>Login to your account</h1>
        <div className="inputContainer">
          <label className="loginLabel" htmlFor="email">
            Email
          </label>
          <input
            id="email"
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
          <label className="loginLabel" htmlFor="password">
            Password
          </label>
          <input
            id="password"
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
          <BigButton text="Login" type="submit" />
        </div>
      </form>
    </div>
  );
}
