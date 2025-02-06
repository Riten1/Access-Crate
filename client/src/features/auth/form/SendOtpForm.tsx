import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Loading } from "../../../components/ui/Loading";
import useSendOtpMailMutation from "../../../services/auth/send-otp-mail-mutation";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

interface ISendOtpMailProps {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
  })
  .required();
export const SendOtpForm = ({ closeModal }: { closeModal: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ISendOtpMailProps>({
    resolver: yupResolver(schema),
  });

  const email = getValues("email");

  const [openResetPassword, setOpenResetPassword] = useState(false);
  const { mutate: sendOtpMail, isLoading } = useSendOtpMailMutation(
    reset,
    setOpenResetPassword,
    email
  );

  const onSubmit = (data: ISendOtpMailProps) => {
    sendOtpMail(data.email);
  };
  return (
    <>
      {openResetPassword === false ? (
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-3xl font-semibold">
              Forgot Password
            </h2>
            <p className="text-center text-base font-normal text-supporting-bg-light">
              Enter your registered email address and we will send you a otp to
              reset your password
            </p>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
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
              )}{" "}
            </fieldset>

            <button
              type="submit"
              disabled={isLoading}
              className="primary-btn mt-6 !flex w-full items-center justify-center gap-2 font-semibold"
            >
              <div>Send OTP</div> {isLoading && <Loading />}
            </button>
          </form>
        </div>
      ) : (
        <ForgotPasswordForm
          closeModal={closeModal}
          setOpenResetPassword={setOpenResetPassword}
        />
      )}
    </>
  );
};
