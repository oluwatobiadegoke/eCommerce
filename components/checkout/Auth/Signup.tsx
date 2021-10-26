// import { Button } from "antd";
import { Formik, Form } from "formik";

import { MyInputArea, signupFormSchema, initialValues } from "./AuthformUtils";

const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupFormSchema}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea label="Email Address" name="email" type="text" />
        <MyInputArea label="Password" name="password" type="password" />
        <MyInputArea
          label="Confirm Password"
          name="cpassword"
          type="password"
        />
        <div>
          <button
            className="h-12 w-full mt-7 mb-4 flex items-center justify-center rounded text-white cursor-pointer"
            style={{ backgroundColor: "#04C45C" }}
            type="submit"
          >
            <span className="mr-2">Sign Up Now</span>
          </button>
          <div className="flex gap-3 justify-center items-center bg-gray-700 hover:bg-gray-600 text-white h-12 rounded transition-all">
            <button>Or sign-in with google</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
