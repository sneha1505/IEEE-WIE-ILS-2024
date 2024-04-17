import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";


const individuals = [
    { name: "Kathleen A. Kramer", image: "/speaker 1.png" },
    { name: "Takako Hashimoto", image: "/speaker2.png" },
    { name: "Dr. Sadhana Attavar", image: "/speaker5.png" },
    { name: "Dr. Tripita Thakur", image: "/speaker11.png" },
    { name: "Dr. Preeti Bajaj", image: "/speaker5.png" },
    { name: "Dr. Jyotika Athavale", image: "/speaker4.png" },
    { name: "Dr. Ramalatha Marimuthu", image: "/speaker7.png" },
    { name: "Prof. Prerna Gaur", image: "/speaker8.png" },
    { name: "Prof. Rachana Garg", image: "/speaker9.png" },
    { name: "Dr. Agnes Irwanti", image: "/speaker3.png" },
    { name: "Dr. Surekha Deshmukh", image: "/speaker11.png" },
    { name: "Dr. Rajashree Jain", image: "/speaker14.png" }
];

// Group individuals into sets of 3
const groupedIndividuals = [];
for (let i = 0; i < individuals.length; i += 3) {
    groupedIndividuals.push(individuals.slice(i, i + 3));
}

const individualsHTML = groupedIndividuals.map((group, index) => (
    <div key={index} className="px-5 justify-center lg:flex block lg:px-40 lg:space-x-10">
        {group.map((person, idx) => (
            <div key={idx} className="lg:w-1/3 pt-12">
                <div className="block rounded-lg">
                    <div className="flex justify-center">
                        <img draggable="false" src={person.image}
                             className="mx-auto rounded-full shadow-lg lg:w-40 lg:h-40 w-32 h-32"
                             alt="Avatar"/>
                    </div>
                    <div className="pt-28 pb-12  rounded-3xl -mt-20 bg-violet-950">
                        <h5 className="select-none text-2xl font-bold text-center text-white">
                            {person.name}
                        </h5>
                    </div>
                </div>
            </div>
        ))}
    </div>
));

