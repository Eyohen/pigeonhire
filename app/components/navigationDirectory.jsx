import Image from "next/image";
import Link from "next/link";

export default function NavigationDirectory({ links }) {
  return (
    <div className="text-sm flex items-center gap-1 mb-6">
      {links.slice(0, links?.length - 1)?.map((item) => (
        <>
          <Link href={item?.link || "#"}>{item?.name}</Link>
          <Image
            src={"/assets/icons/navigation.svg"}
            width={12}
            height={12}
            alt=""
          />
        </>
      ))}
      {links?. length > 1 && <Link href={links[links?.length - 1]?.link || "#"}>{links[links?.length - 1]?.name}</Link>}
    </div>
  );
}
