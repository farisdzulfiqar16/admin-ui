import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import Button from "../components/Elements/Button";

function Setting() {
  return (
    <MainLayout>
      <div className="space-y-">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-02">Settings</h1>
          <p className="text-sm text-gray-03">
            Manage your account preferences
          </p>
        </div>

        {/* Placeholder Card */}
        <Card
          title="Account Settings"
          desc={
            <div className="flex flex-col items-center py-16 space-y-4">
              <div className="text-4xl">⚙️</div>
              <p className="font-medium text-gray-02">
                Settings not configured
              </p>
              <p className="text-sm text-gray-03 text-center max-w-xs">
                Account and application settings will appear here.
              </p>

              {/* Tambahan tombol edit */}
              <div className="w-40">
                <Button onClick={() => alert("Edit settings clicked!")}>
                  Edit Settings
                </Button>
              </div>
            </div>
          }
        />
      </div>
    </MainLayout>
  );
}

export default Setting;
