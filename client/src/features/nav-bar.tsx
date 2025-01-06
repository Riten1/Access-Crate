import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { useState } from "react";
import Modal from "../components/ui/modal";
import { LoginForm } from "./auth/form/LoginForm";
import { LoginModal } from "./auth/modal/LoginModal";
import { SignUpModal } from "./auth/modal/SignUpModal";


export const NavBar = ({className} : {className?: string}) => {
  const {pathname} = useLocation()
const [toggleLoginForm, setToggleLoginForm] = useState(false);
const [toggleSignUpModal, setToggleSignUpModal] = useState(false);

  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);
  return (
    <div className={cn(className, "text-white flex justify-between py-8 px-16 items-center align-middle")}>
      <div className="flex gap-8 ">
        <Link to={"/about-us"}>
        <div className={cn("font-regular text-xl ", {
          "rounded-lg bg-core-primary/[8%] !text-core-primary":
          pathname === "/about-us"
        }) }>About Us</div>
        </Link>
        <Link to={"/tickets"}>
        <div className={cn("font-regular text-xl", {
          "rounded-lg bg-core-primary/[8%] !text-core-primary":
          pathname === "/tickets"
        }) }>
          Tickets
        </div>
        </Link>
      
      <Link to={"/events"}>
      <div className={cn("font-regular text-xl", {
          "rounded-lg bg-core-primary/[8%] !text-core-primary":
          pathname === "/events"
        }) }>Events</div>
      </Link>
        
      </div>

      <Link to={"/"}>
        <div className="font-italiana text-5xl text-core-primary">AccessCrate</div>
      </Link>
   

      <div className="flex gap-8 items-center align-middle">
        <Link to={"/organizers"}>
        <div className={cn("font-regular text-xl", {
          "rounded-lg bg-core-primary/[8%] !text-core-primary":
          pathname === "/organizers"
        }) }>Organizers</div>
        </Link>
        
        {
          !loginStatus ? (
            <>
              <button className="third-btn" onClick={() => setToggleLoginForm(true)}>Sign In</button>
              <button className="primary-btn font-semibold" onClick={() => setToggleSignUpModal(true)}>Sign Up</button>
            </>
          ): (
            <>
                <button>Logout</button>
                <button>Profile</button>
            </>
        
          )
        }
      </div>
      {
        toggleLoginForm && (
         <LoginModal isOpen={toggleLoginForm} closeModal={() => setToggleLoginForm(false)}  />
        )
      }
      {
        toggleSignUpModal && (
         <SignUpModal isOpen={toggleSignUpModal} closeModal={() => setToggleSignUpModal(false)}  />
        )
      }
    </div>
  )
}
