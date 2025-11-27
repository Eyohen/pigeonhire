"use client";
import { useForm } from "react-hook-form";
import { loginUser } from "../apis/auth";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function LoginForm(params) {
    const [loading, setLoading] = useState(false);
    const [passwordOpen, setPasswordOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const setSecureCookie = (name, value, days = 7) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        const secure = process.env.NODE_ENV === 'production' ? 'Secure; SameSite=Strict' : '';
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; ${secure}`;
    };

    const onSubmit = async (data) => {
        setLoading(true);
    
        try {
            const response = await loginUser(data);
            const { accessToken, user } = response.data;

            // Store token in localStorage
            localStorage.setItem("token", accessToken);
            
            // Set secure cookies with user info
            setSecureCookie("auth_token", accessToken);
            setSecureCookie("user_id", user.id);
            setSecureCookie("user_email", user.email);
            setSecureCookie("user_name", user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim());

            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: {
                    token: accessToken,
                    userInfo: user
                },
            });
            
            router.push("/user");
            toast.success("Login successful!");
        } catch (error) {
            console.error("Login error:", error);
            toast.error(error?.response?.data?.msg || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="max-w-[396px] mx-auto mt-6 text-xl" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email address</label>
            <div className="primary-input mb-10">
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
            <div className="primary-input mb-8">
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

            <div className="w-full flex justify-between items-center text-xl mb-[33px] -mt-4">
                <div className="flex gap-3 items-center">
                    <input type="checkbox" name="" id="" disabled={loading} className="w-6 h-6" />
                    Remember me
                </div>
                <div className="text-[#da1e28]">
                    <Link href={"/forgot-password"}>Forgot password?</Link>
                </div>
            </div>

            <button className="primary-button mb-6" disabled={loading}>
                {loading ? "Loading..." : "Login"}
            </button>

            <div className="text-xl text-center mb-[33px] text-[#8d8d8d]">
                Don't have an account! <Link href="/register" className="text-primary underline">Sign Up</Link>
            </div>

            <div className="w-full h-px bg-[#e5e5e5] mb-[53px]"></div>
            <div className="text-xl text-center text-[#8d8d8d] bg-white w-fit mx-auto -mt-[63px] mb-6 px-[15px]">or login with</div>

            <button className="w-full max-w-[599px] flex justify-center h-16 bg-transparent border border-[#e5e5e5] mb-12 rounded-[32px]" type="button" disabled={loading}>
                <Image
                    alt=""
                    width={88}
                    height={24}
                    src={"/assets/icons/google.svg"}
                />
            </button>
        </form>
    );
}