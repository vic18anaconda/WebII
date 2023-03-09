import React from "react";

import { EmployeeProvider } from "./context/EmployeeProvider";
import { EmployeeCard } from "./components/EmployeeCard";
import "./App.css";

export const App: React.FC = () => {
  return (
    <EmployeeProvider>
      <div className="app">
        <EmployeeCard />
      </div>
      
    </EmployeeProvider>
  );
};


export default App;
