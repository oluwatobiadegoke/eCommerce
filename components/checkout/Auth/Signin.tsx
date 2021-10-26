// import { Button } from "antd";
import { Formik, Form } from "formik";

import { MyInputArea, formSchema, initialValues } from "./AuthformUtils";

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea label="Password" name="password" type="password" />
        <MyInputArea label="Email Address" name="email" type="text" />
        <div>
          <button
            className="h-12 w-full mt-6 mb-4 flex items-center justify-center rounded text-white cursor-pointer"
            style={{ backgroundColor: "#04C45C" }}
            type="submit"
          >
            <span className="mr-2">Login Now</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
