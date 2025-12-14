// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UserCard({ title, body, ...rest }) {
    const [clicked, setClicked] = useState(false);

    console.log(Object.entries(rest));

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow
            hover:shadow-md transition-shadow hover:bg-red-200 hover:border transition-border">

                <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2">{title}</h2>

                <p className="text-black">
                    {title}
                </p>

                <p className="text-gray-600">
                    {body}
                </p>

                {Object.entries(rest).map(([key, value]) => (
                    <p key={key} className="text-gray-600">
                        <span className="font-medium capitalize">{key}:</span> {value}
                    </p>
                ))}

                <div>
                    <button
                        className={`${clicked ? "bg-special-red2" : "bg-gray-01"} 
                        text-white p-2 rounded-md hover:bg-special-red mt-5 w-sm`}
                        onClick={() => setClicked(true)}
                    >
                        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
                    </button>
                </div>
            </div>
        </>
    );
}

UserCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default UserCard;
