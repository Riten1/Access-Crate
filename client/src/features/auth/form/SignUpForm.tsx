import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";


interface ILoginForm {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
}).required();
export const SignUpForm = ({closeModal}: {closeModal: () => void}) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm<ILoginForm>({
    resolver: yupResolver(schema)
  });

  function handleLogin(data: ILoginForm) {
  console.log(data)
  } 
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
      <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
      <p className="text-base font-normal text-supporting-bg-light text-center">Enter the details below and register</p>
      </div>
      
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="flex flex-col gap-4">
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

        <fieldset className="flex flex-col gap-4">
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
          <button className="secondary-btn w-full font-semibold" type="button" onClick={closeModal}>Cancel</button>
          <button className="primary-btn w-full font-semibold" type="submit" >Login</button>
        </div>
        
      </form>
    </div>
  )
}
