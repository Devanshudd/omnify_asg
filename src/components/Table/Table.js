// Table.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import WaitlistTable from "./WaitlistTable";

function Table() {
  return (
    <Router>
      <div className="flex flex-col h-screen lg:flex-row">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
            <Routes>
              {/* Add Routes here for other components */}
              <Route path="/waitlist" element={<WaitlistTable />} />
              {/* Example route, you can add more */}
              <Route path="/" element={<WaitlistTable />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default Table;
