import "../src/index.css";
import React from "react";
// import FilterComponent from "./components/Filter/FilterComponent";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* <FilterComponent /> */}
      <Table />
    </div>
  );
}

export default App;
