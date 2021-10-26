import { useField } from "formik";
import * as Yup from "yup";

interface IInputProps {
  label: string;
  name: string;
  type?: string;
}

interface formValues {
  password: string;
  email: string;
}

export const initialValues: formValues = {
  email: "",
  password: "",
};

export const formSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Password cannot be empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email cannot be empty."),
});
export const signupFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Password cannot be empty"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email cannot be empty."),
});

export const MyInputArea = (props: IInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mb-3 bg-whit">
      <label className="mb-3" style={{ color: "#4A5568" }} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={`px-5 rounded-sm bg-white h-10 ring-1 ring-gray-300 ${
          meta.error && "ring-2 ring-red-500"
        }`}
        id="message"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};
