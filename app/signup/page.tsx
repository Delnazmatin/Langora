"use client";
import "./style.css";
import BigButton from "../components/bigButton/BigButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import signupLogo from "../assets/images/signupLogo.jpg";
import { useRouter } from "next/navigation";
import { signupSchema, SignupType } from "./schema";

export default function SignUp() {
  const router = useRouter();

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
    router.push("/chooseLanguage");
  }

  return (
    <div className="signupContainer">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Image src={signupLogo} alt="logo" width={50} height={50} />
        <h1>Sign Up</h1>
        <div className="inputContainer">
          <label className="signupLabel" htmlFor="email">
            Email
          </label>
          <input
            id="email"
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
          <label className="signupLabel" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            id="phoneNumber"
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
          <label className="signupLabel" htmlFor="password">
            Password
          </label>
          <input
            id="password"
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
          <label className="signupLabel" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
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
          <label className="signupLabel" htmlFor="age">
            Age
          </label>
          <input
            id="age"
            className="signupInput"
            type="number"
            placeholder="age"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className="warningMessage">{errors.age.message}</p>}
        </div>
        <div className="signupButtonContainer">
          <BigButton text="Sign up" type="submit" />
        </div>
      </form>
    </div>
  );
}
