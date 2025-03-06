import React, { useState } from "react";

const Dashboard: React.FunctionComponent = () => {
  const dashboardItems = ["Store", "SKU", "Planning", "Charts"];
  const [activeTab, setActiveTab] = useState(dashboardItems[0]);
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <nav className="flex justify-between p-5">
        <span>logo</span>
        <div>profile</div>
      </nav>
      <div className="flex h-screen">
        <div
          className={`${
            collapse ? "w-16" : "w-1/5"
          } bg-amber-500 transition-all duration-300`}
        >
          <span onClick={() => setCollapse(!collapse)} className="cursor-pointer">{collapse ? '➡️' : '⬅️'} </span>
          <div className="p-4">
            {dashboardItems.map((item: string, i: number) => {
              return (
                <li
                  className={`${
                    activeTab == item ? "bg-amber-50" : ""
                  } list-none p-2 cursor-pointer`}
                  key={i}
                  onClick={() => setActiveTab(dashboardItems[i])}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </div>
        <div className="w-full bg-amber-100 p-7">This is for main content</div>
      </div>
    </>
  );
};

export default Dashboard;
