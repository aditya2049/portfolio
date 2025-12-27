import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { Exp } from "@/app/staticText/Exp";

const Experience = () => {
  return (
    <div id="experience" className="w-full h-full p-2 py-20 pb-20 items-center">
      <div className="max-w-[1240px] m-auto ">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">Where I've worked/working</h2>
        {Exp?.graphic_Design?.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full p-6 mt-2 shadow-xl rounded-xl hover:scale-105  duration-200"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="text-xl font-bold">{data?.position}</div>
                  <p className="text-[#5651e5] flex items-center py-1">
                    {data?.companyName}
                    <Link
                      href={data?.websiteLink ?? "#"}
                      target="_blank"
                      className="px-1"
                    >
                      <HiExternalLink />
                    </Link>
                  </p>
                  <ul className="px-6 py-1">
                    <li className="list-disc py-2">{data?.line_1}</li>
                    <li className="list-disc">{data?.line_2}</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center m-auto h-full">
                  {data?.images?.map((image, index) => {
                    return (
                      <>
                        <Image
                          className="mx-2 hover:scale-150 rounded-lg duration-200"
                          src={image?.image_link}
                          width="150"
                          height="100"
                          alt="image"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {Exp?.development?.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full px-6 py-8 shadow-xl rounded-xl hover:scale-105  duration-200"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="text-xl font-bold">{data?.position}</div>
                  <p className="text-[#5651e5] flex items-center py-1">
                    {data?.companyName}
                    <Link
                      href={data?.websiteLink ?? "#"}
                      target="_blank"
                      className="px-1"
                    >
                      <HiExternalLink />
                    </Link>
                  </p>
                  <ul className="px-6 py-1">
                    <li className="list-disc py-2">{data?.line_1}</li>
                    <li className="list-disc">{data?.line_2}</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center m-auto gap-1">
                  {data?.tech_logos?.map((logo, index) => {
                    return (
                      <>
                        <Image
                          src={logo?.link}
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
