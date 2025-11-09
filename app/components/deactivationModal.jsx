"use client"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function DeactivationModal({open, setOpen}) {
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
      const [stage, setStage] = useState(1);

      const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
  return (
    open &&
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/[0.33]">
      {stage === 1 && <div className="w-full max-w-[467px] h-fit rounded-2xl px-[47px] py-8 flex flex-col items-center justify-center bg-white">
        <Image
          alt=""
          width={80}
          height={80}
          src={"/assets/icons/error.svg"}
          className="mb-4"
        />

        <div className="text-2xl font-semibold mb-4">Confirm Deactivation?</div>
        <div className="text-[#8D8D8D] mb-4 text-center">
        To confirm, enter your password
        </div>
        <label htmlFor="" className="w-full">Enter Password</label>
        <OutlinedInput
          className="primary-input"
          required
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />

        <div className="w-full flex gap-2 items-center mt-8">
            <button onClick={() => setStage(2)} className="w-full h-[42px] font-semibold border border-[#E5E5E5] rounded text-[#8D8D8D] bg-transparent">Cancel</button>
            <button onClick={() => setStage(2)} className="w-full h-[42px] font-semibold bg-[#F6911F] border-none rounded text-white">Deactivate</button>
        </div>
      </div>}
      {stage === 2 && <div className="w-full max-w-[467px] h-fit rounded-2xl px-[47px] py-8 flex flex-col items-center justify-center bg-white">
        <Image
          alt=""
          width={80}
          height={80}
          src={"/assets/icons/error.svg"}
          className="mb-4"
        />

        <div className="text-2xl font-semibold mb-4">Deactivate account?</div>
        <div className="text-[#8D8D8D] mb-4 text-center">
        This is a permanent action. All data would be lost. Are you sure you want to continue?
        </div>


        <div className="w-full flex gap-2 items-center mt-8">
            <button onClick={() => setOpen(false)} className="w-full h-[42px] font-semibold border border-[#DA1E28] rounded text-[#DA1E28] bg-transparent">Yes</button>
            <button onClick={() => setOpen(false)} className="w-full h-[42px] font-semibold bg-[#42BE65] border-none rounded text-white">No</button>
        </div>
      </div>}
    </div>
  );
}
