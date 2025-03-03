import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Log-in to your account
          </h2>
          <div className="text-center  tracking-tight text-gray-900">
            or
            <Link href={"/signup"}>
              <span className="text-pink-600"> Sign up</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border border-gray-350 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-pink-600 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-0">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border border-gray-350 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-pink-600 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
            <div className="text-sm text-right">
              <a
                href="#"
                className="font-semibold text-pink-600 hover:text-pink-500"
              >
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
