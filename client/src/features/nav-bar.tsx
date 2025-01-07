import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { useState } from "react";
import Modal from "../components/ui/modal";
import { LoginModal } from "./auth/modal/LoginModal";
import { SignUpModal } from "./auth/modal/SignUpModal";

export const NavBar = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  // Single state variable to manage modal visibility
  const [activeModal, setActiveModal] = useState<"login" | "signup" | "">("");

  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  return (
    <div className={cn(className, "text-white flex justify-between py-8 px-16 items-center align-middle")}>
      {/* Navigation Links */}
      <div className="flex gap-8">
        <Link to={"/about-us"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary": pathname === "/about-us",
            })}
          >
            About Us
          </div>
        </Link>
        <Link to={"/tickets"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary": pathname === "/tickets",
            })}
          >
            Tickets
          </div>
        </Link>

        <Link to={"/events"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary": pathname === "/events",
            })}
          >
            Events
          </div>
        </Link>
      </div>

      {/* Brand Name */}
      <Link to={"/"}>
        <div className="font-italiana text-5xl text-core-primary">AccessCrate</div>
      </Link>

      {/* Right Side Actions */}
      <div className="flex gap-8 items-center align-middle">
        <Link to={"/organizers"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary": pathname === "/organizers",
            })}
          >
            Organizers
          </div>
        </Link>

        {/* Conditional Buttons */}
        {!loginStatus ? (
          <>
            <button className="third-btn" onClick={() => setActiveModal("login")}>
              Sign In
            </button>
            <button className="primary-btn font-semibold" onClick={() => setActiveModal("signup")}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button>Logout</button>
            <button>Profile</button>
          </>
        )}
      </div>

      {/* Modals */}
      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          closeModal={() => setActiveModal("")}
          setActiveModal={setActiveModal} // Allow switching to Sign Up
        />
      )}
      {activeModal === "signup" && (
        <SignUpModal
          isOpen={true}
          closeModal={() => setActiveModal("")}
          setActiveModal={setActiveModal} // Allow switching to Sign In
        />
      )}
    </div>
  );
};
