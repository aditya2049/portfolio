"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmscskg",
        "template_1dsm6ar",
        form.current,
        "ON9gnW5SfP7E5LRXV"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const notify = () => {
    toast.success("Sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const form = useRef();

  return (
    <div id="contact" className="w-full lg:h-screen mt-16">
      <div className="w-full mx-auto pb-8 pt-24 px-2 max-w-[1240px]">
        <p className="w-full tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 py-1 ease-in duration-300"
                  src="/assets/projects/contact.jpg"
                  height="450"
                  width="420"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Aditya Yadav</h2>
                <p>Web Developer || UI Designer</p>
                <p className="py-4">
                  I'm available for freelance and full-time positions. Let's
                  connect and talk!
                </p>
              </div>

              <div className="pt-20">
                <p className="uppercase text-[#5651e5]"> connect with me</p>
                <div className=" justify-between flex items-center py-4">
                  <Link
                    href="https://www.linkedin.com/in/aditya-yadav-348052289/"
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://github.com/aditya2049"
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBxqGCMSmgwBScTLzJVGnJtFzQNBFjZNpPpgPXkZRcBTJHvFNFZDDWnRVjmdzZgKmKtFDx"
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1ZPJpCtf5LDED_lpUAwZnmfUb8oREvQi0/view?usp=drive_link"
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl shadow-gray-400 h-auto w-full rounded-xl lg:p-4 col-span-3">
            <div className="py-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 py-2 w-full ">
                  <div className="flex flex-col">
                    <label className="py-2 uppercase text-sm mx-1">Name</label>
                   <input className="border-2 rounded-lg flex p-3 mx-1 border-gray-300" type="text" name="user_name" />
                 </div>

                 <div className="flex flex-col">
                  <label className="py-2 uppercase text-sm mx-1">Phone Number</label>
                   <input className="border-2 rounded-lg flex p-3 mx-1 border-gray-300" type="text"  name="user_phone"/>
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg flex p-3 mx-1 border-gray-300"
                    type="email"
                    name="from_email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg flex p-3 mx-1 border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm uppercase py-2">message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="8"
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="uppercase w-full p-4 mt-4 text-gray-100 bg-[#5651e5]"
                  type="submit"
                  // onClick={notify}
                >
                  send message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link
            href="/#home"
            className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
