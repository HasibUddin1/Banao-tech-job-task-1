import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    const { createUser, updateUsersProfile } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user
                console.log(registeredUser)
                updateUsersProfile(registeredUser, name)
                    .then(() => {
                        alert('User profile has been successfully updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="w-9/12 mx-auto pt-10">
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label>
                                        <Link to='/login' className="label-text-alt link link-hover block mt-2 text-base font-semibold">Already have an account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <div className="text-center">
                                        <input className="btn btn-primary w-1/2" type="submit" value="Register" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;