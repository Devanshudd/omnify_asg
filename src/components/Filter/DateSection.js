// DateSection.js
import React, { useState } from "react";

const DateSection = ({ dateRange, setDateRange }) => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Show orders for</label>
          <select
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
            value={selectedOption}
            onChange={handleDropdownChange}
            style={{ height: "48px" }} // to ensure height consistency
          >
            <option value="All">All</option>
            <option value="Custom">Custom</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="This month">This month</option>
            <option value="Last month">Last month</option>
            <option value="This quarter">This quarter</option>
            <option value="2 quarters ago">2 quarters ago</option>
            <option value="This Year">This Year</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>
        {/* Always show the "From" and "To" fields */}
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <label className="text-gray-600 font-medium">From</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none"
              value={dateRange.from}
              onChange={(e) =>
                setDateRange({ ...dateRange, from: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label className="text-gray-600 font-medium">To</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md focus:outline-none"
              value={dateRange.to}
              onChange={(e) =>
                setDateRange({ ...dateRange, to: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSection;