const Hero = () => {
  return (
      <>

          <div className="bg-[#ffb0fa]   pt-20 ">

              <div className="lg:pl-24 ">
                  <h2 className="lg:text-5xl text-4xl text-[#452c63] lg:pb-0 pb-5  font-bold font-serif bold text-center ">
                      <p className="ns">IEEE WIE INTERNATIONAL LEADERSHIP SUMMIT</p>
                  </h2>
                  <h1 className=" font-serif bold font-bold text-white  text-center lg:text-2xl text-[13px] lg:text-7xl">
                      <p className="RI">Resilience and Innovation</p>
                  </h1>
                  <h2 className="lg:text-5xl pb-10 lg:text-2xl text-[13px] text-[#452c63]  font-bold font-serif  text-center ">
                      <p className="ns">Navigating A Sustainable Future</p>
                  </h2>
              </div>
              <div className="">
                  <img className="mt-[-10px] lg:w-[70%] w-[100%] mx-auto" src="/We%20Are%20Women%20Close%20Up.png"/>
              </div>
          </div>
          <div className="px-10 lg:flex  bg-white block">
              <div className="lg:w-1/2 text-black w-full">
                  <h1 className="lg:text-7xl text-5xl pt-10 font-bold pb-1">
                      WIE AGENDA
                  </h1>
                  <h2 className="text-4xl font-bold pb-5">
                      IEEE WIE strives to
                  </h2>
                  <p className="w-full">
                      Recognize the outstanding achievements of women in electrical and electronics engineering through
                      IEEE
                      Awards nominations.
                      Organize receptions at major technical conferences to enhance networking and to promote membership
                      in
                      WIE.
                      Advocate women in leadership roles in IEEE governance, and career advancement for women in the
                      profession.
                      Provide assistance with the formation of new WIE Affinity Groups, and support ongoing activities.
                  </p>
                  <p className="lg:text-6xl text-5xl py-5 font-bold">
                      ABOUT US
                  </p>
                  <p className="w-full">
                      The IEEE WIE International Leadership Summit (ILS) is an annual program by IEEE WIE, addressing
                      the
                      under representation of women in science, engineering, and technology. IEEE WIE ILS began in 2015
                      in
                      Chennai with the theme 'Beyond Yourself – Leveraging Strengths, Breaking Barriers,' drawing over
                      200
                      participants. IEEE WIE ILS is known for its networking, mentorship, and collaboration
                      opportunities.
                      These regional summits continue to empower and support women in education and career development,
                      part
                      of IEEE WIE's global initiatives in Empowerment, Entrepreneurship, Leadership, and Emerging
                      Technology.
                      IEEE WIE ILS provide regional opportunities to foster networking, mentorship, and collaboration.
                      With
                      the leadership and creativity of volunteers, WIE will continue the WIE ILS program in 2020 as part
                      of
                      the portfolio of global initiatives that focus on Empowerment, Entrepreneurship, Leadership, and
                      Emerging/Future Technology
                  </p>
                  <p className="lg:pb-0 pb-20">
                      The IEEE WIE International Leadership Summit (ILS) is an annual program by IEEE WIE, addressing
                      the
                      under representation of women in science, engineering, and technology. IEEE WIE ILS began in 2015
                      in
                      Chennai with the theme 'Beyond Yourself – Leveraging Strengths, Breaking Barriers,' drawing over
                      200
                      participants. IEEE WIE ILS is known for its networking, mentorship, and collaboration
                      opportunities.
                      These regional summits continue to empower and support women in education and career development,
                      part
                      of IEEE WIE's global initiatives in Empowerment, Entrepreneurship, Leadership, and Emerging
                      Technology.
                      IEEE WIE ILS provide regional opportunities to foster networking, mentorship, and collaboration.
                      With
                      the leadership and creativity of volunteers, WIE will continue the WIE ILS program in 2020 as part
                      of
                      the portfolio of global initiatives that focus on Empowerment, Entrepreneurship, Leadership, and
                      Emerging/Future Technology
                  </p>
              </div>
              <div className="w-1/2 lg:block hidden">
                  <img className=" w-[120%]  mx-auto" src="/back.webp"/>
              </div>
          </div>

          <div className="bg-[#ffcdfc] ">
              <div className="text-center flex pt-0 justify-center">

                  <h1 className="-white lg:text-7xl text-5xl  lg:font-outline-4   font-bold text-white  text-stroke text-stroke-white tracking-wider text-center pt-20 ">
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
                          addressing social issues that disproportionately affect women, such as gender-based violence,
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
                          To promote holistic well-being and work-life balance. Addresses the challenges of maintaining
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

                      To empower and support women leaders in adapting to an evolving professional landscape. Focuses on
                      the unique challenges and opportunities faced by women in leadership roles. It aims to provide
                      women with the skills, knowledge, and network they need to excel in various fields


                  </p>
              </div>
              <div className="w-1/4  pt-10 pr-10">

              </div>
          </div>


          <div className="bg-purple-300 pb-40 ">
              <h1 className="-white lg:text-7xl text-5xl lg:pt-28 pt-20 lg:-mb-40  lg:font-outline-4   font-bold text-white  text-stroke text-stroke-white tracking-wider text-center  ">
                  <a className="underline decoration-dotted  decoration-[#74064a]"> SPEAKERS</a>
              </h1>
              <div className='lg:-mb-32 lg:flex hidden -mb-12'>
                  <svg className="lg:block hidden lg:w-1/4 h-400 w-400   z-0" xmlns="http://www.w3.org/2000/svg"
                       width="304" height="302" viewBox="0 0 544 762" fill="none">
                      <g opacity="0.5">
                          <path
                              d="M658.989 527.8C659.448 526.212 657.891 524.785 656.349 525.379L651.103 527.4C649.81 527.898 649.403 529.527 650.31 530.575L653.807 534.616C654.845 535.816 656.801 535.387 657.241 533.862L658.989 527.8Z"
                              fill="white"/>
                          <path
                              d="M595.119 601.608C595.577 600.02 594.02 598.593 592.478 599.187L584.547 602.242C583.255 602.74 582.847 604.37 583.754 605.417L589.041 611.527C590.08 612.727 592.035 612.298 592.475 610.773L595.119 601.608Z"
                              fill="white"/>
                          <path
                              d="M530.353 676.451C530.811 674.863 529.255 673.436 527.712 674.03L519.782 677.085C518.489 677.583 518.082 679.212 518.988 680.26L524.275 686.37C525.314 687.57 527.27 687.14 527.709 685.615L530.353 676.451Z"
                              fill="white"/>
                          <path
                              d="M464.692 752.327C465.15 750.739 463.594 749.313 462.052 749.907L456.806 751.927C455.513 752.425 455.106 754.055 456.012 755.103L459.51 759.144C460.548 760.344 462.504 759.914 462.944 758.39L464.692 752.327Z"
                              fill="white"/>
                          <path
                              d="M659.884 377.08C660.342 375.492 658.786 374.066 657.244 374.66L649.313 377.715C648.02 378.213 647.613 379.842 648.52 380.89L653.807 386.999C654.845 388.2 656.801 387.77 657.241 386.245L659.884 377.08Z"
                              fill="white"/>
                          <path
                              d="M596.909 449.855C597.367 448.267 595.81 446.84 594.268 447.434L580.968 452.557C579.675 453.055 579.268 454.685 580.174 455.732L589.041 465.979C590.08 467.179 592.035 466.749 592.475 465.224L596.909 449.855Z"
                              fill="white"/>
                          <path
                              d="M533.956 522.602C534.414 521.014 532.858 519.587 531.316 520.181L512.575 527.4C511.282 527.898 510.875 529.527 511.782 530.575L524.275 545.013C525.314 546.213 527.27 545.783 527.709 544.258L533.956 522.602Z"
                              fill="white"/>
                          <path
                              d="M469.191 597.444C469.649 595.856 468.092 594.429 466.55 595.023L447.809 602.242C446.517 602.74 446.109 604.37 447.016 605.417L459.51 619.855C460.548 621.055 462.504 620.626 462.944 619.101L469.191 597.444Z"
                              fill="white"/>
                          <path
                              d="M402.611 674.382C403.069 672.794 401.513 671.368 399.971 671.962L386.67 677.085C385.378 677.583 384.97 679.212 385.877 680.26L394.744 690.507C395.782 691.707 397.738 691.277 398.178 689.752L402.611 674.382Z"
                              fill="white"/>
                          <path
                              d="M336.056 751.293C336.514 749.705 334.957 748.279 333.415 748.873L325.484 751.927C324.192 752.425 323.784 754.055 324.691 755.103L329.978 761.212C331.017 762.412 332.972 761.983 333.412 760.458L336.056 751.293Z"
                              fill="white"/>
                          <path
                              d="M658.989 228.429C659.448 226.841 657.891 225.415 656.349 226.009L651.103 228.029C649.81 228.527 649.403 230.157 650.31 231.205L653.807 235.246C654.845 236.446 656.801 236.016 657.241 234.492L658.989 228.429Z"
                              fill="white"/>
                          <path
                              d="M596.909 300.169C597.367 298.581 595.81 297.155 594.268 297.749L580.968 302.872C579.675 303.37 579.268 305 580.174 306.047L589.041 316.294C590.08 317.494 592.035 317.064 592.475 315.539L596.909 300.169Z"
                              fill="white"/>
                          <path
                              d="M534.851 371.882C535.309 370.294 533.753 368.867 532.211 369.462L510.785 377.715C509.492 378.213 509.085 379.842 509.992 380.89L524.275 397.396C525.314 398.596 527.27 398.166 527.709 396.641L534.851 371.882Z"
                              fill="white"/>
                          <path
                              d="M472.77 443.622C473.228 442.034 471.672 440.608 470.13 441.202L440.65 452.557C439.357 453.055 438.95 454.685 439.856 455.732L459.51 478.443C460.548 479.644 462.504 479.214 462.944 477.689L472.77 443.622Z"
                              fill="white"/>
                          <path
                              d="M408.005 518.465C408.463 516.877 406.906 515.45 405.364 516.044L375.884 527.4C374.591 527.898 374.184 529.527 375.091 530.575L394.744 553.286C395.782 554.486 397.738 554.057 398.178 552.532L408.005 518.465Z"
                              fill="white"/>
                          <path
                              d="M340.554 596.41C341.012 594.822 339.456 593.395 337.913 593.989L316.488 602.242C315.195 602.74 314.788 604.37 315.694 605.417L329.978 621.924C331.017 623.124 332.972 622.694 333.412 621.169L340.554 596.41Z"
                              fill="white"/>
                          <path
                              d="M273.08 674.382C273.538 672.794 271.982 671.368 270.439 671.962L257.139 677.085C255.846 677.583 255.439 679.212 256.345 680.26L265.212 690.507C266.251 691.707 268.207 691.277 268.646 689.752L273.08 674.382Z"
                              fill="white"/>
                          <path
                              d="M205.629 752.327C206.087 750.74 204.531 749.313 202.989 749.907L197.743 751.928C196.45 752.425 196.043 754.055 196.949 755.103L200.447 759.144C201.485 760.344 203.441 759.914 203.881 758.39L205.629 752.327Z"
                              fill="white"/>
                          <path
                              d="M595.119 152.553C595.577 150.965 594.02 149.538 592.478 150.132L584.547 153.187C583.255 153.685 582.847 155.314 583.754 156.362L589.041 162.472C590.08 163.672 592.035 163.242 592.475 161.717L595.119 152.553Z"
                              fill="white"/>
                          <path
                              d="M533.956 223.231C534.414 221.643 532.858 220.217 531.316 220.811L512.575 228.029C511.282 228.527 510.875 230.157 511.782 231.205L524.275 245.642C525.314 246.842 527.27 246.413 527.709 244.888L533.956 223.231Z"
                              fill="white"/>
                          <path
                              d="M472.77 293.937C473.228 292.349 471.672 290.922 470.13 291.516L440.65 302.872C439.357 303.37 438.95 305 439.856 306.047L459.51 328.758C460.548 329.958 462.504 329.529 462.944 328.004L472.77 293.937Z"
                              fill="white"/>
                          <path
                              d="M411.608 364.616C412.066 363.028 410.51 361.601 408.967 362.195L368.677 377.715C367.385 378.213 366.977 379.842 367.884 380.89L394.744 411.929C395.782 413.129 397.738 412.699 398.178 411.174L411.608 364.616Z"
                              fill="white"/>
                          <path
                              d="M346.842 439.458C347.3 437.87 345.744 436.444 344.202 437.038L303.912 452.557C302.619 453.055 302.212 454.685 303.118 455.732L329.978 486.771C331.017 487.972 332.972 487.542 333.412 486.017L346.842 439.458Z"
                              fill="white"/>
                          <path
                              d="M278.473 518.465C278.931 516.877 277.375 515.45 275.833 516.044L246.353 527.4C245.06 527.898 244.653 529.527 245.559 530.575L265.212 553.286C266.251 554.486 268.207 554.057 268.646 552.532L278.473 518.465Z"
                              fill="white"/>
                          <path
                              d="M210.128 597.444C210.586 595.856 209.029 594.429 207.487 595.023L188.746 602.242C187.454 602.74 187.046 604.37 187.953 605.417L200.447 619.855C201.485 621.055 203.441 620.626 203.881 619.101L210.128 597.444Z"
                              fill="white"/>
                          <path
                              d="M141.759 676.451C142.217 674.863 140.66 673.436 139.118 674.03L131.187 677.085C129.895 677.583 129.487 679.212 130.394 680.26L135.681 686.37C136.719 687.57 138.675 687.14 139.115 685.615L141.759 676.451Z"
                              fill="white"/>
                          <path
                              d="M530.353 77.7101C530.811 76.1221 529.255 74.6954 527.712 75.2894L519.782 78.3443C518.489 78.8423 518.082 80.4719 518.988 81.5194L524.275 87.6292C525.314 88.8293 527.27 88.3997 527.709 86.8748L530.353 77.7101Z"
                              fill="white"/>
                          <path
                              d="M469.191 148.389C469.649 146.801 468.092 145.374 466.55 145.968L447.809 153.187C446.517 153.685 446.109 155.314 447.016 156.362L459.51 170.8C460.548 172 462.504 171.57 462.944 170.045L469.191 148.389Z"
                              fill="white"/>
                          <path
                              d="M408.005 219.094C408.463 217.507 406.906 216.08 405.364 216.674L375.884 228.029C374.591 228.527 374.184 230.157 375.091 231.205L394.744 253.916C395.782 255.116 397.738 254.686 398.178 253.161L408.005 219.094Z"
                              fill="white"/>
                          <path
                              d="M346.842 289.773C347.3 288.185 345.744 286.758 344.202 287.352L303.912 302.872C302.619 303.37 302.212 305 303.118 306.047L329.978 337.086C331.017 338.286 332.972 337.857 333.412 336.332L346.842 289.773Z"
                              fill="white"/>
                          <path
                              d="M282.076 364.616C282.535 363.028 280.978 361.601 279.436 362.195L239.146 377.715C237.853 378.213 237.446 379.842 238.352 380.89L265.212 411.929C266.251 413.129 268.207 412.699 268.646 411.174L282.076 364.616Z"
                              fill="white"/>
                          <path
                              d="M213.707 443.622C214.165 442.034 212.609 440.608 211.067 441.202L181.587 452.557C180.294 453.055 179.887 454.685 180.793 455.732L200.447 478.443C201.485 479.644 203.441 479.214 203.881 477.689L213.707 443.622Z"
                              fill="white"/>
                          <path
                              d="M145.362 522.602C145.82 521.014 144.264 519.587 142.721 520.181L123.981 527.4C122.688 527.898 122.281 529.527 123.187 530.575L135.681 545.013C136.719 546.213 138.675 545.783 139.115 544.258L145.362 522.602Z"
                              fill="white"/>
                          <path
                              d="M76.9928 601.608C77.4509 600.02 75.8945 598.593 74.3523 599.187L66.4215 602.242C65.1288 602.74 64.7216 604.37 65.6281 605.417L70.9152 611.527C71.9538 612.727 73.9094 612.298 74.3492 610.773L76.9928 601.608Z"
                              fill="white"/>
                          <path
                              d="M464.692 3.90166C465.15 2.31369 463.594 0.886959 462.052 1.48103L456.806 3.50174C455.513 3.99968 455.106 5.62927 456.012 6.6768L459.51 10.7182C460.548 11.9184 462.504 11.4887 462.944 9.96379L464.692 3.90166Z"
                              fill="white"/>
                          <path
                              d="M402.611 75.6417C403.069 74.0537 401.513 72.627 399.971 73.221L386.67 78.3443C385.378 78.8423 384.97 80.4718 385.877 81.5194L394.744 91.7659C395.782 92.966 397.738 92.5364 398.178 91.0115L402.611 75.6417Z"
                              fill="white"/>
                          <path
                              d="M340.554 147.354C341.012 145.767 339.456 144.34 337.913 144.934L316.488 153.187C315.195 153.685 314.788 155.314 315.694 156.362L329.978 172.868C331.017 174.068 332.972 173.639 333.412 172.114L340.554 147.354Z"
                              fill="white"/>
                          <path
                              d="M278.473 219.094C278.931 217.507 277.375 216.08 275.833 216.674L246.353 228.029C245.06 228.527 244.653 230.157 245.559 231.205L265.212 253.916C266.251 255.116 268.207 254.686 268.646 253.161L278.473 219.094Z"
                              fill="white"/>
                          <path
                              d="M213.707 293.937C214.165 292.349 212.609 290.922 211.067 291.516L181.587 302.872C180.294 303.37 179.887 305 180.793 306.047L200.447 328.758C201.485 329.958 203.441 329.529 203.881 328.004L213.707 293.937Z"
                              fill="white"/>
                          <path
                              d="M146.257 371.882C146.715 370.294 145.159 368.867 143.616 369.462L122.191 377.715C120.898 378.213 120.491 379.842 121.397 380.89L135.681 397.396C136.72 398.596 138.675 398.166 139.115 396.641L146.257 371.882Z"
                              fill="white"/>
                          <path
                              d="M78.7827 449.855C79.2408 448.267 77.6844 446.84 76.1422 447.434L62.8417 452.557C61.549 453.055 61.1418 454.685 62.0483 455.732L70.9152 465.979C71.9537 467.179 73.9093 466.749 74.3492 465.224L78.7827 449.855Z"
                              fill="white"/>
                          <path
                              d="M11.3322 527.8C11.7902 526.212 10.2338 524.785 8.69159 525.379L3.44562 527.4C2.15295 527.898 1.74573 529.527 2.65216 530.575L6.14948 534.616C7.18799 535.816 9.14362 535.387 9.5835 533.862L11.3322 527.8Z"
                              fill="white"/>
                          <path
                              d="M336.056 2.86749C336.514 1.27952 334.957 -0.147217 333.415 0.446851L325.484 3.50175C324.192 3.9997 323.784 5.62928 324.691 6.67681L329.978 12.7866C331.017 13.9867 332.972 13.5571 333.412 12.0322L336.056 2.86749Z"
                              fill="white"/>
                          <path
                              d="M273.08 75.6417C273.538 74.0537 271.982 72.627 270.439 73.221L257.139 78.3443C255.846 78.8423 255.439 80.4718 256.345 81.5194L265.212 91.7659C266.251 92.966 268.207 92.5364 268.646 91.0115L273.08 75.6417Z"
                              fill="white"/>
                          <path
                              d="M210.128 148.389C210.586 146.801 209.029 145.374 207.487 145.968L188.746 153.187C187.454 153.685 187.046 155.314 187.953 156.362L200.447 170.8C201.485 172 203.441 171.57 203.881 170.045L210.128 148.389Z"
                              fill="white"/>
                          <path
                              d="M145.362 223.231C145.82 221.643 144.264 220.217 142.721 220.811L123.981 228.029C122.688 228.527 122.281 230.157 123.187 231.205L135.681 245.642C136.719 246.842 138.675 246.413 139.115 244.888L145.362 223.231Z"
                              fill="white"/>
                          <path
                              d="M78.7827 300.169C79.2408 298.581 77.6844 297.155 76.1422 297.749L62.8417 302.872C61.549 303.37 61.1418 305 62.0483 306.047L70.9152 316.294C71.9537 317.494 73.9093 317.064 74.3492 315.539L78.7827 300.169Z"
                              fill="white"/>
                          <path
                              d="M12.2271 377.08C12.6852 375.492 11.1288 374.066 9.58655 374.66L1.65576 377.715C0.363037 378.213 -0.0441895 379.842 0.862305 380.89L6.14954 386.999C7.18805 388.2 9.14368 387.77 9.5835 386.245L12.2271 377.08Z"
                              fill="white"/>
                          <path
                              d="M205.629 3.90166C206.087 2.31369 204.531 0.886953 202.989 1.48102L197.743 3.50173C196.45 3.99968 196.043 5.62926 196.949 6.67679L200.447 10.7182C201.485 11.9183 203.441 11.4887 203.881 9.96379L205.629 3.90166Z"
                              fill="white"/>
                          <path
                              d="M141.759 77.7101C142.217 76.1221 140.66 74.6954 139.118 75.2894L131.187 78.3443C129.895 78.8423 129.487 80.4719 130.394 81.5194L135.681 87.6292C136.719 88.8293 138.675 88.3997 139.115 86.8747L141.759 77.7101Z"
                              fill="white"/>
                          <path
                              d="M76.9928 152.553C77.4509 150.965 75.8945 149.538 74.3523 150.132L66.4215 153.187C65.1288 153.685 64.7216 155.314 65.6281 156.362L70.9152 162.472C71.9538 163.672 73.9094 163.242 74.3492 161.717L76.9928 152.553Z"
                              fill="white"/>
                          <path
                              d="M11.3322 228.429C11.7902 226.841 10.2338 225.415 8.69159 226.009L3.44562 228.029C2.15295 228.527 1.74573 230.157 2.65216 231.205L6.14948 235.246C7.18799 236.446 9.14362 236.016 9.5835 234.492L11.3322 228.429Z"
                              fill="white"/>
                      </g>
                  </svg>
                  <div className="w-1/2"></div>

                  <svg className="lg:block hidden lg:w-1/4 h-400 w-400 ml-[-2rem] z-0"
                       xmlns="http://www.w3.org/2000/svg"
                       width="304" height="302" viewBox="0 0 544 762" fill="none">
                      <g opacity="0.5">
                          <path
                              d="M658.989 527.8C659.448 526.212 657.891 524.785 656.349 525.379L651.103 527.4C649.81 527.898 649.403 529.527 650.31 530.575L653.807 534.616C654.845 535.816 656.801 535.387 657.241 533.862L658.989 527.8Z"
                              fill="white"/>
                          <path
                              d="M595.119 601.608C595.577 600.02 594.02 598.593 592.478 599.187L584.547 602.242C583.255 602.74 582.847 604.37 583.754 605.417L589.041 611.527C590.08 612.727 592.035 612.298 592.475 610.773L595.119 601.608Z"
                              fill="white"/>
                          <path
                              d="M530.353 676.451C530.811 674.863 529.255 673.436 527.712 674.03L519.782 677.085C518.489 677.583 518.082 679.212 518.988 680.26L524.275 686.37C525.314 687.57 527.27 687.14 527.709 685.615L530.353 676.451Z"
                              fill="white"/>
                          <path
                              d="M464.692 752.327C465.15 750.739 463.594 749.313 462.052 749.907L456.806 751.927C455.513 752.425 455.106 754.055 456.012 755.103L459.51 759.144C460.548 760.344 462.504 759.914 462.944 758.39L464.692 752.327Z"
                              fill="white"/>
                          <path
                              d="M659.884 377.08C660.342 375.492 658.786 374.066 657.244 374.66L649.313 377.715C648.02 378.213 647.613 379.842 648.52 380.89L653.807 386.999C654.845 388.2 656.801 387.77 657.241 386.245L659.884 377.08Z"
                              fill="white"/>
                          <path
                              d="M596.909 449.855C597.367 448.267 595.81 446.84 594.268 447.434L580.968 452.557C579.675 453.055 579.268 454.685 580.174 455.732L589.041 465.979C590.08 467.179 592.035 466.749 592.475 465.224L596.909 449.855Z"
                              fill="white"/>
                          <path
                              d="M533.956 522.602C534.414 521.014 532.858 519.587 531.316 520.181L512.575 527.4C511.282 527.898 510.875 529.527 511.782 530.575L524.275 545.013C525.314 546.213 527.27 545.783 527.709 544.258L533.956 522.602Z"
                              fill="white"/>
                          <path
                              d="M469.191 597.444C469.649 595.856 468.092 594.429 466.55 595.023L447.809 602.242C446.517 602.74 446.109 604.37 447.016 605.417L459.51 619.855C460.548 621.055 462.504 620.626 462.944 619.101L469.191 597.444Z"
                              fill="white"/>
                          <path
                              d="M402.611 674.382C403.069 672.794 401.513 671.368 399.971 671.962L386.67 677.085C385.378 677.583 384.97 679.212 385.877 680.26L394.744 690.507C395.782 691.707 397.738 691.277 398.178 689.752L402.611 674.382Z"
                              fill="white"/>
                          <path
                              d="M336.056 751.293C336.514 749.705 334.957 748.279 333.415 748.873L325.484 751.927C324.192 752.425 323.784 754.055 324.691 755.103L329.978 761.212C331.017 762.412 332.972 761.983 333.412 760.458L336.056 751.293Z"
                              fill="white"/>
                          <path
                              d="M658.989 228.429C659.448 226.841 657.891 225.415 656.349 226.009L651.103 228.029C649.81 228.527 649.403 230.157 650.31 231.205L653.807 235.246C654.845 236.446 656.801 236.016 657.241 234.492L658.989 228.429Z"
                              fill="white"/>
                          <path
                              d="M596.909 300.169C597.367 298.581 595.81 297.155 594.268 297.749L580.968 302.872C579.675 303.37 579.268 305 580.174 306.047L589.041 316.294C590.08 317.494 592.035 317.064 592.475 315.539L596.909 300.169Z"
                              fill="white"/>
                          <path
                              d="M534.851 371.882C535.309 370.294 533.753 368.867 532.211 369.462L510.785 377.715C509.492 378.213 509.085 379.842 509.992 380.89L524.275 397.396C525.314 398.596 527.27 398.166 527.709 396.641L534.851 371.882Z"
                              fill="white"/>
                          <path
                              d="M472.77 443.622C473.228 442.034 471.672 440.608 470.13 441.202L440.65 452.557C439.357 453.055 438.95 454.685 439.856 455.732L459.51 478.443C460.548 479.644 462.504 479.214 462.944 477.689L472.77 443.622Z"
                              fill="white"/>
                          <path
                              d="M408.005 518.465C408.463 516.877 406.906 515.45 405.364 516.044L375.884 527.4C374.591 527.898 374.184 529.527 375.091 530.575L394.744 553.286C395.782 554.486 397.738 554.057 398.178 552.532L408.005 518.465Z"
                              fill="white"/>
                          <path
                              d="M340.554 596.41C341.012 594.822 339.456 593.395 337.913 593.989L316.488 602.242C315.195 602.74 314.788 604.37 315.694 605.417L329.978 621.924C331.017 623.124 332.972 622.694 333.412 621.169L340.554 596.41Z"
                              fill="white"/>
                          <path
                              d="M273.08 674.382C273.538 672.794 271.982 671.368 270.439 671.962L257.139 677.085C255.846 677.583 255.439 679.212 256.345 680.26L265.212 690.507C266.251 691.707 268.207 691.277 268.646 689.752L273.08 674.382Z"
                              fill="white"/>
                          <path
                              d="M205.629 752.327C206.087 750.74 204.531 749.313 202.989 749.907L197.743 751.928C196.45 752.425 196.043 754.055 196.949 755.103L200.447 759.144C201.485 760.344 203.441 759.914 203.881 758.39L205.629 752.327Z"
                              fill="white"/>
                          <path
                              d="M595.119 152.553C595.577 150.965 594.02 149.538 592.478 150.132L584.547 153.187C583.255 153.685 582.847 155.314 583.754 156.362L589.041 162.472C590.08 163.672 592.035 163.242 592.475 161.717L595.119 152.553Z"
                              fill="white"/>
                          <path
                              d="M533.956 223.231C534.414 221.643 532.858 220.217 531.316 220.811L512.575 228.029C511.282 228.527 510.875 230.157 511.782 231.205L524.275 245.642C525.314 246.842 527.27 246.413 527.709 244.888L533.956 223.231Z"
                              fill="white"/>
                          <path
                              d="M472.77 293.937C473.228 292.349 471.672 290.922 470.13 291.516L440.65 302.872C439.357 303.37 438.95 305 439.856 306.047L459.51 328.758C460.548 329.958 462.504 329.529 462.944 328.004L472.77 293.937Z"
                              fill="white"/>
                          <path
                              d="M411.608 364.616C412.066 363.028 410.51 361.601 408.967 362.195L368.677 377.715C367.385 378.213 366.977 379.842 367.884 380.89L394.744 411.929C395.782 413.129 397.738 412.699 398.178 411.174L411.608 364.616Z"
                              fill="white"/>
                          <path
                              d="M346.842 439.458C347.3 437.87 345.744 436.444 344.202 437.038L303.912 452.557C302.619 453.055 302.212 454.685 303.118 455.732L329.978 486.771C331.017 487.972 332.972 487.542 333.412 486.017L346.842 439.458Z"
                              fill="white"/>
                          <path
                              d="M278.473 518.465C278.931 516.877 277.375 515.45 275.833 516.044L246.353 527.4C245.06 527.898 244.653 529.527 245.559 530.575L265.212 553.286C266.251 554.486 268.207 554.057 268.646 552.532L278.473 518.465Z"
                              fill="white"/>
                          <path
                              d="M210.128 597.444C210.586 595.856 209.029 594.429 207.487 595.023L188.746 602.242C187.454 602.74 187.046 604.37 187.953 605.417L200.447 619.855C201.485 621.055 203.441 620.626 203.881 619.101L210.128 597.444Z"
                              fill="white"/>
                          <path
                              d="M141.759 676.451C142.217 674.863 140.66 673.436 139.118 674.03L131.187 677.085C129.895 677.583 129.487 679.212 130.394 680.26L135.681 686.37C136.719 687.57 138.675 687.14 139.115 685.615L141.759 676.451Z"
                              fill="white"/>
                          <path
                              d="M530.353 77.7101C530.811 76.1221 529.255 74.6954 527.712 75.2894L519.782 78.3443C518.489 78.8423 518.082 80.4719 518.988 81.5194L524.275 87.6292C525.314 88.8293 527.27 88.3997 527.709 86.8748L530.353 77.7101Z"
                              fill="white"/>
                          <path
                              d="M469.191 148.389C469.649 146.801 468.092 145.374 466.55 145.968L447.809 153.187C446.517 153.685 446.109 155.314 447.016 156.362L459.51 170.8C460.548 172 462.504 171.57 462.944 170.045L469.191 148.389Z"
                              fill="white"/>
                          <path
                              d="M408.005 219.094C408.463 217.507 406.906 216.08 405.364 216.674L375.884 228.029C374.591 228.527 374.184 230.157 375.091 231.205L394.744 253.916C395.782 255.116 397.738 254.686 398.178 253.161L408.005 219.094Z"
                              fill="white"/>
                          <path
                              d="M346.842 289.773C347.3 288.185 345.744 286.758 344.202 287.352L303.912 302.872C302.619 303.37 302.212 305 303.118 306.047L329.978 337.086C331.017 338.286 332.972 337.857 333.412 336.332L346.842 289.773Z"
                              fill="white"/>
                          <path
                              d="M282.076 364.616C282.535 363.028 280.978 361.601 279.436 362.195L239.146 377.715C237.853 378.213 237.446 379.842 238.352 380.89L265.212 411.929C266.251 413.129 268.207 412.699 268.646 411.174L282.076 364.616Z"
                              fill="white"/>
                          <path
                              d="M213.707 443.622C214.165 442.034 212.609 440.608 211.067 441.202L181.587 452.557C180.294 453.055 179.887 454.685 180.793 455.732L200.447 478.443C201.485 479.644 203.441 479.214 203.881 477.689L213.707 443.622Z"
                              fill="white"/>
                          <path
                              d="M145.362 522.602C145.82 521.014 144.264 519.587 142.721 520.181L123.981 527.4C122.688 527.898 122.281 529.527 123.187 530.575L135.681 545.013C136.719 546.213 138.675 545.783 139.115 544.258L145.362 522.602Z"
                              fill="white"/>
                          <path
                              d="M76.9928 601.608C77.4509 600.02 75.8945 598.593 74.3523 599.187L66.4215 602.242C65.1288 602.74 64.7216 604.37 65.6281 605.417L70.9152 611.527C71.9538 612.727 73.9094 612.298 74.3492 610.773L76.9928 601.608Z"
                              fill="white"/>
                          <path
                              d="M464.692 3.90166C465.15 2.31369 463.594 0.886959 462.052 1.48103L456.806 3.50174C455.513 3.99968 455.106 5.62927 456.012 6.6768L459.51 10.7182C460.548 11.9184 462.504 11.4887 462.944 9.96379L464.692 3.90166Z"
                              fill="white"/>
                          <path
                              d="M402.611 75.6417C403.069 74.0537 401.513 72.627 399.971 73.221L386.67 78.3443C385.378 78.8423 384.97 80.4718 385.877 81.5194L394.744 91.7659C395.782 92.966 397.738 92.5364 398.178 91.0115L402.611 75.6417Z"
                              fill="white"/>
                          <path
                              d="M340.554 147.354C341.012 145.767 339.456 144.34 337.913 144.934L316.488 153.187C315.195 153.685 314.788 155.314 315.694 156.362L329.978 172.868C331.017 174.068 332.972 173.639 333.412 172.114L340.554 147.354Z"
                              fill="white"/>
                          <path
                              d="M278.473 219.094C278.931 217.507 277.375 216.08 275.833 216.674L246.353 228.029C245.06 228.527 244.653 230.157 245.559 231.205L265.212 253.916C266.251 255.116 268.207 254.686 268.646 253.161L278.473 219.094Z"
                              fill="white"/>
                          <path
                              d="M213.707 293.937C214.165 292.349 212.609 290.922 211.067 291.516L181.587 302.872C180.294 303.37 179.887 305 180.793 306.047L200.447 328.758C201.485 329.958 203.441 329.529 203.881 328.004L213.707 293.937Z"
                              fill="white"/>
                          <path
                              d="M146.257 371.882C146.715 370.294 145.159 368.867 143.616 369.462L122.191 377.715C120.898 378.213 120.491 379.842 121.397 380.89L135.681 397.396C136.72 398.596 138.675 398.166 139.115 396.641L146.257 371.882Z"
                              fill="white"/>
                          <path
                              d="M78.7827 449.855C79.2408 448.267 77.6844 446.84 76.1422 447.434L62.8417 452.557C61.549 453.055 61.1418 454.685 62.0483 455.732L70.9152 465.979C71.9537 467.179 73.9093 466.749 74.3492 465.224L78.7827 449.855Z"
                              fill="white"/>
                          <path
                              d="M11.3322 527.8C11.7902 526.212 10.2338 524.785 8.69159 525.379L3.44562 527.4C2.15295 527.898 1.74573 529.527 2.65216 530.575L6.14948 534.616C7.18799 535.816 9.14362 535.387 9.5835 533.862L11.3322 527.8Z"
                              fill="white"/>
                          <path
                              d="M336.056 2.86749C336.514 1.27952 334.957 -0.147217 333.415 0.446851L325.484 3.50175C324.192 3.9997 323.784 5.62928 324.691 6.67681L329.978 12.7866C331.017 13.9867 332.972 13.5571 333.412 12.0322L336.056 2.86749Z"
                              fill="white"/>
                          <path
                              d="M273.08 75.6417C273.538 74.0537 271.982 72.627 270.439 73.221L257.139 78.3443C255.846 78.8423 255.439 80.4718 256.345 81.5194L265.212 91.7659C266.251 92.966 268.207 92.5364 268.646 91.0115L273.08 75.6417Z"
                              fill="white"/>
                          <path
                              d="M210.128 148.389C210.586 146.801 209.029 145.374 207.487 145.968L188.746 153.187C187.454 153.685 187.046 155.314 187.953 156.362L200.447 170.8C201.485 172 203.441 171.57 203.881 170.045L210.128 148.389Z"
                              fill="white"/>
                          <path
                              d="M145.362 223.231C145.82 221.643 144.264 220.217 142.721 220.811L123.981 228.029C122.688 228.527 122.281 230.157 123.187 231.205L135.681 245.642C136.719 246.842 138.675 246.413 139.115 244.888L145.362 223.231Z"
                              fill="white"/>
                          <path
                              d="M78.7827 300.169C79.2408 298.581 77.6844 297.155 76.1422 297.749L62.8417 302.872C61.549 303.37 61.1418 305 62.0483 306.047L70.9152 316.294C71.9537 317.494 73.9093 317.064 74.3492 315.539L78.7827 300.169Z"
                              fill="white"/>
                          <path
                              d="M12.2271 377.08C12.6852 375.492 11.1288 374.066 9.58655 374.66L1.65576 377.715C0.363037 378.213 -0.0441895 379.842 0.862305 380.89L6.14954 386.999C7.18805 388.2 9.14368 387.77 9.5835 386.245L12.2271 377.08Z"
                              fill="white"/>
                          <path
                              d="M205.629 3.90166C206.087 2.31369 204.531 0.886953 202.989 1.48102L197.743 3.50173C196.45 3.99968 196.043 5.62926 196.949 6.67679L200.447 10.7182C201.485 11.9183 203.441 11.4887 203.881 9.96379L205.629 3.90166Z"
                              fill="white"/>
                          <path
                              d="M141.759 77.7101C142.217 76.1221 140.66 74.6954 139.118 75.2894L131.187 78.3443C129.895 78.8423 129.487 80.4719 130.394 81.5194L135.681 87.6292C136.719 88.8293 138.675 88.3997 139.115 86.8747L141.759 77.7101Z"
                              fill="white"/>
                          <path
                              d="M76.9928 152.553C77.4509 150.965 75.8945 149.538 74.3523 150.132L66.4215 153.187C65.1288 153.685 64.7216 155.314 65.6281 156.362L70.9152 162.472C71.9538 163.672 73.9094 163.242 74.3492 161.717L76.9928 152.553Z"
                              fill="white"/>
                          <path
                              d="M11.3322 228.429C11.7902 226.841 10.2338 225.415 8.69159 226.009L3.44562 228.029C2.15295 228.527 1.74573 230.157 2.65216 231.205L6.14948 235.246C7.18799 236.446 9.14362 236.016 9.5835 234.492L11.3322 228.429Z"
                              fill="white"/>
                      </g>
                  </svg>
              </div>


              <div>
                  {individualsHTML}
              </div>

          </div>

          <div className="bg-pink-200 py-40">
              <h1 className="-white lg:text-7xl text-5xl lg:pb-52 pb-20 lg:-mb-40  lg:font-outline-4   font-bold text-white  text-stroke text-stroke-white tracking-wider text-center  ">
                  <a className="underline decoration-dotted  decoration-[#74064a]"> TICKETS</a>
              </h1>
              <div className="">
                  <p className="py-10 text-[#74064a] font-bold font-outline-10  text-center text-4xl lg:text-6xl">IEEE
                      MEMBERS <br/></p>
              </div>
              <div className="">
                  <div className="lg:flex lg:px-40 ">
                      <div id="new"
                           className="lg:w-1/3  px-6 mx-10 pt-6 mb-10 lg:mb-0  bg-[#ff93c7] text-white rounded-3xl">
                          <p className="text-center font-bold font-outline-10 text-[#74064a] lg:text-4xl text-2xl "> IEEE <br/>STUDENT <br/> MEMBER
                          </p>
                          <p className="text-center font-bold font-outline-10 lg:text-4xl text-2xl  text-[#74064a]">₹2500</p>
                          <p className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16 ">BUY</p>
                      </div>

                      <div id="new"
                           className="lg:w-1/3 px-6 mx-10 pt-6 mb-10 lg:mb-0 bg-[#ff93c7] text-white rounded-3xl ">
                          <p id="tickp1" className="text-center font-bold font-outline-10 text-[#74064a] lg:text-4xl text-2xl "> IEEE
                              PROFESSIONAL <br/> (ACADEMIC) </p>
                          <p id="tickp2"
                             className="text-center font-bold font-outline-10 lg:text-4xl text-2xl  text-[#74064a]">₹6500</p>
                          <p id="buy"
                             className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                      </div>

                      <div id="new"
                           className="lg:w-1/3 px-6 pt-6 mx-10 mb-10 lg:mb-0  bg-[#ff93c7] text-white rounded-3xl">
                          <p id="tickp1"
                             className="text-center font-bold font-outline-10 text-[#74064a] lg:text-4xl text-2xl  "> IEEE
                              PROFESSIONAL <br/> (INDUSTRY) </p>
                          <p id="tickp2"
                             className="text-center font-bold font-outline-10 lg:text-4xl text-2xl  text-[#74064a]">₹8500</p>
                          <p id="buy"
                             className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                      </div>


                  </div>
                  <div className="inn ">
                      <p id="IEEEM1t"
                         className="py-10 text-[#74064a] font-bold font-outline-10  text-center lg:text-4xl text-3xl ">NON
                          IEEE <br/> STUDENTS <br/></p>
                  </div>
                  <div className="lg:flex lg:px-40  ">

                      <div id="new"
                           className=" lg:w-1/3 px-6 mb-10 lg:mb-0  pt-6 mx-10  bg-[#ff93c7] text-white rounded-3xl ">
                          <p id="tickp1"
                             className="text-center font-bold font-outline-10 text-[#74064a] lg:text-4xl text-2xl "> STUDENT <br/> MEMBER
                          </p>
                          <p id="tickp2"
                             className="text-center font-bold font-outline-10 lg:text-4xl text-2xl  text-[#74064a]">₹3000</p>
                          <p id="buy"
                             className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                      </div>

                      <div id="new"
                           className="lg:w-1/3 px-6 mb-10 lg:mb-0  pt-6 mx-10 bg-[#ff93c7] text-white rounded-3xl ">
                          <p id="tickp1"
                             className="text-center font-bold font-outline-10 text-[#74064a] lg:text-4xl text-2xl "> PROFESSIONAL <br/> (ACADEMIC)
                          </p>
                          <p id="tickp2"
                             className="text-center font-bold font-outline-10 lg:text-4xl text-2xl  text-[#74064a]">₹7500</p>
                          <p id="buy"
                             className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                      </div>

                      <div id="new"
                           className="lg:w-1/3 px-6 mb-10 lg:mb-0  pt-6 mx-10 bg-[#ff93c7] text-white rounded-3xl ">
                          <p id="tickp1"
                             className="text-center font-bold font-outline-10 text-[#74064a] lg:text-4xl text-2xl "> PROFESSIONAL <br/> (INDUSTRY)
                          </p>
                          <p id="tickp2"
                             className="text-center font-bold font-outline-10 lg:text-4xl text-2xl  text-[#74064a]">₹9500</p>
                          <p id="buy"
                             className="text-center font-bold -mx-6 rounded-b-3xl bg-pink-900 mt-10 py-5 px-16">BUY</p>
                      </div>

                  </div>
              </div>
          </div>

          <h1 className="-white bg-violet-300  lg:pb-40 lg:text-7xl text-5xl lg:pt-28 pt-20 lg:-mb-40  lg:font-outline-4   font-bold text-white  text-stroke text-stroke-white tracking-wider text-center  ">
              <a className="underline decoration-dotted  decoration-[#74064a]"> VENUE</a>
          </h1>
          <div className="bg-violet-300 py-20 lg:flex block">
              <div className="lg:pl-32 px-10 lg:px-0 lg:w-1/2">
                  <img className="lg:w-[500px] hidden lg:block rounded-3xl" src="/5_Photo Courtesy-Amit Mehra.jpg"/>
                  <img className="lg:w-[400px] block mx-auto lg:-mt-60 lg:ml-52 rounded-3xl" src="/ABOUT.jpg"/>
              </div>
              <div className="lg:w-1/2">
                  <p className="lg:px-10 text-center py-5 lg:text-8xl text-white lg:font-outline-4  font-bold text-2xl">
                      India International Centre , <br/> New Delhi
                  </p>
              </div>
          </div>


      </>
  );
}


export default Hero;