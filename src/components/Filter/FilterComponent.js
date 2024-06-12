import React, { useState } from "react";
import DateSection from "../Filter/DateSection";
import PeopleSection from "../Filter/PeopleSection";
import ServiceProductSection from "../Filter/ServiceProductSection";

const FilterComponent = () => {
  const [activeSection, setActiveSection] = useState("Scheduled Date");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [applyCount, setApplyCount] = useState(0);

  const resetFilters = () => {
    setDateRange({ from: "", to: "" });
    setSelectedPeople([]);
    setSelectedServices([]);
    setSearchTerm("");
    setApplyCount(0);
  };

  const handleSectionChange = (section) => {
    // Clear search term when switching sections
    setSearchTerm("");
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Scheduled Date":
        return (
          <DateSection dateRange={dateRange} setDateRange={setDateRange} />
        );
      case "People":
        return (
          <PeopleSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedItems={selectedPeople}
            setSelectedItems={setSelectedPeople}
          />
        );
      case "Services / Products":
        return (
          <ServiceProductSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchBy={searchBy}
            setSearchBy={setSearchBy}
            selectedItems={selectedServices}
            setSelectedItems={setSelectedServices}
          />
        );
      default:
        return null;
    }
  };

  const shouldDisableApplyButton = activeSection !== "Scheduled Date";

  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl mx-auto mt-10 flex">
      <div className="w-1/4">
        <div className="flex flex-col space-y-4">
          <button
            className={`p-2 text-left ${
              activeSection === "Scheduled Date"
                ? "bg-gray-300 text-black"
                : "bg-gray-100"
            }`}
            onClick={() => handleSectionChange("Scheduled Date")}
          >
            Scheduled Date {applyCount > 0 && `(${applyCount})`}
          </button>
          <button
            className={`p-2 text-left ${
              activeSection === "People"
                ? "bg-gray-300 text-black"
                : "bg-gray-100"
            }`}
            onClick={() => handleSectionChange("People")}
          >
            People
          </button>
          <button
            className={`p-2 text-left ${
              activeSection === "Services / Products"
                ? "bg-gray-300 text-black"
                : "bg-gray-100"
            }`}
            onClick={() => handleSectionChange("Services / Products")}
          >
            Services / Products
          </button>
        </div>
      </div>
      <div className="w-3/4 p-4">
        {renderContent()}
        <div className="flex justify-end space-x-4 mt-4">
          <button className="bg-gray-200 p-2 rounded-md" onClick={resetFilters}>
            Reset to Default
          </button>
          <button
            className={`bg-gray-300 p-2 rounded-md ${
              shouldDisableApplyButton && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => setApplyCount(applyCount + 1)}
            disabled={shouldDisableApplyButton}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
