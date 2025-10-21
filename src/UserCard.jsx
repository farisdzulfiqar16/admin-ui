// eslint-disable-next-line no-unused-vars
import React ,{ useState }from 'react'

function UserCard(props) {
    // eslint-disable-next-line react/prop-types
    const{name,email,street,city} = props;
    const [clicked, setClicked] = useState(false);

      // Fungsi handler
    function handleClick() {
        setClicked(true);
    }

    return (
        <>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2">{name}</h2>
                <p className="text-[#6C757D]">
                    <span className="font-medium">Email:</span> {email}
                </p>
                <p className="text-gray-600">
                    <span className="font-medium">Address:</span> 
                    {street}, {city}
                </p>  
                <button 
                    className={`${clicked ? "bg-special-green" : "bg-gray-01"} text-white p-2 rounded-md hover:bg-sky-700`}
                    onClick={() => setClicked(true)}
                >
                    {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
                </button>
        </div>
    </>
  );
}

export default UserCard
