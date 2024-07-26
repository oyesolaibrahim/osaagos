function SignUp() {
    return (
        <>
            <form action="" className="formContainer min-h-screen">
                <div>
                    <h1 className="text-2xl font-semibold">REGISTRATION FORM</h1>
                    <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input type="password" name="password" id="password" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input type="text" name="username" id="username" autoComplete="username" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="student-id" className="block text-sm font-medium leading-6 text-gray-900">Student Id</label>
                            <div className="mt-2">
                                <input id="student-id" name="student-id" type="student-id" autoComplete="student-id" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="passing-year" className="block text-sm font-medium leading-6 text-gray-900">Passing Year</label>
                            <div className="mt-2">
                                <input id="passing-year" name="passing-year" type="passing-year" autoComplete="passing-year" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="department-no" className="block text-sm font-medium leading-6 text-gray-900">Department No</label>
                            <div className="mt-2">
                                <input id="department-no" name="department-no" type="department-no" autoComplete="department-no" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 focus-visible:outline focus-visible:outline-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4 mt-4">
                            <input type="file" name="" hidden id="" />
                            <button type="button" className=" px-6 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-orange-400 hover:bg-orange-100">Upload Your Photo</button>
                        </div>
                        <fieldset className="sm:col-span-4">
                            <legend className="text-base font-semibold leading-6 text-gray-900">Gender</legend>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center gap-x-3">
                                    <input id="male" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="male" className="block text-base font-medium leading-6 text-gray-900">Male</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="female" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="female" className="block text-base font-medium leading-6 text-gray-900">Female</label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="sm:col-span-6 relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            </div>
                            <div className="text-sm leading-6">
                                <p className="text-gray-500">I have read and agree to the <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400">Alumni</a> Terms of Service</p>
                            </div>
                        </div>
                        <div className="sm:col-span-6 mt-2">
                            <button type="button" className=" text-slate-100 text-base px-10 py-4 font-semibold shadow-sm bg-orange-400 hover:bg-orange-400  ">Registration</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignUp;