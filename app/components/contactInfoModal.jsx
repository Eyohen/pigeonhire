import Image from "next/image";

export default function ContactInfoModal({open, setOpen, community}) {
  return (
    open &&
    <div className="w-full h-screen fixed top-0 left-0 bg-black/40 flex justify-center items-center z-50">
      <div className="w-full max-w-[520px] min-h-[153px] bg-white rounded-lg pb-[39px]">
        <div className="pt-[25px] pb-[17px] border-b border-[#E5E5E5] px-6 flex items-center justify-between mb-6">
          <div>Contact Information</div>

          <Image
            alt=""
            width={24}
            height={24}
            src={"/assets/icons/close.svg"}
            onClick={() => setOpen(false)}
            className="pointer"
          />
        </div>

        <div className="grid grid-cols-2 justify-between items-center px-6 gap-y-6 [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:text-right">
          {community?.email && (
            <>
              <div>Email</div>
              <div className="break-all">{community.email}</div>
            </>
          )}
          {community?.phone && (
            <>
              <div>Phone number</div>
              <div>{community.phone}</div>
            </>
          )}
          {community?.website && (
            <>
              <div>Website:</div>
              <a
                href={community.website.startsWith('http') ? community.website : `https://${community.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {community.website}
              </a>
            </>
          )}
          {community?.whatsapp && (
            <>
              <div>WhatsApp:</div>
              <div>{community.whatsapp}</div>
            </>
          )}
          {community?.telegram && (
            <>
              <div>Telegram:</div>
              <div>{community.telegram}</div>
            </>
          )}
          {community?.twitter && (
            <>
              <div>Twitter/X:</div>
              <a
                href={community.twitter.startsWith('http') ? community.twitter : `https://twitter.com/${community.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {community.twitter}
              </a>
            </>
          )}
          {community?.linkedin && (
            <>
              <div>LinkedIn:</div>
              <a
                href={community.linkedin.startsWith('http') ? community.linkedin : `https://linkedin.com/in/${community.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {community.linkedin}
              </a>
            </>
          )}
          {!community?.email && !community?.phone && !community?.website && !community?.whatsapp && !community?.telegram && !community?.twitter && !community?.linkedin && (
            <div className="col-span-2 text-center text-gray-500 py-4">
              No contact information available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
