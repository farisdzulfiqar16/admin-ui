import React from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardGoal from "../components/Fragments/CardGoal";
import CardBalance from "../components/Fragments/CardBalance";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import { transactions ,bills ,expensesBreakdowns } from "../data";

function dashboard() {
  console.log(transactions);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          
          {/* Total Balance */}
          <div className="sm:col-span-4">
            <CardBalance />
          </div>

          {/* Goals */}
          <div className="sm:col-span-4">
            <CardGoal />
          </div>

          {/* Upcoming Bill */}
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>

          {/* Recent Transactions */}
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>

          {/* Statistics */}
          <div className="sm:col-span-8">
            <CardStatistic />
          </div>
          
          {/* Expenses Breakdown */}
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default dashboard
