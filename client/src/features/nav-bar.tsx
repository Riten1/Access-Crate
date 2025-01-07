import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import cn from "classnames";

import { RootState } from "../redux/store";
import { LoginModal } from "./auth/modal/LoginModal";
import { SignUpModal } from "./auth/modal/SignUpModal";

export const NavBar = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  return (
    <div
      className={cn(
        className,
        "flex items-center justify-between px-16 py-8 align-middle text-white"
      )}
    >
      <div className="flex gap-8">
        <Link to={"/about-us"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary":
                pathname === "/about-us",
            })}
          >
            About Us
          </div>
        </Link>
        <Link to={"/tickets"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary":
                pathname === "/tickets",
            })}
          >
            Tickets
          </div>
        </Link>

        <Link to={"/events"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary":
                pathname === "/events",
            })}
          >
            Events
          </div>
        </Link>
      </div>

      <Link to={"/"}>
        <div className="font-italiana text-5xl text-core-primary">
          AccessCrate
        </div>
      </Link>

      <div className="flex items-center gap-8 align-middle">
        <Link to={"/organizers"}>
          <div
            className={cn("font-regular text-xl", {
              "rounded-lg bg-core-primary/[8%] !text-core-primary":
                pathname === "/organizers",
            })}
          >
            Organizers
          </div>
        </Link>

        {!loginStatus ? (
          <>
            <button
              className="third-btn"
              onClick={() => setOpenLoginModal(true)}
            >
              Sign In
            </button>
            <button
              className="primary-btn font-semibold"
              onClick={() => setOpenSignUpModal(true)}
            >
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

      <LoginModal
        isOpen={openLoginModal}
        closeModal={() => setOpenLoginModal(false)}
      />

      <SignUpModal
        isOpen={openSignUpModal}
        closeModal={() => setOpenSignUpModal(false)}
      />
    </div>
  );
};
