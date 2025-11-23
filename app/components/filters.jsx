"use client"
import Image from "next/image";
import FiltersSidebar from "./filtersSidebar";
import { useState } from "react";

const FilterDropdown = ({ label, options, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('Filter clicked:', label, 'Current state:', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`title-14 border flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer transition-colors ${
          selected ? 'border-secondary bg-secondary/10 text-secondary' : 'text-[#8D8D8D] border-[#E5E5E5] hover:border-secondary'
        }`}
        onClick={handleClick}
      >
        {selected || label}
        {options && (
          <Image
            alt=""
            width={16}
            height={16}
            src={"/assets/icons/arrowDown.svg"}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </div>

      {isOpen && options && (
        <>
          <div
            className="absolute top-full mt-2 left-0 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-[300px] overflow-y-auto"
          >
            <div className="p-2">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer transition-colors"
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default function Filters({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: null,
      connectorType: null,
      platform: null,
      communityType: null
    });
  };

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

  const connectorTypes = [
    "Founder",
    "Co-founder",
    "CEO",
    "President",
    "Community Leader",
    "Community Manager",
    "Executive Director",
    "Editor",
    "Administrator"
  ];

  const platforms = [
    "Social Media Platforms",
    "Online Forums and Discussion Boards",
    "Community-Specific Platforms",
    "Blogging and Microblogging Platforms",
    "Professional Networking",
    "Content Sharing Platforms",
    "Voice Communication Tools",
    "Newsletters",
    "Associations"
  ];

  const communityTypes = [
    "Professional and Business-Oriented Communities",
    "Gaming Communities",
    "Health and Wellness Communities",
    "Academic and Research Communities",
    "Art and Craft Communities",
    "Geographic and Local Communities",
    "Online and Virtual Communities",
    "Social and Interest-Based Communities",
    "Volunteer and Activism Groups",
    "Special Interest and Unique Communities"
  ];

  return (
    <div className="w-full max-w-[1100px] overflow-x-auto mx-auto mb-4 hidden-scroll-bar">
      <div className="w-full flex items-center gap-3 mt-6">
        <div
          className="title-14 bg-[#F5F5F5] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(true)}
        >
          <Image
            alt=""
            width={16}
            height={16}
            src={"/assets/icons/controls.svg"}
          />
          All filters
        </div>


        <FilterDropdown
          label="Connector type"
          options={connectorTypes}
          selected={filters.connectorType}
          onSelect={(value) => handleFilterChange('connectorType', value)}
        />

        <FilterDropdown
          label="Connector platform"
          options={platforms}
          selected={filters.platform}
          onSelect={(value) => handleFilterChange('platform', value)}
        />

        <FilterDropdown
          label="Community type"
          options={communityTypes}
          selected={filters.communityType}
          onSelect={(value) => handleFilterChange('communityType', value)}
        />

        <div className="title-14 text-[#8D8D8D] border border-[#E5E5E5] flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer hover:border-secondary transition-colors">
          Community size
        </div>

        {(filters.category || filters.connectorType || filters.platform || filters.communityType) && (
          <button
            onClick={clearFilters}
            className="title-14 bg-secondary/10 text-secondary border border-secondary flex gap-2 px-3 py-2 rounded-2xl whitespace-nowrap cursor-pointer hover:bg-secondary hover:text-white transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      <FiltersSidebar open={open} setOpen={setOpen} />
    </div>
  );
}
