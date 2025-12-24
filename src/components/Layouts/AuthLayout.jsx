import React from 'react'
import Logo from "../Elements/Logo";


function AuthLayout(props) {
    const { children } = props;

  return (
    <>
        <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
            {/* container start */}
            <div className="w-full max-w-md px-6">
                <div className="mb-10">
                  <Logo />
                </div>
              {children}
            </div>
      {/* container end */}
        </main>
    </>
  )
}

export default AuthLayout;
