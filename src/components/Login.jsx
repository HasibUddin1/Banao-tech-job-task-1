import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="w-9/12 mx-auto pt-10">
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                    <label>
                                        <Link className="label-text-alt link link-hover text-base font-semibold">Forgot password?</Link>
                                        <Link to='/register' className="label-text-alt link link-hover block mt-2 text-base font-semibold">New to this site?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <div className="text-center">
                                        <input className="btn btn-primary w-1/2" type="submit" value="Login" />
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

export default Login;