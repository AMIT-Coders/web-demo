import React from "react";
import "./CareerOps.scss";

const CareerOps = ({ careers }) => {
  return (
    <div className="career-ops">
      <table>
        <thead>
          <tr>
            <th>Job Role</th>
            <th>Average Salary</th>
          </tr>
        </thead>
        {careers && (
          <tbody>
            {careers.map((career) => (
              <tr>
                <td>{career.jobRole}</td>
                <td>${career.averageSalary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <br />
      <br />
    </div>
  );
};

export default CareerOps;
