// eslint-disable-next-line no-unused-vars
import React ,{ useState }from 'react'

function UserCard(props) {
    // eslint-disable-next-line react/prop-types
    // const{name, email, street, city, ...rest} = props;
    const{userId ,id ,title , body, ...rest} = props;
    const [clicked, setClicked] = useState(false);

    //   // Fungsi handler
    // function handleClick() {
    //     setClicked(true);
    // }

    console.log(Object.entries(rest));

    return (
        <>
        <div className="bg-white p-6 rounded-lg shadow 
        hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2">{name}</h2>
                {/* Menampilkan data */}
                <p className="text-black">
                    <span className="font-bold text " ></span>{title}
                </p>
                <p className="text-gray-600">
                    <span className="font-medium"></span>{body}
                </p>

                {/* Menampilkan data tambahan dari rest */}
                {Object.entries(rest).map(([key, value]) => (
                    <p key={key} className="text-gray-600">
                        <span className="font-medium capitalize">{key}:</span> {value}
                    </p>
                ))}
                
                {/* tombol */}
                <div>
                    <button 
                        className={`${clicked ? "bg-special-red2" : "bg-gray-01" } 
                        text-white p-2 rounded-md hover:bg-special-red mt-5`}
                        onClick={() => setClicked(true)}
                    >
                        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
                    </button>
                </div>
        </div>
    </>
  );
}

export default UserCard;
