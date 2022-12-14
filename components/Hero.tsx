import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hola!", "Mi nombre es David", "Bienvenido a mi portafolio"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5x1 lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0099ff" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobbre mi</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
