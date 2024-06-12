import React from "react";

const PeopleSection = ({
  searchTerm,
  setSearchTerm,
  selectedItems,
  setSelectedItems,
}) => {
  const allItems = [
    { name: "Alan", tag: "Payer" },
    { name: "Alex", tag: "Attendee" },
    // { name: "National tennis Class", tag: "Class Public" },
    // { name: "National tennis court", tag: "Facility Private" },
    // Add more items as needed
  ];

  const filteredItems = allItems
    .filter((item) =>
      item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    .slice(0, 10);

  const handleSelectItem = (item) => {
    if (
      !selectedItems.some((selectedItem) => selectedItem.name === item.name)
    ) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <label className="text-gray-600 font-medium">Search People</label>
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md h-12 focus:outline-none"
        placeholder="Search Payer or attendee name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length > 0 && (
        <div className="bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between"
              onClick={() => handleSelectItem(item)}
            >
              <span>{item.name}</span>
              <span className="text-gray-400">{item.tag}</span>
            </div>
          ))}
        </div>
      )}
      <label className="text-gray-600 font-medium">Selected People</label>
      <div className="bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto">
        {selectedItems.map((item, index) => (
          <div key={index} className="p-2 flex justify-between">
            <span>{item.name}</span>
            <span className="text-gray-400">{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;
