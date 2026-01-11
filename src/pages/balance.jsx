import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import Button from "../components/Elements/Button";

function Balance() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">Balance</h1>
          <p className="text-sm text-gray-03">
            Overview of your current balance
          </p>
        </div>

        <Card
          title="Total Balance"
          desc={
            <div className="flex flex-col items-center py-16 space-y-4">
              <div className="text-4xl">💰</div>
              <p className="font-medium text-gray-02">
                No balance data yet
              </p>
              <p className="text-sm text-gray-03 text-center max-w-xs">
                Your balance information will appear here once data is added.
              </p>
              <div className="w-40">
                <Button>Add Balance</Button>
              </div>
            </div>
          }
        />
      </div>
    </MainLayout>
  );
}

export default Balance;
