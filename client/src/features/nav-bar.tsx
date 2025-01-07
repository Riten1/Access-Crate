import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import cn from "classnames";

import Menu from "../components/ui/Burger";
import { RootState } from "../redux/store";
import { LoginModal } from "./auth/modal/LoginModal";
import { SignUpModal } from "./auth/modal/SignUpModal";

export const NavBar = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  return (
    <>
      <div
        className={cn(
          className,
          "hidden items-center justify-between px-16 py-8 align-middle text-white sm:flex sm:px-4 md:px-8 lg:px-16"
        )}
      >
        <div className="flex gap-8">
          <Link to={"/about-us"}>
            <div
              className={cn("font-regular text-sm md:text-lg lg:text-xl", {
                "rounded-lg bg-core-primary/[8%] !text-core-primary":
                  pathname === "/about-us",
              })}
            >
              About Us
            </div>
          </Link>
          <Link to={"/tickets"}>
            <div
              className={cn("font-regular text-sm md:text-lg lg:text-xl", {
                "rounded-lg bg-core-primary/[8%] !text-core-primary":
                  pathname === "/tickets",
              })}
            >
              Tickets
            </div>
          </Link>

          <Link to={"/events"}>
            <div
              className={cn("font-regular text-sm md:text-lg lg:text-xl", {
                "rounded-lg bg-core-primary/[8%] !text-core-primary":
                  pathname === "/events",
              })}
            >
              Events
            </div>
          </Link>
        </div>

        <Link to={"/"}>
          <div className="font-italiana text-xl text-core-primary sm:text-2xl md:text-4xl lg:text-5xl">
            AccessCrate
          </div>
        </Link>

        <div className="flex items-center gap-8 align-middle">
          <Link to={"/organizers"}>
            <div
              className={cn("font-regular text-sm md:text-lg lg:text-xl", {
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
                className="third-btn sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-6 lg:py-3"
                onClick={() => setOpenLoginModal(true)}
              >
                Sign In
              </button>
              <button
                className="primary-btn font-semibold sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-6 lg:py-3"
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
      <div className="z-50 flex items-center justify-between px-12 py-8 sm:hidden">
        <div className="font-italiana text-4xl text-core-primary sm:text-2xl md:text-4xl lg:text-5xl">
          AccessCrate
        </div>
        <Menu />

        {/* <div className="flex flex-col gap-8">
          //   <Link to={"/about-us"}>
          //     <div className="font-regular text-lg">About Us</div>
          //   </Link>
          //   <Link to={"/tickets"}>
          //     <div className="font-regular text-lg">Tickets</div>
          //   </Link>
          //   <Link to={"/events"}>
          //     <div className="font-regular text-lg">Events</div>
          //   </Link>
          //   <Link to={"/organizers"}>
          //     <div className="font-regular text-lg">Organizers</div>
          //   </Link>
          // </div> */}
      </div>
    </>
  );
};
