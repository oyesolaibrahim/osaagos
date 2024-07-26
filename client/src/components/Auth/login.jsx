function Login() {
    return (
        <>
            <form action="" className="loginContainer min-[768px]:min-h-screen">
                <p className="text-3xl">Already a Member?</p>
                <div className="">
                    <input id="student-id" name="student-id" type="text" placeholder="Enter your ID" className="w-full ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0" />
                </div>
                <div className="">
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0" />
                </div>
                <div className="">
                    <button className=" text-slate-100">Login</button>
                </div>
            </form>
        </>
    );
}

export default Login;