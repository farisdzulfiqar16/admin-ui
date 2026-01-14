import React, { useState } from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/icon";

function CardRecentTransaction({ data }) {
  const tabs = ["All", "Revenue", "Expense"];
  const [activeTab, setActiveTab] = useState("All");

  // Filter data sesuai tab
  const filteredData =
    activeTab === "All" ? data : data.filter((item) => item.type === activeTab);

  return (
    <Card
      title="Recent Transactions"
      link="/transaction"
      desc={
        <>
          {/* Tabs dengan animasi */}
          <div className="flex border-b border-gray-05 mb-4 relative">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`relative px-4 py-2 font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-gray-01 hover:text-gray-02"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {/* underline animasi */}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-primary rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>

          {/* List transaksi */}
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center my-4 p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="bg-special-bg text-gray-02 px-3 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="text-lg font-bold">{item.transactionName}</div>
                  <div className="text-gray-02 text-sm">{item.shopName}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold text-gray-02">${item.amount}</div>
                <div className="text-gray-02 text-sm">{item.date}</div>
              </div>
            </div>
          ))}
        </>
      }
    />
  );
}

export default CardRecentTransaction;
