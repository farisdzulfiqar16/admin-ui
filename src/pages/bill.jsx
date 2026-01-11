import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import Button from "../components/Elements/Button";

function Bill() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">Bills</h1>
          <p className="text-sm text-gray-03">
            Manage your upcoming bills
          </p>
        </div>

        <Card
          title="Upcoming Bills"
          desc={
            <div className="flex flex-col items-center py-16 space-y-4">
              <div className="text-4xl">🧾</div>
              <p className="font-medium text-gray-02">
                No bills scheduled
              </p>
              <p className="text-sm text-gray-03 text-center max-w-xs">
                Add bills to avoid missing your payments.
              </p>
              <div className="w-40">
                <Button>Add Bill</Button>
              </div>
            </div>
          }
        />
      </div>
    </MainLayout>
  );
}

export default Bill;
