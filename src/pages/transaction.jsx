import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

function Transaction() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">Transactions</h1>
          <p className="text-sm text-gray-03">
            Your recent financial activities
          </p>
        </div>

        <Card
          title="Recent Transactions"
          desc={
            <div className="flex flex-col items-center py-16 space-y-3">
              <div className="text-4xl">📄</div>
              <p className="font-medium text-gray-02">
                No transactions found
              </p>
              <p className="text-sm text-gray-03 text-center">
                Your transaction history will be shown here.
              </p>
            </div>
          }
        />
      </div>
    </MainLayout>
  );
}

export default Transaction;
