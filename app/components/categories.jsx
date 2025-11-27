import Link from "next/link";

export default function Categories() {
    const categories = [
        "Arts & Culture",
        "Social & Community",
        "Creative & Expressive",
        "Health & Wellness",
        "Technology & Science",
        "Lifestyles & Hobbies",
        "Business Technology",
        "Business & Finance",
        "Entertainment & Leisure",
        "Environment & Sustainability",
        "Special Interest",
        "Education & Learning"
    ];

    return (
        <div className="w-full py-4">
            <div className="font-medium mb-5 text-gray-900">Explore by categories</div>
            <div className="grid grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link
                        key={category}
                        href={`/user/category?category=${encodeURIComponent(category)}`}
                        className="w-full h-16 flex items-center justify-center bg-[#fafafa] font-medium text-md rounded-[15px] cursor-pointer hover:bg-secondary hover:text-white transition-all duration-200 border border-transparent hover:shadow-sm"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
}