import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import useLoginMutation from "../../../services/auth/signup-mutation";
import useRegisterUserMutation from "../../../services/auth/signup-mutation";


interface ILoginForm {
  full_name: string;
  email: string;
  password: string;
  address?: string
  contact_info: string
  profile_pic?: any
}
const schema = yup.object({
  full_name: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  contact_info: yup.string().required("Phone Number is required"),
}).required();
export const SignUpForm = ({closeModal, setActiveModal}: {closeModal: () => void, setActiveModal: (modal: "login" | "signup" | "") => void;}) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm<ILoginForm>({
    resolver: yupResolver(schema)
  });

const {mutate: registerUser, isLoading} = useRegisterUserMutation();

function handleRegister(data: ILoginForm) {
  const formData : any = new FormData();
  formData.append("full_name", data.full_name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("address", data?.address || "");
  formData.append("contact_info", data.contact_info);
 
  if (data.profile_pic && data.profile_pic[0]) {
    formData.append("profile_pic", data.profile_pic[0]); // Add the file object
  }

  registerUser(formData);
}


  
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
      <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
      <p className="text-base font-normal text-supporting-bg-light text-center">Enter the details below and register</p>
      </div>
      
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(handleRegister)}>
      <input type="file" {...register("profile_pic")}></input>
      <fieldset className="flex flex-col gap-2">
          <label htmlFor="Full_name" className="text-base font-semibold">Full Name {" "}
            <span className="text-red-700 font-semibold">
              *
              </span>
          </label>
          <input {...register("full_name")} type="text" placeholder="Enter your Full Name" className="input"></input>
          {
            errors.full_name && (
              <p className="text-red-600 text-sm">{errors.full_name.message}</p>
            )
          }
        </fieldset>
        
        
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base font-semibold">Email {" "}
            <span className="text-red-700 font-semibold">
              *
              </span>
          </label>
          <input {...register("email")} type="email" placeholder="Enter your email" className="input"></input>
          {
            errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )
          }
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-semibold">Password {" "}
            <span className="text-red-600 font-semibold">
              *
              </span>
          </label>
          <input {...register("password")} type="password" placeholder="Enter your password" className="input"></input>
          {
            errors.password && (
              <p className="text-red-700 text-sm">{errors.password.message}</p>
            )
          }
        </fieldset>

<div className="flex justify-between gap-4">

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="address" className="text-base font-semibold">Location {" "}
         
          </label>
          <input {...register("address")} type="text" placeholder="Enter your address" className="input"></input>
          
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="contact_info" className="text-base font-semibold">Phone Number {" "}
            <span className="text-red-700 font-semibold">
              *
              </span>
          </label>
          <input {...register("contact_info")} type="number" placeholder="Enter your phone number" className="input"></input>
          {
            errors.contact_info && (
              <p className="text-red-600 text-sm">{errors.contact_info.message}</p>
            )
          }
          
        </fieldset>
       
        </div>
        <div className="text-sm text-center my-5">
        Already have an account?{" "}
        <span
          className="text-core-primary cursor-pointer underline"
          onClick={() => {
            setActiveModal("login");
            closeModal();
          }}
        >
          Login
        </span>
      </div>
        
        <div className="flex justify-between gap-4">
          <button className="secondary-btn w-full font-semibold" type="button" onClick={closeModal}>Cancel</button>
          <button className="primary-btn w-full font-semibold" type="submit" >Login</button>
        </div>
        
      </form>

      
    </div>
  )
}
