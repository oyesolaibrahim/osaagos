import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginSection = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    sessionStorage.setItem("savedUserEmail", formData.email);
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('http://localhost:5000/api/login', formData)
            .then((result) => {
                setLoading(false);
                console.log("Login successful:", result);
                navigate('/myprofile'); 
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error during login:', error);
                setError(error.response?.data?.message || 'An error occurred');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <form onSubmit={handleLogin} className="sm:p-20 p-4 w-2/3 mx-auto">
                <p className="text-4xl text-center font-semibold">LOGIN FORM</p>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="grid grid-cols-1 mt-8 formControl">
                    <div className="sm:col-span-1 mt-2">
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Enter your Email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full h-14 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm bg-orange-50 sm:leading-6" 
                        />
                    </div>
                    <div className="sm:col-span-1 mt-2">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Password" 
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full h-14 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm bg-orange-50 sm:leading-6" 
                        />
                    </div>
                    <div className="sm:col-span-1 mt-2">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`block w-full text-slate-100 text-base px-10 py-4 font-semibold shadow-sm ${loading ? "bg-gray-400" : "bg-orange-400 hover:bg-orange-500"}`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </div>
                <div className="flex justify-between h-20 p-4">
                    <hr className=" w-40" style={{ alignSelf: "center" }} />
                    <span className="text-sm text-gray-400" style={{ alignSelf: "center" }}>
                        Don’t have an account? 
                        <Link to="/sign-up" className="text-orange-400"> Sign Up</Link>
                    </span>
                    <hr className=" w-40" style={{ alignSelf: "center" }} />
                </div>
            </form>
        </>
    );
};

export default LoginSection;
