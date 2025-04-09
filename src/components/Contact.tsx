import React from "react";

const Contact = () => {
    return(
        <div className='p-5'>
            <h1 className="font-bold text-2xl m-5">Contact Us</h1>
            Name: <input type="text" className="border border-black p-2 m-5"/> 
            Email: <input type="text" className="border border-black p-2 m-5"/> 
            <button className="border-b-black rounded-md bg-gray-500 text-white p-2 cursor-pointer">Submit</button>

        </div>
    )
}

export default Contact;