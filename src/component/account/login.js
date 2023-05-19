import React from "react";
import MetaData from "../layouts/MetaData";

function Login() {
    return (
        <>
            <MetaData title="Login" /> 
            <main className="w-full mt-12 sm:pt-20 sm:mt-0">
                <div className="flex sm:4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
                    <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-medium text-white text-3xl">Login</h1>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login;