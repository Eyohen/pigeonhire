import CategoryInner from "@/app/components/categoryInner";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <div>
      <Link className="font-medium flex items-center gap-0.5 mb-[17px]" href="/" prefetch={true}>
        <Image
          src={"/assets/icons/backArrow.svg"}
          width={24}
          height={24}
          alt=""
        />
        Back
      </Link>

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
        <div>Content & Copywriting</div>
        <Image
          src={"/assets/icons/navigation.svg"}
          width={12}
          height={12}
          alt=""
        />
        <div>Connectors</div>
      </div>

      <CategoryInner />
    </div>
  );
}
