import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
const Track = () => {
    return (
        <>

            <div className="bg-pink-200 py-40">
                <p className="lg:px-10 text-center pb-5 lg:text-8xl text-white font-outline-4 font-bold text-5xl">TICKETS</p>
                <div className="">
                    <p className="py-10 text-[#74064a] font-bold font-outline-10  text-center text-4xl lg:text-6xl">IEEE
                        MEMBERS <br/></p>
                </div>
                <div className="">
                    <div className="lg:flex lg:px-40 ">
                        <div id="new"
                             className="lg:w-1/3  px-6 mx-10 pt-6 mb-10 lg:mb-0  bg-[#ff93c7] text-white rounded-3xl">
                            <p className="text-center font-bold font-outline-10 text-[#74064a] text-4xl"> IEEE <br/>STUDENT <br/> MEMBER
                            </p>
                            <p className="text-center font-bold font-outline-10 text-4xl text-[#74064a]">₹2500</p>
                            <p className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                            <p className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                        </div>

                        <div id="new"
                             className="lg:w-1/3 px-6 mx-10 pt-6 mb-10 lg:mb-0 bg-[#ff93c7] text-white rounded-3xl ">
                            <p id="tickp1"
                               className="text-center font-bold font-outline-10 text-[#74064a] text-4xl"> IEEE
                                PROFESSIONAL <br/> (ACADEMIC) </p>
                            <p id="tickp2"
                               className="text-center font-bold font-outline-10 text-4xl text-[#74064a]">₹6500</p>
                            <p id="buy"
                               className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                        </div>

                        <div id="new"
                             className="lg:w-1/3 px-6 pt-6 mx-10 mb-10 lg:mb-0  bg-[#ff93c7] text-white rounded-3xl">
                            <p id="tickp1"
                               className="text-center font-bold font-outline-10 text-[#74064a] text-4xl "> IEEE
                                PROFESSIONAL <br/> (INDUSTRY) </p>
                            <p id="tickp2"
                               className="text-center font-bold font-outline-10 text-4xl text-[#74064a]">₹8500</p>
                            <p id="buy"
                               className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                        </div>


                    </div>
                    <div className="inn ">
                        <p id="IEEEM1t"
                           className="py-10 text-[#74064a] font-bold font-outline-10  text-center text-4xl lg:text-6xl">NON
                            IEEE <br/> STUDENTS <br/></p>
                    </div>
                    <div className="lg:flex lg:px-40  ">

                        <div id="new"
                             className=" lg:w-1/3 px-6 mb-10 lg:mb-0  pt-6 mx-10  bg-[#ff93c7] text-white rounded-3xl ">
                            <p id="tickp1"
                               className="text-center font-bold font-outline-10 text-[#74064a] text-4xl"> STUDENT <br/> MEMBER
                            </p>
                            <p id="tickp2"
                               className="text-center font-bold font-outline-10 text-4xl text-[#74064a]">₹3000</p>
                            <p id="buy"
                               className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                        </div>

                        <div id="new"
                             className="lg:w-1/3 px-6 mb-10 lg:mb-0  pt-6 mx-10 bg-[#ff93c7] text-white rounded-3xl ">
                            <p id="tickp1"
                               className="text-center font-bold font-outline-10 text-[#74064a] text-4xl"> PROFESSIONAL <br/> (ACADEMIC)
                            </p>
                            <p id="tickp2"
                               className="text-center font-bold font-outline-10 text-4xl text-[#74064a]">₹7500</p>
                            <p id="buy"
                               className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                        </div>

                        <div id="new"
                             className="lg:w-1/3 px-6 mb-10 lg:mb-0  pt-6 mx-10 bg-[#ff93c7] text-white rounded-3xl ">
                            <p id="tickp1"
                               className="text-center font-bold font-outline-10 text-[#74064a] text-4xl"> PROFESSIONAL <br/> (INDUSTRY)
                            </p>
                            <p id="tickp2"
                               className="text-center font-bold font-outline-10 text-4xl text-[#74064a]">₹9500</p>
                            <p id="buy"
                               className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Track;
