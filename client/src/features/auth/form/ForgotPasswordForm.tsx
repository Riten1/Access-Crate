import React from "react";
import { useSearchParams } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft02Icon } from "hugeicons-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Loading } from "../../../components/ui/Loading";
import useResetPasswordMutation from "../../../services/auth/create-new-password-mutation";

interface IConfirmPasswordProps {
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

const schema = yup.object({
  otp: yup.string().required("OTP is required"),
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup.string().required("Confirm Password is required"),
});
export const ForgotPasswordForm = ({
  setOpenResetPassword,
  closeModal,
}: {
  closeModal: () => void;
  setOpenResetPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IConfirmPasswordProps>({
    resolver: yupResolver(schema),
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const email = searchParams.get("email");
  const { mutate: resetPassword, isLoading } = useResetPasswordMutation({
    closeModal,
    reset,
    setSearchParams
  });
  const onSubmit = (data: IConfirmPasswordProps) => {
    resetPassword({
      email,
      otp: data.otp,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <ArrowLeft02Icon
          className="cursor-pointer"
          onClick={() => {
            setOpenResetPassword(false);
            setSearchParams({});
          }}
        />
        <div>
          <h2 className="text-center text-3xl font-semibold">Reset Password</h2>
          <p className="text-center text-base font-normal text-supporting-bg-light">
            Enter and confirm your password to reset the password.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <fieldset>
          <label htmlFor="otp" className="text-base font-semibold">
            Otp <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("otp")}
            type="text"
            placeholder="Enter otp"
            className="input"
          />
          {errors.otp && (
            <p className="text-sm text-red-600">{errors.otp.message}</p>
          )}{" "}
        </fieldset>
        <fieldset>
          <label htmlFor="newPassword" className="text-base font-semibold">
            New Password <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("newPassword")}
            type="text"
            className="input"
            placeholder="Enter new password"
          />
          {errors.newPassword && (
            <p className="text-sm text-red-600">{errors.newPassword.message}</p>
          )}{" "}
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword" className="text-base font-semibold">
            Confirm Password{" "}
            <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("confirmPassword")}
            type="text"
            className="input"
            placeholder="Enter password again"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}{" "}
        </fieldset>
        <button
          type="submit"
          disabled={isLoading}
          className="primary-btn mt-6 !flex w-full items-center justify-center gap-2 font-semibold"
        >
          <div>Reset Password</div> {isLoading && <Loading />}
        </button>
      </form>
    </div>
  );
};
