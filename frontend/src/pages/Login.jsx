import { useLogin } from "../hooks/useLogin";
import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password); 
    }

    return (
        <section className="loginForm">
            <form onSubmit={handleSubmit}>
                <div className="text-center">
                    <img src="/images/logo.png" width={100} alt="" />
                </div>
                <div className="formTitle">
                    <strong>Welcome!</strong>
                    <p>Sign in to your account</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address<span className="text-danger">*</span></label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password<span className="text-danger">*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        required
                    />
                </div>
                <div className="button-login">
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        Log in
                    </button>
                </div>
                {error && <div className="error">{error}</div>}
            </form>

        </section>

    )
}

export default Login;