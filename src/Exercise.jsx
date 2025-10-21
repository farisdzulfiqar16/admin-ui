    // eslint-disable-next-line no-unused-vars
    import React from 'react';
    import UserCard from "./UserCard";
    function Exercise() {
      return (
        <>
        <div className="min-h-screen bg-[#F5F6FA] p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                User Cards
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <UserCard 
                name="A11.2021.13554"
                email="A1122113554s@gmail.com"
                street="Jl.Imam Bonjol"
                city="Semarang" 
                />
                <UserCard 
                name="Faris"
                email="Faris@gmail.com"
                street="Jl.Ngijo"
                city="Gunung Pati"
                />
                <UserCard 
                name="Dzulfiqar"
                email="Dzulfiqar@gmail.com"
                street="Jl.Pancasila"
                city="Simpang Lima"
                />
            </div>
        </div>
        </>
      );
    }
    
    export default Exercise
    