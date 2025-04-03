import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser";
import {
  CopyrightIcon,
  Facebook02Icon,
  InstagramIcon,
  StarIcon,
  YoutubeIcon,
} from "hugeicons-react";
import toast from "react-hot-toast";

import { Loading } from "../components/ui/Loading";

const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_KEY;
const publicId = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY;
export const Footer = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          toast.success("Request sent successfully. We will get back to you.");
          form.current?.reset();
        },
        (error) => {
          toast.error("Failed to send request: " + error.text);
        }
      )
      .finally(() => setLoading(false));
  };

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
          <div className="flex gap-4">
            <form
              ref={form}
              onSubmit={handleSendEmail}
              className="mt-5 flex w-full gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-core-primary bg-transparent px-4 text-white focus:outline-none"
              />
              <button
                disabled={loading}
                type="submit"
                className={`primary-btn flex items-center ${loading && "opacity-80"}`}
              >
                <p>Submit</p>
                <p className="ml-2">{loading && <Loading />}</p>
              </button>
            </form>
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

        <div className="flex w-1/2 flex-col gap-2">
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
