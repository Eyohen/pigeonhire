"use client";
import CategoryInner from "@/app/components/categoryInner";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CategoryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All Categories";

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="font-medium flex items-center gap-0.5 mb-[17px] cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0"
      >
        <Image
          src={"/assets/icons/backArrow.svg"}
          width={24}
          height={24}
          alt=""
        />
        Back
      </button>

      <div className="text-sm flex items-center gap-1 mb-6">
        <div>Home</div>
        <Image
          src={"/assets/icons/navigation.svg"}
          width={12}
          height={12}
          alt=""
        />
        <div>Categories</div>
        <Image
          src={"/assets/icons/navigation.svg"}
          width={12}
          height={12}
          alt=""
        />
        <div className="font-medium text-primary">{category}</div>
      </div>

      <CategoryInner />
    </div>
  );
}

export default function Category() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent />
    </Suspense>
  );
}
