import React, { useState } from "react";
import FilterComponent from "../Filter/FilterComponent"; // Make sure this path is correct

const waitlistData = [
  {
    createdOn: "Sun, 07 Jan 2024",
    player: "Theodore T.C. Calvin",
    status: "Lead",
    email: "theoabc@gmail.com",
    phone: "+91 9650967876",
    service: "Private Language Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 06 Jan 2024",
    player: "Hannibal Smith",
    status: "Active",
    email: "hannibal@gmail.com",
    phone: "+91 9867852424",
    service: "Swim beginner for class new Set...",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 05 Jan 2024",
    player: "April Curtis",
    status: "Inactive",
    email: "aprilcurtis@gmail.com",
    phone: "+91 9866651903",
    service: "Fitness Session",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 04 Jan 2024",
    player: "Michael Knight",
    status: "Active",
    email: "smith@gmail.com",
    phone: "+91 9866530834",
    service: "Aerobic Session",
    scheduled: "Fri, 05 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 03 Jan 2024",
    player: "Templeton Peck",
    status: "Active",
    email: "michaelsmith@gmail.com",
    phone: "+91 9866532437",
    service: "Boxing Session",
    scheduled: "Thu, 04 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 02 Jan 2024",
    player: "Theodore T.C. Calvin",
    status: "Active",
    email: "hannibalsmith@gmail.com",
    phone: "+91 9865020850",
    service: "Kids play Session",
    scheduled: "Thu, 04 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 01 Jan 2024",
    player: "Michael Knight",
    status: "Lead",
    email: "Mike@gmail.com",
    phone: "+91 9866652220",
    service: "Appointment Session",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 31 Dec 2023",
    player: "Mike Tevollo",
    status: "Lead",
    email: "hannibalsmith@gmail.com",
    phone: "+91 9866658209",
    service: "Exercise Session",
    scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 29 Dec 2023",
    player: "Templeton Peck",
    status: "Lead",
    email: "templetopk@gmail.com",
    phone: "+91 9864400805",
    service: "Session Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 28 Dec 2023",
    player: "Peter Thornton",
    status: "Lead",
    email: "peterthorn@gmail.com",
    phone: "+91 9866544990",
    service: "Session Session",
    scheduled: "Wed, 03 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 25 Dec 2023",
    player: "Lynn Tanner",
    status: "Inactive",
    email: "Lynn@gmail.com",
    phone: "+91 9866542452",
    service: "Fitness Session",
    scheduled: "Mon, 27 Dec 2023 2:42 PM",
  },
  {
    createdOn: "Sun, 25 Dec 2023",
    player: "Col. Roderick Decker",
    status: "Inactive",
    email: "decker@gmail.com",
    phone: "+91 9866541493",
    service: "Kids play Session",
    scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  // Additional records for better pagination example
  {
    createdOn: "Sat, 24 Dec 2023",
    player: "John Doe",
    status: "Active",
    email: "john.doe@gmail.com",
    phone: "+91 9876543210",
    service: "Yoga Session",
    scheduled: "Sun, 08 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 23 Dec 2023",
    player: "Jane Doe",
    status: "Lead",
    email: "jane.doe@gmail.com",
    phone: "+91 9876543211",
    service: "Meditation Session",
    scheduled: "Mon, 09 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 22 Dec 2023",
    player: "Jim Beam",
    status: "Inactive",
    email: "jim.beam@gmail.com",
    phone: "+91 9876543212",
    service: "Dance Session",
    scheduled: "Tue, 10 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 21 Dec 2023",
    player: "Jack Daniels",
    status: "Active",
    email: "jack.daniels@gmail.com",
    phone: "+91 9876543213",
    service: "Pilates Session",
    scheduled: "Wed, 11 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 20 Dec 2023",
    player: "Johnny Walker",
    status: "Lead",
    email: "johnny.walker@gmail.com",
    phone: "+91 9876543214",
    service: "Running Session",
    scheduled: "Thu, 12 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 19 Dec 2023",
    player: "Jameson Irish",
    status: "Inactive",
    email: "jameson.irish@gmail.com",
    phone: "+91 9876543215",
    service: "Weightlifting Session",
    scheduled: "Fri, 13 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 18 Dec 2023",
    player: "George Clooney",
    status: "Active",
    email: "george.clooney@gmail.com",
    phone: "+91 9876543216",
    service: "Boxing Session",
    scheduled: "Sat, 14 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 17 Dec 2023",
    player: "Brad Pitt",
    status: "Lead",
    email: "brad.pitt@gmail.com",
    phone: "+91 9876543217",
    service: "Swimming Session",
    scheduled: "Sun, 15 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Fri, 16 Dec 2023",
    player: "Matt Damon",
    status: "Inactive",
    email: "matt.damon@gmail.com",
    phone: "+91 9876543218",
    service: "Tennis Session",
    scheduled: "Mon, 16 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Thu, 15 Dec 2023",
    player: "Leonardo DiCaprio",
    status: "Active",
    email: "leonardo.dicaprio@gmail.com",
    phone: "+91 9876543219",
    service: "Football Session",
    scheduled: "Tue, 17 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Wed, 14 Dec 2023",
    player: "Tom Hanks",
    status: "Lead",
    email: "tom.hanks@gmail.com",
    phone: "+91 9876543220",
    service: "Basketball Session",
    scheduled: "Wed, 18 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Tue, 13 Dec 2023",
    player: "Morgan Freeman",
    status: "Inactive",
    email: "morgan.freeman@gmail.com",
    phone: "+91 9876543221",
    service: "Volleyball Session",
    scheduled: "Thu, 19 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Mon, 12 Dec 2023",
    player: "Robert Downey Jr.",
    status: "Active",
    email: "robert.downey@gmail.com",
    phone: "+91 9876543222",
    service: "Cricket Session",
    scheduled: "Fri, 20 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sun, 11 Dec 2023",
    player: "Chris Hemsworth",
    status: "Lead",
    email: "chris.hemsworth@gmail.com",
    phone: "+91 9876543223",
    service: "Hockey Session",
    scheduled: "Sat, 21 Jan 2024 2:42 PM",
  },
  {
    createdOn: "Sat, 10 Dec 2023",
    player: "Mark Ruffalo",
    status: "Inactive",
    email: "mark.ruffalo@gmail.com",
    phone: "+91 9876543224",
    service: "Badminton Session",
    scheduled: "Sun, 22 Jan 2024 2:42 PM",
  },
];

// Columns configuration
const columns = [
  { id: "createdOn", name: "Created On" },
  { id: "player", name: "Player" },
  { id: "status", name: "Status" },
  { id: "email", name: "Email" },
  { id: "phone", name: "Player Phone" },
  { id: "service", name: "Services" },
  { id: "scheduled", name: "Scheduled" },
];

const WaitlistTable = () => {
  const [visibleColumns, setVisibleColumns] = useState(
    columns.reduce((acc, column) => ({ ...acc, [column.id]: true }), {})
  );
  const [showColumnEditor, setShowColumnEditor] = useState(false);
  const [showFilterComponent, setShowFilterComponent] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState(""); // State for search value

  const toggleColumn = (columnId) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  const toggleColumnEditor = () => {
    setShowColumnEditor((prev) => !prev);
  };

  const toggleFilterComponent = () => {
    setShowFilterComponent((prev) => !prev);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter data based on search value
  const filteredData = waitlistData.filter((item) =>
    item.player.toLowerCase().includes(searchValue.toLowerCase())
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      {/* Editable Text Boxes with counts aligned to the right */}
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/3 lg:w-auto p-2">
          <input
            type="text"
            placeholder="All Waitlists 100"
            className="w-full focus:outline-none focus:border-gray-200 border rounded px-4 py-2"
          />
        </div>
        <div className="w-full md:w-1/3 lg:w-auto p-2">
          <input
            type="text"
            placeholder="Newly Added 50"
            className="w-full focus:outline-none focus:border-gray-200 border rounded px-4 py-2"
          />
        </div>
        <div className="w-full md:w-1/3 lg:w-auto p-2">
          <input
            type="text"
            placeholder="Leads 20"
            className="w-full focus:outline-none focus:border-gray-200 border rounded px-4 py-2"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded mb-2 md:mb-0"
          onClick={toggleFilterComponent}
        >
          Add Filter
        </button>

        <div className="flex-1 md:mr-5 mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Search client"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-200"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className="relative">
          <div
            className="bg-gray-200 text-black py-2 px-4 rounded ml-14 cursor-pointer"
            onClick={toggleColumnEditor}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${showColumnEditor ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {showColumnEditor && (
            <div
              className="absolute bg-white shadow-lg rounded p-4 z-10"
              style={{ top: "100%", left: 0, width: "250px" }}
            >
              <h3 className="text-lg font-bold mr-5">Edit Columns</h3>
              <div className="flex flex-col space-y-2 mt-2">
                {columns.map((column) => (
                  <label
                    key={column.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={visibleColumns[column.id]}
                      onChange={() => toggleColumn(column.id)}
                    />
                    <span>{column.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {showFilterComponent && (
        <div
          className="absolute rounded p-4 z-10"
          style={{ width: "600px", height: "600px" }}
        >
          <FilterComponent />
        </div>
      )}

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">
                <input type="checkbox" />
              </th>
              {columns.map(
                (column) =>
                  visibleColumns[column.id] && (
                    <th key={column.id} className="px-4 py-2 border">
                      {column.name}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">
                  <input type="checkbox" />
                </td>
                {columns.map(
                  (column) =>
                    visibleColumns[column.id] && (
                      <td key={column.id} className="px-4 py-2 border">
                        {entry[column.id]}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-200 text-black py-2 px-4 rounded"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`py-2 px-4 rounded ${
              currentPage === i + 1
                ? "bg-gray-400 text-black"
                : "bg-gray-200 text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= waitlistData.length}
          className="bg-gray-200 text-black py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WaitlistTable;
