import UserCard from "./UserCard";
import { PostUsers } from "./Services";


function postcard(){
    return(
        <>
        <div className="min-h-screen bg-[#ffffff] px-48">
            <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
                Post Card
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-10xl mx-auto
            text-center">
              {PostUsers.map((user,index) => (
                <UserCard key={index} {...user} />
              ))}
            </div>
        </div>
        </>
    );
}

export default postcard;






