"use client";

import { useState } from "react";

export default function SettingsNotifications() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div className="border border-[#E5E5E5] rounded-3xl p-6 mb-8">
        <div className="font-medium mb-2.5">
          Push Notifications
        </div>

        <label htmlFor="">Pause all</label>

        <div className="text-sm leading-[140%] text-[#8D8D8D] w-full h-[46px] flex items-center justify-between border border-[#E5E5E5] rounded-lg p-[14px_24px] mb-4">
          Pause all notifications
          <div
            className={`w-7 h-fit rounded-[25px] cursor-pointer p-0.5 flex items-center border transition-all ${
              on ? "border-[#F6911F]" : "border-[#494747]"
            }`}
            onClick={() => setOn(!on)}
          >
            <div className={`w-3 h-3 rounded-full transition-all shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] ${
              on ? "translate-x-[95%] bg-[#F6911F]" : "bg-[#494747]"
            }`}></div>
          </div>
        </div>
        <label htmlFor="">Pause all</label>

        <div className="text-sm leading-[140%] text-[#8D8D8D] w-full h-[46px] flex items-center justify-between border border-[#E5E5E5] rounded-lg p-[14px_24px] mb-4">
          Pause all notifications
          <div
            className={`w-7 h-fit rounded-[25px] cursor-pointer p-0.5 flex items-center border transition-all ${
              on ? "border-[#F6911F]" : "border-[#494747]"
            }`}
            onClick={() => setOn(!on)}
          >
            <div className={`w-3 h-3 rounded-full transition-all shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] ${
              on ? "translate-x-[95%] bg-[#F6911F]" : "bg-[#494747]"
            }`}></div>
          </div>
        </div>
        <label htmlFor="">Pause all</label>

        <div className="text-sm leading-[140%] text-[#8D8D8D] w-full h-[46px] flex items-center justify-between border border-[#E5E5E5] rounded-lg p-[14px_24px] mb-4">
          Pause all notifications
          <div
            className={`w-7 h-fit rounded-[25px] cursor-pointer p-0.5 flex items-center border transition-all ${
              on ? "border-[#F6911F]" : "border-[#494747]"
            }`}
            onClick={() => setOn(!on)}
          >
            <div className={`w-3 h-3 rounded-full transition-all shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] ${
              on ? "translate-x-[95%] bg-[#F6911F]" : "bg-[#494747]"
            }`}></div>
          </div>
        </div>
        <label htmlFor="">Pause all</label>

        <div className="text-sm leading-[140%] text-[#8D8D8D] w-full h-[46px] flex items-center justify-between border border-[#E5E5E5] rounded-lg p-[14px_24px] mb-4">
          Pause all notifications
          <div
            className={`w-7 h-fit rounded-[25px] cursor-pointer p-0.5 flex items-center border transition-all ${
              on ? "border-[#F6911F]" : "border-[#494747]"
            }`}
            onClick={() => setOn(!on)}
          >
            <div className={`w-3 h-3 rounded-full transition-all shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] ${
              on ? "translate-x-[95%] bg-[#F6911F]" : "bg-[#494747]"
            }`}></div>
          </div>
        </div>
        <label htmlFor="">Pause all</label>

        <div className="text-sm leading-[140%] text-[#8D8D8D] w-full h-[46px] flex items-center justify-between border border-[#E5E5E5] rounded-lg p-[14px_24px] mb-8 last:mb-8">
          Pause all notifications
          <div
            className={`w-7 h-fit rounded-[25px] cursor-pointer p-0.5 flex items-center border transition-all ${
              on ? "border-[#F6911F]" : "border-[#494747]"
            }`}
            onClick={() => setOn(!on)}
          >
            <div className={`w-3 h-3 rounded-full transition-all shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] ${
              on ? "translate-x-[95%] bg-[#F6911F]" : "bg-[#494747]"
            }`}></div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-end phone:flex-col">
        <button className="w-[180px] h-[42px] font-semibold border border-[#E5E5E5] rounded bg-transparent text-[#8D8D8D] cursor-pointer phone:w-full" onClick={() => setStage(1)}>Cancel</button>
        <button className="w-[180px] h-[42px] font-semibold bg-[#F6911F] border-none rounded text-white cursor-pointer phone:w-full" onClick={() => setStage(1)}>Save changes</button>
      </div>
    </div>
  );
}
