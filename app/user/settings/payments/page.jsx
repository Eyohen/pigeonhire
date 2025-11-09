import Image from "next/image";

export default function Payments(params) {
 return (
    <div>
        <div className="border border-[#E5E5E5] p-6 rounded-3xl mb-8">
            <div className="font-medium mb-4">
            Payment Details
            </div>
            <div className="text-sm leading-[140%] text-[#8D8D8D] mb-4">
            We charge you NGN45,480.00 yearly. Your next billing date is on September 12, 2025. Click the download icon to download a payment receipt.
            </div>
            <div className="flex items-center justify-between mb-[26px]">
                <div className="text-2xl font-semibold text-[#F6911F]">NGN45,480.00 </div>
                 <Image
                        alt=""
                        width={67}
                        height={24}
                        src={"/assets/icons/premier.svg"}
                      />
                </div>

                <div className="w-full bg-[#E5E5E5] h-px mb-3"></div>
                <div className="text-sm leading-[140%] w-full font-semibold text-[#8D8D8D] text-right underline">Cancel subscription</div>
        </div>

        <div>
        <div className="text-lg font-medium mb-3">
        Payment history
            </div>
            <table className="manage-network-table__label">
          <thead className="bg-[#FFF]">
            <tr className="">
              <th className="border-t border-[#E5E5E5] bg-transparent text-[#8D8D8D]">AMOUNT</th>
              <th className="border-t border-[#E5E5E5] bg-transparent text-[#8D8D8D]">PAYMENT STATUS</th>
              <th className="border-t border-[#E5E5E5] bg-transparent text-[#8D8D8D]">DUE DATE</th>
              <th className="border-t border-[#E5E5E5] bg-transparent text-[#8D8D8D]"></th>
            </tr>
          </thead>
          <tbody className="text-base">
           

            <tr>
              <td>NGN240,000.00</td>
              <td>
              <Image
                  src={"/assets/icons/paymentSuccessful.svg"}
                  width={188}
                  height={28}
                  alt=""
                />
              </td>
              <td>Jan 02, 2025 AM</td>
              <td>
              <Image
                  src={"/assets/icons/download.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>NGN240,000.00</td>
              <td>
              <Image
                  src={"/assets/icons/paymentSuccessful.svg"}
                  width={188}
                  height={28}
                  alt=""
                />
              </td>
              <td>Jan 02, 2025 AM</td>
              <td>
              <Image
                  src={"/assets/icons/download.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>NGN240,000.00</td>
              <td>
              <Image
                  src={"/assets/icons/paymentSuccessful.svg"}
                  width={188}
                  height={28}
                  alt=""
                />
              </td>
              <td>Jan 02, 2025 AM</td>
              <td>
              <Image
                  src={"/assets/icons/download.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>NGN240,000.00</td>
              <td>
              <Image
                  src={"/assets/icons/paymentSuccessful.svg"}
                  width={188}
                  height={28}
                  alt=""
                />
              </td>
              <td>Jan 02, 2025 AM</td>
              <td>
              <Image
                  src={"/assets/icons/download.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>NGN240,000.00</td>
              <td>
              <Image
                  src={"/assets/icons/paymentSuccessful.svg"}
                  width={188}
                  height={28}
                  alt=""
                />
              </td>
              <td>Jan 02, 2025 AM</td>
              <td>
              <Image
                  src={"/assets/icons/download.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>NGN240,000.00</td>
              <td>
              <Image
                  src={"/assets/icons/paymentSuccessful.svg"}
                  width={188}
                  height={28}
                  alt=""
                />
              </td>
              <td>Jan 02, 2025 AM</td>
              <td>
              <Image
                  src={"/assets/icons/download.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </td>
            </tr>

          
          </tbody>
        </table>

        </div>
    </div>
 )   
}