import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import "./EmployeeCard.css";

export const EmployeeCard: React.FC = () => {
  const { employee } = useContext(EmployeeContext);

  return (
    
      <div className="employee-card">
        <h2 className="employee-name">{employee.name}</h2>
        <p className="employee-jobTitle">{employee.jobTitle}</p>
        <p className="employee-email">{employee.email}</p>
      </div>


  
    
  );
};

export default EmployeeCard;
