import React, { useEffect, useState, useRef } from "react";
import Captcha from "./Captcha";
import { generateCaptchaText } from "../utils/generateCaptcha";
import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";

export const SignUpForm = () => {
  const [captcha, setCaptcha] = useState(
    generateCaptchaText(Math.floor(Math.random() * 5) + 6)
  );
  const validate = Yup.object({
    name: Yup.string()
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    confirmCaptcha: Yup.string()
      .equals([captcha], "Captcha must match")
      .required("Captcha is required"),
  });

  const refreshCaptcha = () => {
    setCaptcha(generateCaptchaText(Math.floor(Math.random() * 5) + 6));
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              confirmCaptcha: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {(formik) => (
              <Form>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="text-red-500">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4 flex flex-row">
                  <Captcha captcha={captcha} />
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className=" underline text-black font-bold py-2 px-4 rounded"
                  >
                    Refresh
                  </button>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="confirmCaptcha"
                  ></label>
                  <input
                    type="text"
                    name="confirmCaptcha"
                    id="confirmCaptcha"
                    placeholder="Confirm Captcha"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    {...formik.getFieldProps("confirmCaptcha")}
                  />
                  {formik.touched.confirmCaptcha &&
                  formik.errors.confirmCaptcha ? (
                    <div className="text-red-500">
                      {formik.errors.confirmCaptcha}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className={`w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1}`}
                  disabled={!formik.isValid}
                >
                  Create Account
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

