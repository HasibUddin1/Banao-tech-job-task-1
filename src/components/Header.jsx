import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Header = () => {

    const { logOut, user } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged out',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className=" font-bold py-5 bg-slate-800 text-white">
            <div className="flex justify-between w-9/12 mx-auto">
                <div className="text-3xl">
                    <h1>Email Authentication Task</h1>
                </div>
                <div className="text-xl font-semibold flex gap-5 items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Register</Link>

                    {
                        user ?
                            <button onClick={handleLogout} className="bg-primary px-6 py-1 rounded-xl hover:bg-purple-700 ease-in-out duration-200">Logout</button> :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;