import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { ViewIcon, ViewOffIcon } from "hugeicons-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Loading } from "../../../components/ui/Loading";
import useRegisterUserMutation from "../../../services/auth/signup-mutation";
import { LoginForm } from "./LoginForm";

interface ILoginForm {
  full_name: string;
  email: string;
  password: string;
}
const schema = yup
  .object({
    full_name: yup.string().required("Full Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
export const SignUpForm = ({ closeModal }: { closeModal: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { mutate: registerUser, isLoading } = useRegisterUserMutation({
    closeModal,
    reset,
  });

  function handleRegister(data: ILoginForm) {
    const formData: any = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    registerUser(formData);
  }

  return (
    <>
      {openLoginForm === false ? (
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <h2 className="text-center text-3xl font-semibold">Sign Up</h2>
            <p className="text-center text-base font-normal text-supporting-bg-light">
              Enter the details below and register
            </p>
          </div>

          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(handleRegister)}
          >
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="Full_name" className="text-base font-semibold">
                Full Name <span className="font-semibold text-red-700">*</span>
              </label>
              <input
                {...register("full_name")}
                type="text"
                placeholder="Enter your Full Name"
                className="input"
              ></input>
              {errors.full_name && (
                <p className="text-sm text-red-600">
                  {errors.full_name.message}
                </p>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base font-semibold">
                Email <span className="font-semibold text-red-700">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="input"
              ></input>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base font-semibold">
                Password <span className="font-semibold text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={isPasswordShown ? "text" : "password"}
                  className="input pr-10"
                  id="password"
                  placeholder="Enter your password"
                />
                <div className="absolute right-0 top-1/2 w-8 -translate-y-1/2 cursor-pointer">
                  {isPasswordShown ? (
                    <ViewIcon
                      width={22}
                      onClick={() => setIsPasswordShown(false)}
                    />
                  ) : (
                    <ViewOffIcon
                      width={22}
                      onClick={() => setIsPasswordShown(true)}
                    />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-sm text-red-700">
                  {errors.password.message}
                </p>
              )}
            </fieldset>

            <div className="my-5 text-center text-sm">
              Already have an account?{" "}
              <span
                className="cursor-pointer font-semibold text-supporting-bg-light"
                onClick={() => {
                  setOpenLoginForm(true);
                  console.log(openLoginForm);
                }}
              >
                Login
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
              <button
                className="primary-btn !flex w-full items-center justify-center gap-2 font-semibold"
                type="submit"
              >
                <div>Sign up</div>

                {isLoading && <Loading />}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <LoginForm closeModal={closeModal} />
      )}
    </>
  );
};
