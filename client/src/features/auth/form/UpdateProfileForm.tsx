import React, { useEffect, useState } from "react";

import { PencilEdit02Icon } from "hugeicons-react";
import { useForm } from "react-hook-form";

import { Loading } from "../../../components/ui/Loading";
import useGetCurrentAccountQuery from "../../../services/auth/get-current-account-query";
import { getProfilePictureAlternative } from "../../../utils/pictureAlternative";

export const UpdateProfileForm = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const [image, setImage] = useState<File | string | null | undefined>(null);
  const { data: profile, isLoading } = useGetCurrentAccountQuery();

  useEffect(() => {
    setImage(profile?.data.profile_pic);
  }, [profile?.data.profile_pic]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      full_name: profile?.data.full_name,
      email: profile?.data.email,
      contact_info: profile?.data.contact_info,
      address: profile?.data.address,
    },
  });

  const handleUpdateProfile = (data: any) => {
    
  };
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-3xl font-semibold">Profile</h2>
        <p className="text-center text-base font-normal text-supporting-bg-light">
          Update your profile details
        </p>
      </div>

      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(handleUpdateProfile)}
      >
        <div className="flex items-center justify-center">
          <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gray-200">
            {image === null ? (
              <div className="text-[30px] font-semibold">
                {getProfilePictureAlternative(profile?.data.full_name)}
              </div>
            ) : (
              <>
                {image ? (
                  <div className="flex items-center justify-center gap-[8px]">
                    <img
                      src={
                        typeof image === "string"
                          ? image
                          : URL.createObjectURL(image)
                      }
                      className="h-[80px] w-[80px] rounded-full object-cover"
                    />
                  </div>
                ) : null}
              </>
            )}
            <div className="absolute bottom-0 right-0 flex cursor-pointer items-center justify-center rounded-full bg-white p-[3px]">
              <label>
                <PencilEdit02Icon className="text-supporting-info cursor-pointer" />
                <input
                  onChange={handleImageChange}
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="Full_name" className="text-base font-semibold">
            Full Name <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("full_name")}
            // value={profile?.data.full_name}
            type="text"
            placeholder="Enter your Full Name"
            className="input"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base font-semibold">
            Email <span className="font-semibold text-red-700">*</span>
          </label>
          <input
            {...register("email")}
            value={profile?.data.email}
            readOnly
            type="email"
            placeholder="Enter your email"
            className="input"
          ></input>
        </fieldset>

        <div className="flex items-center justify-between gap-4">
          <fieldset className="flex w-full flex-col gap-2">
            <label htmlFor="password" className="text-base font-semibold">
              Address <span className="font-semibold text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                {...register("address")}
                type="text"
                className="input pr-10"
                id="address"
                placeholder="Enter your address"
              />
            </div>
          </fieldset>

          <fieldset className="flex w-full flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-base font-semibold">
              Phone Number <span className="font-semibold text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                {...register("contact_info")}
                type="number"
                className="input pr-10"
                id="address"
                placeholder="Enter your phone number"
              />
            </div>
          </fieldset>
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
            <div>Update</div>

            {isLoading && <Loading />}
          </button>
        </div>
      </form>
    </div>
  );
};
