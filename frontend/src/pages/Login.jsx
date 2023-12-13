import { useLogin } from "../hooks/useLogin";
import { useState, useEffect } from "react"


const Login = () => {
    const [userid, setuserid] = useState('');
    const [password, setPassword] = useState('');
    const [showLoader, setShowLoader] = useState(true);
    const { login, error, isLoading } = useLogin();

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => {
            clearTimeout(loaderTimeout);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userid, password);
    };

    return (
        <section className={`loginForm ${showLoader ? 'loading' : ''}`}>
            {showLoader ? (
                <div className="loader">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        width="50"
                        height="50"
                        fill="#000000"
                    >
                        <circle cx="50" cy="50" r="45" stroke="#eaeaea" strokeWidth="4" fill="none" />
                        <circle cx="50" cy="50" r="45" stroke="#3498db" strokeWidth="4" fill="none">
                            <animate
                                attributeName="stroke-dasharray"
                                attributeType="XML"
                                from="0 314.159"
                                to="314.159 0"
                                begin="0s"
                                dur="0.5s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <img src="/images/logo.png" width={100} alt="" />
                    </div>
                    <div className="formTitle">
                        <strong>Welcome!</strong>
                        <p>Sign in to your account</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter userid"
                            onChange={(e) => { setuserid(e.target.value) }}
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
            )}

        </section>

    )
}

export default Login;