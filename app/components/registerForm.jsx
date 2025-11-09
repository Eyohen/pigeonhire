"use client"
import { useForm } from "react-hook-form";
import { registerUser } from "../apis/auth";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function RegisterForm(params) {
  const dispatch = useDispatch();
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [passwordOpen, setPasswordOpen] = useState(false)

    const onSubmit = async (data) => {
        console.log("helloooo!");
        
        // setError("");
        setLoading(true);
    
        try {
          
          const response = await registerUser(data);

          console.log("registerUser", response);
          // localStorage.setItem("token", response?.data?.record?.verificationToken);
          // document.cookie = `auth_token=${
          //   response?.data?.record?.verificationToken
          // }; path=/; max-age=${60 * 60 * 24 * 7};`;
          // dispatch({
          //   type: "USER_LOGIN_SUCCESS",
          //   payload: {
          //     token: response?.data?.record?.verificationToken,
          //     userInfo: response?.data?.record
          //   },
          // });
          
          toast.success("Registration successful. Please check your email to verify your account.");
          router.push("/login");
    
          // toast.success("App created");
          // setOpen(false);
          // reloadFunction();
          // reset();
          // setAbiFileName("");
          // setBytecodeFileName("");
          setLoading(false);
        } catch (error) {
          toast.error(error?.response?.data?.msg);
          console.log("Error creating app:", error);
          setLoading(false);
        }
      };

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
        setValue,
        watch,
      } = useForm();
    return (
        <form className="max-w-[599px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First name</label>
          <div className="primary-input mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="e.g John Doe"
              required
              {...register("firstName")}
              disabled={loading}
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/user.svg"}
            />
          </div>

          <label htmlFor="lastName">Last name</label>
          <div className="primary-input mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="e.g John Doe"
              required
              {...register("lastName")}
              disabled={loading}
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/user.svg"}
            />
          </div>

          <label htmlFor="email">Email address</label>
          <div className="primary-input mb-4">
            <input
              type="email"
              name="email"
              placeholder="e.g John Doe"
              required
              {...register("email")}
              disabled={loading}
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={"/assets/icons/email.svg"}
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="primary-input mb-4">
            <input
              type={passwordOpen ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              {...register("password")}
              disabled={loading}
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={passwordOpen ? "/assets/icons/closedEye.svg" : "/assets/icons/openedEye.svg"}
              onClick={() => setPasswordOpen(!passwordOpen)}
              className="pointer"
            />
          </div>

          {/* <div className="text-xs text-[#da1e28] -mt-2 mb-4">
            <div className="font-medium">Must have:</div>
            <div>Include one uppercase letter.</div>
            <div>Include at least one number.</div>
            <div>At least 8 characters long.</div>
          </div> */}

          <label htmlFor="password">Confirm password</label>
          <div className="primary-input mb-4">
            <input
              type={passwordOpen ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={passwordOpen ? "/assets/icons/closedEye.svg" : "/assets/icons/openedEye.svg"}
              onClick={() => setPasswordOpen(!passwordOpen)}
              className="pointer"
            />
          </div>

          <div className="flex items-center gap-3 mb-[25px]">
            <input required type="checkbox" name="" id="" disabled={loading} className="w-6 h-6" />
            <div>
              I agree to the <span className="text-primary">Terms & Data policy</span>
            </div>
          </div>

          <button className="primary-button mb-6" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <div className="title-14 text-center mb-[33px] text-[#8d8d8d]">
            Don't have an account! <Link href="/login" className="text-primary underline">Login</Link>
          </div>

          <div className="w-full h-px bg-[#e5e5e5] mb-[33px]"></div>
          <div className="title-14 text-center text-[#8d8d8d] bg-white w-fit mx-auto -mt-[43px] mb-6 px-[15px]">or Sign Up with</div>

          <button className="w-full max-w-[599px] h-16 bg-transparent border border-[#e5e5e5] mb-12 rounded-[32px]" type="button" disabled={loading}>
            <Image
              alt=""
              width={88}
              height={24}
              src={"/assets/icons/google.svg"}
            />
          </button>
        </form>
    )
}