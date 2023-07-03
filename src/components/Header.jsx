import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className=" font-bold py-5 bg-slate-800 text-white">
            <div className="flex justify-between w-9/12 mx-auto">
                <div className="text-3xl">
                    <h1>Email Authentication Demo</h1>
                </div>
                <div className="text-xl font-semibold flex gap-5 items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <button className="bg-primary px-6 py-1 rounded-xl hover:bg-purple-700 ease-in-out duration-200">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;