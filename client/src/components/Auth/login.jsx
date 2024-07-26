function Login() {
    return (
        <>
            <form action="" className="loginContainer h-full">
                <p className="text-3xl">Already a Member?</p>
                <div className="">
                    <input id="student-id" name="student-id" type="text" placeholder="Enter your ID" className="w-full text-gray-900 placeholder:text-gray-400" />
                </div>
                <div className="">
                    <input type="password" name="password" id="password" placeholder="Password" className="text-gray-900 placeholder:text-gray-400" />
                </div>
                <div className="">
                    <button className=" text-slate-100">Login</button>
                </div>
            </form>
        </>
    );
}

export default Login;