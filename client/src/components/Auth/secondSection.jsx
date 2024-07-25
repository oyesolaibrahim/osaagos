function SecondSection() {
    return (
        <>
            <main className="flex min-h-screen justify-center authContainer" style={{ margin: "10em 0em" }}>
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
                <form action="" className="formContainer h-full">
                    <div className="pb-2">
                        <h1 className="text-2xl font-semibold">REGISTRATION FORM</h1>
                        <div className="flex formControl">
                            <div className="">
                                <label htmlFor="email" className="font-medium text-gray-900">Email</label>
                                <div className="">
                                    <input id="email" name="email" type="email" className="text-gray-900 placeholder:text-gray-400" />
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="password" className="font-medium text-gray-900">Password</label>
                                <div className="">
                                    <input type="password" name="password" id="password" className="text-gray-900 placeholder:text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex formControl">
                            <div className="">
                                <label htmlFor="username" className="font-medium text-gray-900">Name</label>
                                <div className="">
                                    <input id="username" name="username" type="text" className="text-gray-900 placeholder:text-gray-400" />
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="student-id" className="font-medium text-gray-900">Student Id</label>
                                <div className="">
                                    <input type="text" name="student-id" id="student-id" className="text-gray-900 placeholder:text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex formControl">
                            <div className="">
                                <label htmlFor="passing-year" className="font-medium text-gray-900">Passing Year</label>
                                <div className="">
                                    <input id="passing-year" name="passing-year" type="text" className="text-gray-900 placeholder:text-gray-400" />
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="department-no" className="font-medium text-gray-900">Department No</label>
                                <div className="">
                                    <input type="text" name="department-no" id="department-no" className="text-gray-900 placeholder:text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <input type="file" name="" hidden id="" />
                            <button className="formBtn">Upload Your Photo</button>
                        </div>
                    </div>
                    <fieldset className="fieldSet">
                        <legend className=" font-semibold text-gray-900">Gender</legend>
                        <div className="">
                            <div className="flex">
                                <input id="male" name="gender" type="radio" className="" />
                                <label htmlFor="male" className=" font-medium text-gray-900">Male</label>
                            </div>
                            <div className="flex">
                                <input id="female" name="gender" type="radio" className="" />
                                <label htmlFor="female" className=" font-medium text-gray-900">Female</label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="checkIn flex">
                        <div className="">
                            <input id="offers" name="offers" type="checkbox" className="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500">I have read and agree to the <a href="#" target="_blank" rel="noopener noreferrer" className="text-amber-400">Alumni</a> Terms of Service</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="formBtn text-slate-100">Registration</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default SecondSection;