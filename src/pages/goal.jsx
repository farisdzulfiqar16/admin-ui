import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import Button from "../components/Elements/Button";

function Goal() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">Goals</h1>
          <p className="text-sm text-gray-03">
            Set and track your financial goals
          </p>
        </div>

        <Card
          title="Your Goals"
          desc={
            <div className="flex flex-col items-center py-16 space-y-4">
              <div className="text-4xl">🎯</div>
              <p className="font-medium text-gray-02">
                No goals created
              </p>
              <p className="text-sm text-gray-03 text-center max-w-xs">
                Create goals to stay motivated and focused.
              </p>
              <div className="w-40">
                <Button>Create Goal</Button>
              </div>
            </div>
          }
        />
      </div>
    </MainLayout>
  );
}

export default Goal;
