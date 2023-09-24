
const Banner = () => {
    return (
        <div className="my-4">
            <div className="h-[80vh] mx-auto rounded w-full  bg-gray-900">
              <img className="h-[80vh] w-full" src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
            <div className="  text-center text-green-800 flex justify-center items-center relative bottom-[40vh]">
                <input className="bg-white p-3 w-[80%] mx-auto outline-none placeholder-gray-700 placeholder-bold shadow-lg  rounded-lg " type="text" placeholder="Search for items..." />
            </div>

            
        </div>
    );
};

export default Banner;