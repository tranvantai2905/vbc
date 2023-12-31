import React, { useEffect } from "react";
//formik
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
//mui
import { Input } from "@mui/material";
//thunk
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataState = useSelector((state) => state.UserReducer);

  useEffect(() => {
    console.log(dataState);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      showPass: false,
    },
    validationSchema: Yup.object({
      password: Yup.string().min(5, "atLeast").required("require"),
      email: Yup.string().required("require"),
    }),
    onSubmit: async (values) => {
      handleSignIn(values);
    },
  });

  const handleSignIn = (values) => {
    console.log(values);
    console.log(import.meta.env.VITE_REACT_API_CORE_ENDPOINT);
    dispatch(login(values.email, values.password));
  };

  return (
    <div className="relative  max-h-fit mt-20 flex gap-20">
      <div className="w-full h-fit bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 max-h-fit border">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tài khoản của ban
              </label>
              <Input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@"
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                {...formik.getFieldProps("email")}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                // name="password"
                // value={formik.values.password}
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && (
                <p className="text-red-500">Mật khẩu tối thiểu 5 kí tự</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-400  hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account yet?
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="overflow-hidden max-h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          alt=""
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
