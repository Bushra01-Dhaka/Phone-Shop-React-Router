import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="h-[100vh] mx-auto rounded w-full flex justify-center items-center gap-4">
                <h2 className="text-3xl font-bold my-4">Opps! This page is not found</h2>
                <Link to="/">   <button className="btn border-0 btn-md bg-green-500 hover:bg-green-400 text-white p-4">Go Back Home</button></Link>

            </div>
        </div>

    );
};

export default ErrorPage;