import Link from "next/link";

export default function Categories() {
    return (
        <div className="w-full">
            <div className="font-medium mb-4">Explore by categories</div>
            <div className="grid grid-cols-4 gap-4">
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Arts & Culture</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Social & Community</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Creative & Expressive</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Health & Wellness</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Technology & Science</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Lifestyles & Hobbies</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Business Technology</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Business & Finance</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Entertainment & Leisure</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Environment & Sustainability</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Special Interest</Link>
                <Link href={"/user/category"} className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white">Education & Learning</Link>
            </div>
        </div>
    )
}