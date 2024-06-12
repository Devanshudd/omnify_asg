import React from "react";

const ServiceProductSection = ({
  searchTerm,
  setSearchTerm,
  searchBy,
  setSearchBy,
  selectedItems,
  setSelectedItems,
}) => {
  let allItems = [
    { name: "National tennis class", type: "Class", status: "Public" },
    { name: "National tennis court", type: "Facility", status: "Private" },
    // Add more items as needed
  ];

  if (searchTerm && searchBy === "name") {
    allItems = allItems.filter((item) =>
      item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }

  const handleSelectItem = (item) => {
    if (
      !selectedItems.some((selectedItem) => selectedItem.name === item.name)
    ) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSearchByChange = (value) => {
    if (value === "name") {
      setSearchTerm(""); // Clear searchTerm when switching to "Search by name"
    }
    setSearchBy(value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-gray-600 font-medium">
          Search Services / Products
        </label>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="searchBy"
              value="name"
              checked={searchBy === "name"}
              onChange={() => handleSearchByChange("name")}
            />
            <span className="ml-2">Search by name</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="searchBy"
              value="tags"
              checked={searchBy === "tags"}
              onChange={() => handleSearchByChange("tags")}
            />
            <span className="ml-2">Search by tags</span>
          </label>
        </div>
      </div>
      {searchBy === "name" && (
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md h-12 focus:outline-none"
          placeholder="Search service or product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
      {searchBy === "tags" && (
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Service Type</label>
          <select
            className="p-2 border border-gray-300 rounded-md h-12 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          >
            <option value="">Select Service Type</option>
            <option value="">Show all Service</option>
            <option value="Class">Class</option>
            <option value="Appointment">Appointment</option>
            <option value="Facility">Facility</option>
            <option value="ClassPack">Class Pack</option>
            <option value="Membership">Membership</option>
            <option value="General">General items</option>
          </select>
          <label className="text-gray-600 font-medium">Status</label>
          <select
            className="p-2 border border-gray-300 rounded-md h-12 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Select Service Type"
          >
            <option value="servicetype">Select Service Type</option>
            <option value="showall">Show all</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Disable">Disable</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      )}
      {searchBy === "name" && searchTerm && (
        <div className="bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between"
              onClick={() => handleSelectItem(item)}
            >
              <span>{item.name}</span>
              <span>{item.type}</span>
              <div>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-white ${
                    item.status === "Public"
                      ? "bg-green-500"
                      : item.status === "Private"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchBy === "name" && (
        <label className="text-gray-600 font-medium">
          Selected Services / Products
        </label>
      )}
      {searchBy === "name" && (
        <div className="bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto">
          {selectedItems.map((item, index) => (
            <div key={index} className="p-2 flex justify-between">
              <span>{item.name}</span>
              <span>{item.type}</span>
              <div>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-white ${
                    item.status === "Public"
                      ? "bg-green-500"
                      : item.status === "Private"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceProductSection;
