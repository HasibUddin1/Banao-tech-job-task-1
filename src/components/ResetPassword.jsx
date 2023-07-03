import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const ResetPassword = () => {

    const { passwordResetEmail } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleResetPassword = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value

        if(!email){
            setError('Email field cannot be empty')
            return
        }

        setError('')

        passwordResetEmail(email)
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Password reset email has been sent to your email',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                setError('')
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="w-9/12 mx-auto pt-10">
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Reset your password</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleResetPassword}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                    <label>
                                        <Link to='/login' className="label-text-alt link link-hover text-base font-semibold">Proceed to login</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <div className="text-center">
                                        <input className="btn btn-primary w-1/2" type="submit" value="Send Password Reset Email" />
                                    </div>
                                </div>
                                {error && <p className="text-red-500 font-semibold">{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;