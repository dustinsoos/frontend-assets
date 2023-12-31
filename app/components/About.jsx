import React from "react";

export default function About() {
  return (
    <section className="bg-slate-900 ">
      <hr className=" border-sky-500 mb-20 w-full" />
      <div className=" lg:flex lg:justify-around lg:items-center pb-20  px-8 md:px-16 lg:px-32 xl:px-64  ">
        <div className="grid lg:w-2/3">
          <div className="flex gap-4 items-center">
            <h3 className="text-sky-500 text-3xl font-semibold grid items-end   ">
              About us
            </h3>
            <img
              src="/clock-icon.svg"
              alt="clock-icon"
              className=" animate-pulse w-12 lg:hidden block "
            />
          </div>
          <h4 className="mb-8 md:mb-0 text-white text-2xl">
            Let's save some <span className="text-sky-500">time!</span>
          </h4>

          <p className=" text-slate-400">
            At Frontend Assets, we are a passionate team of developers and
            designers committed to revolutionizing the frontend development
            experience. Our primary goal is to provide a comprehensive platform
            that equips frontend developers with essential resources,
            cutting-edge tools, and a vibrant community to foster collaboration
            and growth. With a focus on enhancing efficiency and promoting
            excellence, we're dedicated to empowering developers to thrive in
            the dynamic world of web development.
          </p>
        </div>
        <img
          src="/clock-icon.svg"
          alt="clock-icon"
          className=" animate-pulse w-1/4 2xl:w-1/6 hidden lg:block"
        />
      </div>
      <hr className=" border-sky-500" />
    </section>
  );
}
