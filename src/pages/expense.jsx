import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import Button from "../components/Elements/Button";

function Expense() {
  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">
            Expenses
          </h1>
          <p className="text-sm text-gray-03">
            Track and manage your spending
          </p>
        </div>

        {/* Empty State */}
        <Card
          title="Expense Overview"
          desc={
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="text-4xl">📉</div>
              <p className="text-gray-02 font-medium">
                No expenses recorded
              </p>
              <p className="text-sm text-gray-03 max-w-xs">
                You haven’t added any expenses yet. Start tracking to see
                insights here.
              </p>

              <div className="w-40">
                <Button>Add Expense</Button>
              </div>
            </div>
          }
        />
      </div>
    </MainLayout>
  );
}

export default Expense;
