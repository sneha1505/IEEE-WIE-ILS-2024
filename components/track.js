import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
const Track = () => {
    return (
        <>

            <div className="bg-[#ffcdfc] ">
                <div className="text-center flex pt-0 justify-center">

                    <h1 className="-white text-7xl  font-outline-4  font-bold text-white  text-stroke text-stroke-white tracking-wider text-center pt-20 ">
                        <a className="underline decoration-dotted  decoration-[#74064a]"> TRACKS</a>
                    </h1>

                </div>
                <img className="-mt-32 ml-20 lg:block hidden" src="/WIE_purple_pms526.png"/>
                <div></div>
                <div className=" lg:flex block lg:-mb-20">
                    <div className="flex w-1/3">

                    </div>
                    <div className="lg:w-1/3 w-full px-6 lg:px-0  pt-10">
                        <h2 className="text-xl text-[#74064A] font-bold ">WOMEN IN CREATIVE ART</h2>
                        <p className="text-black ">To celebrate and promote the creative talents of women. Showcases the
                            achievements and contributions of women in various creative arts, including visual arts,
                            literature, music, and more. It encourages women to express themselves creatively and
                            highlights the importance of diversity in the arts.
                        </p>
                    </div>
                    <div className="flex w-1/3">

                    </div>
                </div>
                <div className="lg:flex block -mt-24 lg:-mt-0 pt-28">
                    <div className="lg:w-1/4 w-full px-6 lg:px-5 lg:ml-10 pt-10">
                        <h2 className="text-xl text-[#74064A] font-bold ">CYBERSECURITY IN DIGITAL ERA</h2>
                        <p className="text-black ">
                            This theme explores the evolving threats and strategies for safeguarding digital assets,
                            personal information, and critical infrastructure through discussions, workshops, and expert
                            insights.


                        </p>
                    </div>
                    <div className=" w-1/4">

                    </div>
                    <div className=" lg:w-1/4 w-full px-6 lg:px-0  pt-10 ">
                        <h2 className="text-xl text-[#74064A] font-bold ">WOMEN SOCIAL CAUSE</h2>
                        <p className="text-black ">
                            To raise awareness and mobilize action for women-related social causes. Dedicated to
                            addressing social issues that disproportionately affect women, such as gender-based
                            violence,
                            access to education, and healthcare disparities.


                        </p>
                    </div>
                    <div className="w-1/4  pt-10">

                    </div>
                </div>
                <div className=" lg:flex -mt-40 lg:-mt-0 block pt-40">
                    <div className="w-1/4">

                    </div>
                    <div className="lg:w-1/4 w-full  lg:ml-40 pt-10 pl-5">
                        <h2 className="text-xl text-[#74064A] font-bold">JOURNEY OF ENTREPRENEURSHIP</h2>
                        <p className="text-black ">
                            To inspire and educate individuals interested in entrepreneurship. Themes delves into the
                            entrepreneurial journey, featuring successful entrepreneurs sharing their experiences and
                            insights.


                        </p>
                    </div>
                    <div className=" w-1/4">

                    </div>
                    <div className="lg:w-1/3  lg:ml-20 w-full  px-5 lg:px-5  pt-10">
                        <h2 className="text-xl text-[#74064A] font-bold ">WORK LIFE BALANCE AND WELL BEING</h2>
                        <p className="text-black ">
                            To promote holistic well-being and work-life balance. Addresses the challenges of
                            maintaining
                            a healthy work-life balance in today's fast-paced world.


                        </p>
                    </div>
                </div>
                <img src="/back1.webp" className=" lg:block hidden w-full mt-[-580px]"/>
            </div>

            <div className=" lg:flex lg:px-20 lg:-mt-20 block pb-40 bg-[#ffcdfc] ">
                <div className="lg:w-1/3 w-full px-6 lg:px-0  pt-10">
                    <h2 className="text-xl text-[#74064A] font-bold">SUSTAINABILITY AND ENGINEERING FOR SOCIAL
                        IMPACT </h2>
                    <p className="text-black  ">
                        To explore innovative solutions in engineering that address pressing global issues. Represents
                        intersection of sustainability and engineering, with a particular emphasis on climate change
                        mitigation, advancements in biomedical engineering, and the harnessing of renewable sources of
                        energy.


                    </p>
                </div>
                <div className=" w-1/4">

                </div>
                <div className="lg:w-1/3 w-full px-6 lg:px-0  pt-10 ">
                    <h2 className="text-xl text-[#74064A] font-bold ">EMPOWERING WOMEN LEADERS</h2>
                    <p className="text-black ">

                        To empower and support women leaders in adapting to an evolving professional landscape. Focuses
                        on
                        the unique challenges and opportunities faced by women in leadership roles. It aims to provide
                        women with the skills, knowledge, and network they need to excel in various fields


                    </p>
                </div>
                <div className="w-1/4  pt-10 pr-10">

                </div>
            </div>

        </>
    );
}

export default Track;