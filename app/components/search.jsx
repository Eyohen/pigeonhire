import Image from "next/image";
import SearchIcon from "./searchIcon";

export default function Search({text, setText}) {
    return (
        <div className="w-full max-w-[1079px] h-[58px] border border-[#E5E5E5] rounded-[48px] flex items-center px-4 mx-auto my-6 bg-white shadow-sm hover:border-gray-300 transition-colors">
            <SearchIcon fill="#8D8D8D" />
            <input
                type="text"
                placeholder="Search by name"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full ml-2 mr-2.5 border-none outline-none bg-transparent"
            />

            <Image className="mr-[17px] cursor-pointer hover:opacity-70" alt="" width={24} height={24} src={"/assets/icons/close.svg"} />

            <div className="w-px h-[42px] bg-[#E5E5E5] mr-[17px]"></div>

            <select name="" id="" className="text-[#8D8D8D] border-none outline-none bg-transparent cursor-pointer">
                <option value="">All</option>
            </select>
        </div>
    )
}
