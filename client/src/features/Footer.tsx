import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CopyrightIcon,
  Facebook02Icon,
  InstagramIcon,
  StarIcon,
  YoutubeIcon,
} from "hugeicons-react";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full gap-20 bg-supporting-bg p-6 md:p-12 lg:px-40 lg:py-20">
      <div className="flex w-1/2 flex-col gap-8">
        <div className="h-[75px] overflow-hidden">
          <p className="font-italiana text-7xl text-core-primary">
            AccessCrate
          </p>
        </div>

        <div className="justify-between">
          <p className="text-2xl font-medium text-white">
            Want to be an organizer?
          </p>
          <div className="mt-5 flex gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-core-primary bg-transparent px-4 text-white focus:outline-none"
            />
            <button className="primary-btn">Submit</button>
          </div>
        </div>
      </div>

      <div className="flex w-1/2 flex-col gap-8">
        <div className="flex w-full justify-between">
          <p className="text-xl font-medium text-white">Contact Us</p>
          <div className="flex gap-4">
            <Facebook02Icon className="text-core-secondary hover:text-core-primary" />
            <InstagramIcon className="text-core-secondary hover:text-core-primary" />
            <YoutubeIcon className="text-core-secondary hover:text-core-primary" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <StarIcon
                className="text-core-primary"
                fill="#FFE500"
                size={15}
              />
              <p className="text-core-secondary">+977 9826127253</p>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon
                className="text-core-primary"
                fill="#FFE500"
                size={15}
              />
              <p className="text-core-secondary">griten186@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <StarIcon className="text-core-primary" fill="#FFE500" size={15} />
            <p className="text-core-secondary">
              Ram bazar, Pokhara - 15, Nepal{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/2">
          <div className="flex flex-wrap justify-between">
            <p
              className="cursor-pointer text-core-secondary hover:text-core-primary"
              onClick={() => navigate("/about-us")}
            >
              About Us
            </p>
            <p
              className="cursor-pointer text-core-secondary hover:text-core-primary"
              onClick={() => navigate("/organizers")}
            >
              Organizers
            </p>{" "}
            <p
              className="cursor-pointer text-core-secondary hover:text-core-primary"
              onClick={() => navigate("/events")}
            >
              Events
            </p>{" "}
          </div>
          <span
            className="inline-block cursor-pointer text-core-secondary hover:text-core-primary"
            onClick={() => navigate("/tickets")}
          >
            Tickets
          </span>{" "}
        </div>

        <div className="flex items-center">
          <CopyrightIcon className="mr-1 text-core-secondary" size={18} />{" "}
          <p className="text-core-secondary">
            2025 AccessCrate. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
