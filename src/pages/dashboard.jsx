import React from 'react'
import MainLayout from '../components/Layouts/MainLayout'

function dashboard() {
  return (
    <>
      			<MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6">
          
          {/* Total Balance */}
          <div className="sm:col-span-4">
            <Card
              title="Total Balance"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
            />
          </div>

          {/* Goals */}
          <div className="sm:col-span-4">
            <Card
              title="Goals"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
            />
          </div>

          {/* Upcoming Bill */}
          <div className="sm:col-span-4">
            <Card
              title="Upcoming Bill"
              link="/bill"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
            />
          </div>

          {/* Recent Transactions */}
          <div className="sm:col-span-4 sm:row-span-2">
            <Card
              title="Recent Transactions"
              link="/transactions"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
            />
          </div>

          {/* Statistics */}
          <div className="sm:col-span-8">
            <Card
              title="Statistics"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
            />
          </div>
          
          {/* Expenses Breakdown */}
          <div className="sm:col-span-8">
            <Card
              title="Expenses Breakdown"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
            />
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default dashboard
