"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changeUserPassword } from "../../../apis/userProfile";

const getCookie = (name) => {
    if (typeof window === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
        return decodeURIComponent(parts.pop().split(";").shift());
    return null;
};

// Helper function to mask email for security display
const maskEmail = (email) => {
    if (!email) return "";
    const [localPart, domain] = email.split('@');
    if (!localPart || !domain) return email;
    
    // Show first 2 characters, then asterisks, then last 2 characters before @
    const visibleStart = localPart.slice(0, Math.min(2, localPart.length));
    const visibleEnd = localPart.length > 4 ? localPart.slice(-2) : '';
    const asterisks = '*'.repeat(Math.max(6, localPart.length - 4));
    
    return `${visibleStart}${asterisks}${visibleEnd}@${domain}`;
};

export default function SettingsPassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    // Get user info and token from Redux store
    const { userInfo, token: reduxToken } = useSelector((state) => state.auth);

    // Get token from multiple sources
    const getToken = () => {
        return (
            reduxToken ||
            getCookie("auth_token") ||
            (typeof window !== "undefined"
                ? localStorage.getItem("auth_token")
                : null)
        );
    };

    // Get userId and userEmail from userInfo
    const userId = userInfo?.user?.id || userInfo?.id;
    const userEmail = userInfo?.user?.email || userInfo?.email;
    const token = getToken();

    const handleClickShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePasswordChange = async () => {
        // Validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("New passwords do not match");
            return;
        }

        if (newPassword.length < 6) {
            setError("New password must be at least 6 characters long");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const passwordData = {
                currentPassword,
                newPassword,
                confirmPassword: newPassword,
            };

            const response = await changeUserPassword(
                userId,
                passwordData,
                token
            );

            if (response.status === 200) {
                setSuccess("Password changed successfully!");
                // Reset form
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
                // Exit editing mode after a delay
                setTimeout(() => {
                    setIsEditing(false);
                    setSuccess("");
                }, 2000);
            }
        } catch (error) {
            console.error("Password change error:", error);
            setError(
                error.response?.data?.message || "Failed to change password"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
        setSuccess("");
        setIsEditing(false);
    };

    return (
        <div className='border border-[#E5E5E5] rounded-3xl p-6'>
            <div className='flex items-center justify-between mb-4'>
                <div>Password and Security</div>
                {!isEditing && (
                    <div className='cursor-pointer' onClick={() => setIsEditing(true)}>
                        <Image
                            alt='Edit'
                            width={50}
                            height={18}
                            src={"/assets/icons/edit.svg"}
                        />
                    </div>
                )}
            </div>

            {/* Display messages */}
            {error && (
                <div className="text-red-600 mb-2.5 p-2.5 bg-[#ffe6e6] rounded">
                    {error}
                </div>
            )}
            {success && (
                <div className="text-green-600 mb-2.5 p-2.5 bg-[#e6ffe6] rounded">
                    {success}
                </div>
            )}

            {/* Security Notice */}
            <div className='text-sm leading-[140%] font-medium flex items-center gap-1 mb-4'>
                <Image
                    alt=''
                    width={16}
                    height={16}
                    src={"/assets/icons/info.svg"}
                />
                <div>
                    To protect your account, please complete this verification.
                </div>
            </div>

            {/* Email Display */}
            <div className='text-sm leading-[140%] grid grid-cols-[60px_auto] gap-2 mb-4'>
                <div className="text-[#8D8D8D]">Email:</div>
                <div className="font-medium">{maskEmail(userEmail)}</div>
            </div>

            {!isEditing ? (
                // Display mode - show masked password
                <div className='grid grid-cols-[90px_auto] items-center gap-[38px]'>
                    <label htmlFor='' className='text-sm leading-[140%] text-[#8D8D8D] whitespace-nowrap mb-0'>Password:</label>
                    <OutlinedInput
                        className='w-full text-base h-[42px]'
                        id='display-password'
                        name='display-password'
                        type='password'
                        value='••••••••••••'
                        disabled
                    />
                </div>
            ) : (
                // Edit mode - show password change form
                <>
                    <div className='grid grid-cols-[90px_auto] items-center gap-[38px]'>
                        <label htmlFor='' className='text-sm leading-[140%] text-[#8D8D8D] whitespace-nowrap mb-0'>Current password:</label>
                        <OutlinedInput
                            className='w-full text-base h-[42px]'
                            required
                            id='current-password'
                            name='current-password'
                            type={showCurrentPassword ? "text" : "password"}
                            placeholder='Enter current password'
                            value={currentPassword}
                            onChange={(e) => {
                                setCurrentPassword(e.target.value);
                            }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowCurrentPassword}
                                        edge='end'
                                    >
                                        {showCurrentPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <br />

                    <div className='grid grid-cols-[90px_auto] items-center gap-[38px]'>
                        <label htmlFor='' className='text-sm leading-[140%] text-[#8D8D8D] whitespace-nowrap mb-0'>New password:</label>
                        <OutlinedInput
                            className='w-full text-base h-[42px]'
                            required
                            id='new-password'
                            name='new-password'
                            type={showNewPassword ? "text" : "password"}
                            placeholder='Enter new password'
                            value={newPassword}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                            }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle new password visibility'
                                        onClick={handleClickShowNewPassword}
                                        edge='end'
                                    >
                                        {showNewPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <br />

                    <div className='grid grid-cols-[90px_auto] items-center gap-[38px]'>
                        <label htmlFor='' className='text-sm leading-[140%] text-[#8D8D8D] whitespace-nowrap mb-0'>Confirm password:</label>
                        <OutlinedInput
                            className='w-full text-base h-[42px]'
                            required
                            id='confirm-password'
                            name='confirm-password'
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder='Confirm new password'
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle confirm password visibility'
                                        onClick={handleClickShowConfirmPassword}
                                        edge='end'
                                    >
                                        {showConfirmPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <br />
                    <br />

                    <div className='flex gap-2 items-center justify-end phone:flex-col'>
                        <button className='w-[180px] h-[42px] font-semibold border border-[#E5E5E5] rounded bg-transparent text-[#8D8D8D] cursor-pointer phone:w-full' onClick={handleCancel} disabled={loading}>
                            Cancel
                        </button>
                        <button
                            className='w-[180px] h-[42px] font-semibold bg-[#F6911F] border-none rounded text-white cursor-pointer phone:w-full'
                            onClick={handlePasswordChange}
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save changes"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}