import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Button from "../components/Elements/Button";
import Card from "../components/Elements/Card";
import Icon from "../components/Elements/icon";
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryIcon = {
    housing: <Icon.House />,
    food: <Icon.Food />,
    transportation: <Icon.Transport />,
    entertainment: <Icon.Gamepad />,
    shopping: <Icon.Shopping />,
    others: <Icon.Other />,
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchExpenses = async () => {
      try {
        // const token = localStorage.getItem("token");
        setLoading(true);
        const res = await axios.get(
          "https://jwt-auth-eight-neon.vercel.app/expenses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setExpenses(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // sembunyikan loading setelah selesai
      }
    };

    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">Expenses</h1>
          <p className="text-sm text-gray-03">Track and manage your spending</p>
        </div>

        {/* Empty State */}
        {expenses.length === 0 ? (
          <Card title="Expense Comparison">
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="text-4xl">📉</div>
              <p className="text-gray-02 font-medium">No expenses recorded</p>
              <p className="text-sm text-gray-03 max-w-xs">
                You haven’t added any expenses yet. Start tracking to see
                insights here.
              </p>
              <div className="w-40">
                <Button>Add Expense</Button>
              </div>
            </div>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {expenses.map((item, index) => {
              const isUp = item.trend === "up";
              const isDown = item.trend === "down";

              return (
                <div key={index} className="space-y-2">
                  {/* ===== HEADER ABU-ABU ===== */}
                  <div className="flex justify-between items-start bg-gray-500 p-3 rounded-t-xl">
                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-03">
                        {categoryIcon[item.category]}
                      </div>

                      <div>
                        <p className="font-medium capitalize text-gray-50">
                          {item.category}
                        </p>
                        <p className="text-sm text-gray-05">${item.amount}</p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-end">
                      <div
                        className={`flex items-center gap-1 font-medium ${
                          isUp
                            ? "text-special-red"
                            : isDown
                            ? "text-special-green"
                            : "text-gray-03"
                        }`}
                      >
                        {isUp && <Icon.ArrowUp size={16} />}
                        {isDown && <Icon.ArrowDown size={16} />}
                        <span>{item.percentage}%</span>
                      </div>

                      <p className="text-xs text-gray-06">
                        Compare to last month
                      </p>
                    </div>
                  </div>

                  {/* ===== DETAIL CARD PUTIH ===== */}
                  <div className="bg-white border border-gray-05 rounded-b-xl p-4 space-y-4">
                    {item.detail?.map((detail, i) => (
                      <React.Fragment key={i}>
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{detail.title}</p>
                            <p className="text-xs text-gray-03">{detail.date}</p>
                          </div>
                          <p className="font-medium">${detail.amount}</p>
                        </div>

                        {i < item.detail.length - 1 && (
                          <div className="border-t border-gray-05"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Expense;
