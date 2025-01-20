import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Loading } from "../../../components/ui/Loading";
import { useChangeCurrentPassswordMutation } from "../../../services/auth/change-current-password-mutation";

interface IChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
const schema = yup
  .object({
    currentPassword: yup.string().required("Current Password is required"),
    newPassword: yup.string().required("New Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required"),
  })
  .required();
export const ChangePasswordForm = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IChangePasswordForm>({
    resolver: yupResolver(schema),
  });

  const { mutate: changePassword, isLoading } =
    useChangeCurrentPassswordMutation({ closeModal, reset });

  function handleChangepasswordSubmit(data: IChangePasswordForm) {
    changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    });
  }
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-3xl font-semibold">Change Password</h2>
        <p className="text-center text-base font-normal text-supporting-bg-light">
          Change your current password
        </p>
      </div>

      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(handleChangepasswordSubmit)}
      >
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="currentPassword" className="text-base font-semibold">
            Current Password{" "}
            <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("currentPassword")}
            type="text"
            placeholder="Enter your password"
            className="input"
          ></input>

          {errors.currentPassword && (
            <p className="text-sm text-red-600">
              {errors.currentPassword.message}
            </p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="text-base font-semibold">
            New Password <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("newPassword")}
            type="text"
            placeholder="Enter your new password"
            className="input"
          ></input>

          {errors.newPassword && (
            <p className="text-sm text-red-600">{errors.newPassword.message}</p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-base font-semibold">
            Confirm Password{" "}
            <span className="font-semibold text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword")}
              type="text"
              className="input pr-10"
              id="confirmPassword"
              placeholder="Re-enter your new password"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-700">
              {errors.confirmPassword.message}
            </p>
          )}
        </fieldset>

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
            <div>Submit</div>

            {isLoading && <Loading />}
          </button>
        </div>
      </form>
    </div>
  );
};
