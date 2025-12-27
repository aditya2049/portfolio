import React from "react";
import Image from "next/image";
import cryptocoin from "../public/assets/projects/cryptocoin.png";
import netflix from "../public/assets/projects/netflix.png";
import opera from "../public/assets/projects/opera.png";
import valo from "../public/assets/projects/valo.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 pt-24">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Crypto coin" backgroundImg={cryptocoin}  tech={"React.js"} Url="https://ubiquitous-cuchufli-d45539.netlify.app/" />
          <ProjectItem title="Netflix2.0" backgroundImg={netflix} tech={"React.js"} Url="https://netflix20-98131.firebaseapp.com/" />
          <ProjectItem title="Opera" backgroundImg={opera} tech="MERN stack app" Url="https://heartfelt-cassata-4efec5.netlify.app"/>
          <ProjectItem title="Valo.Tracker" backgroundImg={valo} tech="React/Redux" Url="https://659709c8891b402b2db57ae4--whimsical-salamander-ad5f04.netlify.app/"/>
          {/* <ProjectItem title="Crypto coin" backgroundImg={cryptocoin} Url="/" /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
