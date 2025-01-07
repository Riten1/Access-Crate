import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import userLoginMutation from "../../../services/auth/login-mutation";

interface ILoginForm {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  const { mutate: loginUser, isLoading } = userLoginMutation({
    closeModal,
    reset,
  });
  function handleLogin(data: ILoginForm) {
    console.log(data);
    loginUser(data);
  }

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <p className="text-center text-base font-normal text-supporting-bg-light">
          Enter the details below and login
        </p>
      </div>

      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(handleLogin)}
      >
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="email" className="text-base font-semibold">
            Email <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="input"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <label htmlFor="password" className="text-base font-semibold">
            Password <span className="font-semibold text-red-600">*</span>
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="input"
          />
          {errors.password && (
            <p className="text-sm text-red-700">{errors.password.message}</p>
          )}
        </fieldset>

        <div className="my-5 text-center text-sm">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-core-primary underline"
            onClick={() => {
              closeModal();
            }}
          >
            Sign Up
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <button
            className="secondary-btn w-full font-semibold"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="primary-btn w-full font-semibold" type="submit">
            Login
            {isLoading && "..."}
          </button>
        </div>
      </form>
    </div>
  );
};
