import ConnectorDetails from "@/app/components/connectorDetails";
import NavigationDirectory from "@/app/components/navigationDirectory";
import Image from "next/image";
import Link from "next/link";


export default function Connector() {

  return (
    <div>
      <Link className="font-medium flex items-center gap-0.5 mb-[17px]" href="/user" prefetch={true}>
        <Image
          src={"/assets/icons/backArrow.svg"}
          width={24}
          height={24}
          alt=""
        />
        Back
      </Link>

      <NavigationDirectory
        links={[
          {
            name: "Home",
            link: "/user",
          },
          {
            name: "Latest connector",
          },
        ]}
      />

      <ConnectorDetails />
    </div>
  );
}
