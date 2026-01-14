import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardGoal from "../components/Fragments/CardGoal";
import CardBalance from "../components/Fragments/CardBalance";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import AppSnackbar from "../components/Elements/AppSnackbar";
import {
  transactions,
  bills,
  balances,
  expensesBreakdowns,
  expensesStatistics,
} from "../data";
import { AuthContext } from "../context/authContext";

function Dashboard() {
  // const [goals, setGoals] = useState([]);
  const { logout } = useContext(AuthContext);
  const [goals, setGoals] = useState([]);
  const [loadingGoals, setLoadingGoals] = useState(true); // ⬅️ tambahkan loading
  const goalData = goals.length > 0 ? goals[0] : {};

  // state untuk snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // const handleCloseSnackbar = () => {
  //   setSnackbar((prev) => ({ ...prev, open: false }));
  // }

  // fungsi untuk menutup snackbar
  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // fungsi untuk fetch data goals
  const fetchGoals = async () => {
    setLoadingGoals(true); // ⬅️ tampilkan loading
    try {
      const result = await goalService();

      if (Array.isArray(result)) {
        setGoals(result);
      } else if (result) {
        setGoals([result]);
      } else {
        setGoals([]);
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg || "Gagal memuat data goals",
        severity: "error",
      });

      if (err.status === 401) logout();
      setGoals([]);
    } finally {
      setLoadingGoals(false); // ⬅️ sembunyikan loading
    }
  };

  // fungsi untuk fetch data goals
  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">
        {/* Balance */}
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>

        {/* Goals */}
        <div className="sm:col-span-4">
          <CardGoal
            data={goals[0] || { present_Amount: 0, target_Amount: 0 }}
            loading={goals.length === 0}
          />
        </div>

        {/* Upcoming Bills */}
        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* Recent Transactions */}
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>

        {/* Statistics */}
        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>

        {/* Expense Breakdown */}
        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
      </div>

      {/* Snackbar */}
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default Dashboard;
