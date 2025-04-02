import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cn from "classnames";
import { ShoppingBag03Icon } from "hugeicons-react";

import HoverUser from "../components/ui/HoverLogin";
import ToggleUser from "../components/ui/ToggleUser";
import { RootState } from "../redux/store";
import { LoginModal } from "./auth/modal/LoginModal";
import { SignUpModal } from "./auth/modal/SignUpModal";

export const NavBar = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [opened, { toggle }] = useDisclosure();
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  // Track scroll position
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div
        className={cn(
          className,
          "hidden items-center justify-between px-16 py-8 align-middle text-white sm:flex sm:px-4 md:px-8 lg:px-16"
        )}
      > */}
      <div
        className={cn(
          className,
          "fixed left-0 top-0 z-50 hidden w-full items-center justify-between px-16 py-6 align-middle text-white backdrop-blur-md transition-all duration-300 sm:flex sm:px-4 md:px-8 lg:px-16",
          scrolled ? "bg-black/20 shadow-md" : "bg-transparent"
        )}
      >
        <div className="flex gap-8">
          <Link to="/events">
            <div
              className={cn(
                "font-regular text-sm duration-200 hover:text-core-primary md:text-lg lg:text-xl",
                {
                  "text-core-primary": pathname === "/events",
                }
              )}
            >
              Events
              <div className="flex items-center justify-center">
                {pathname === "/events" && (
                  <div className="absolute top-20 h-0.5 w-5 rounded-lg bg-core-primary"></div>
                )}
              </div>
            </div>
          </Link>
          <Link to="/tickets">
            <div
              className={cn(
                "font-regular text-sm duration-200 hover:text-core-primary md:text-lg lg:text-xl",
                {
                  "text-core-primary": pathname === "/tickets",
                }
              )}
            >
              Tickets
            </div>
          </Link>
          <Link to="/organizers">
            <div
              className={cn(
                "font-regular text-sm duration-200 hover:text-core-primary md:text-lg lg:text-xl",
                {
                  "text-core-primary": pathname === "/organizers",
                }
              )}
            >
              Organizers
              <div className="flex items-center justify-center">
                {pathname === "/organizers" && (
                  <div className="absolute top-20 h-0.5 w-5 rounded-lg bg-core-primary"></div>
                )}
              </div>
            </div>
          </Link>
        </div>

        <Link to="/">
          <div className="text-xl tracking-[10px] text-core-primary sm:text-2xl md:text-4xl lg:text-2xl">
            Access Crate
          </div>
        </Link>

        <div className="flex items-center gap-8 align-middle">
          <Link to="/about-us">
            <div
              className={cn(
                "font-regular text-sm duration-200 hover:text-core-primary md:text-lg lg:text-xl",
                {
                  "text-core-primary": pathname === "/about-us",
                }
              )}
            >
              About Us
              <div className="flex items-center justify-center">
                {pathname === "/about-us" && (
                  <div className="absolute top-20 h-0.5 w-5 rounded-lg bg-core-primary"></div>
                )}
              </div>
            </div>
          </Link>

          {!loginStatus ? (
            <button
              className="primary-btn !font-poppins font-semibold sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-6 lg:py-3"
              onClick={() => setOpenLoginModal(true)}
            >
              Sign In
            </button>
          ) : (
            <>
              <ShoppingBag03Icon />
              <HoverUser />
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
      {/* Mobile Navbar */}
      <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-12 py-8 backdrop-blur-md transition-all duration-300 sm:hidden">
        <div className="font-italiana text-4xl text-core-primary sm:text-2xl md:text-4xl lg:text-5xl">
          AccessCrate
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="#FFE500"
        />
      </div>
      {opened && (
        <div className="absolute right-0 top-28 z-50 flex flex-col rounded-l-2xl bg-supporting-bg text-right duration-700 sm:hidden">
          <Link to="/about-us">
            <div className="font-regular p-4 text-lg font-semibold text-white duration-150 ease-out hover:bg-supporting-bg-light">
              About Us
            </div>
          </Link>
          <Link to="/tickets">
            <div className="font-regular p-4 text-lg font-semibold text-white duration-150 ease-out hover:bg-supporting-bg-light">
              Tickets
            </div>
          </Link>
          <Link to="/events">
            <div className="font-regular p-4 text-lg font-semibold text-white duration-150 ease-out hover:bg-supporting-bg-light">
              Events
            </div>
          </Link>
          <Link to="/organizers">
            <div className="font-regular p-4 text-lg font-semibold text-white duration-150 ease-out hover:bg-supporting-bg-light">
              Organizers
            </div>
          </Link>
          {!loginStatus ? (
            <button
              className="font-regular bg-core-primary p-4 text-lg font-semibold text-supporting-bg duration-150 ease-out hover:bg-supporting-bg-light"
              onClick={() => setOpenLoginModal(true)}
            >
              Sign In
            </button>
          ) : (
            <>
              <div className="font-regular flex cursor-pointer justify-center bg-core-primary p-4 text-lg font-semibold text-supporting-bg-dark duration-150 ease-out hover:bg-supporting-bg-light">
                <ShoppingBag03Icon />
              </div>
              <div className="font-regular flex cursor-pointer justify-center bg-core-primary p-4 text-lg font-semibold text-supporting-bg-dark duration-150 ease-out hover:bg-supporting-bg-light">
                <ToggleUser />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
