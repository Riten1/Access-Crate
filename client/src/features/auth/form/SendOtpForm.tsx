import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Loading } from "../../../components/ui/Loading";
import useSendOtpMailMutation from "../../../services/auth/send-otp-mail-mutation";

interface ISendOtpMailProps {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
  })
  .required();
export const SendOtpForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ISendOtpMailProps>({
    resolver: yupResolver(schema),
  });

  const { mutate: sendOtpMail, isLoading } = useSendOtpMailMutation();
  const onSubmit = (data: ISendOtpMailProps) => {
    sendOtpMail(data.email);
  };
  return (
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
        className="primary-btn mt-6 w-full font-semibold"
      >
        Send OTP {isLoading && <Loading />}
      </button>
    </form>
  );
};
