import Image from "next/image";
import ConnectorCard from "./connectorCard";

export default function SearchResults() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-8 mt-9">
        <Image
          alt=""
          width={120}
          height={120}
          src={"/assets/icons/notFound.svg"}
        //   onClick={() => setOpen(false)}
          className="pointer mb-7"
        />

        <div className="title-18 font-medium mb-4">Not Found</div>
        <div className="text-[#8D8D8D]">
          Sorry, we couldn't find any results matching your search criteria.
        </div>
      </div>

      <div>
      <div className="font-medium mb-4">
      You may like
        </div>
        <ConnectorCard
          type="connector"
        verified={true}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />

 <ConnectorCard
          type="community"
            verified={false}
            title={"Startup & Entrepreneurship Hub"}
            subtitle={
              "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
            }
            members={"500"}
          />
        <ConnectorCard
          type="connector"
        verified={true}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />

 <ConnectorCard
          type="community"
            verified={false}
            title={"Startup & Entrepreneurship Hub"}
            subtitle={
              "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
            }
            members={"500"}
          />
        <ConnectorCard
          type="connector"
        verified={true}
        title={"Fola Agoro"}
        subtitle={"Senior buyer at Coca-Cola"}
      />

 <ConnectorCard
          type="community"
            verified={false}
            title={"Startup & Entrepreneurship Hub"}
            subtitle={
              "Connect with investors, founders & startup enthusiasts. Get funding insights & networking opportunities."
            }
            members={"500"}
          />

      </div>
    </div>
  );
}
