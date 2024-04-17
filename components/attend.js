import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
const Attend = () => {
    return (
        <>

            <div className="bg-pink-100 lg:py-20 pt-20 lg:flex block">
                <div className="lg:pl-32 px-10 lg:px-0 lg:w-1/2">
                    <img className="lg:w-[500px] hidden lg:block rounded-3xl" src="/5_Photo Courtesy-Amit Mehra.jpg"/>
                    <img className="lg:w-[400px] block mx-auto lg:-mt-60 lg:ml-52 rounded-3xl" src="/ABOUT.jpg"/>
                </div>
                <div className="lg:w-1/2">
                    <p className="lg:px-10 bg-pink-100 text-center pt-24 lg:text-7xl text-white font-outline-4 font-bold text-4xl">VENUE</p>
                    <p className="lg:px-10 text-center py-5  lg:text-4xl font-bold text-3xl text-black">
                        India International Centre , New Delhi
                    </p>

                    <p className="lg:px-10 bg-pink-100 text-center lg:pt-24 pt-10 lg:text-7xl  text-white font-outline-4 font-bold text-4xl">EVENT
                        DATES</p>
                    <p className="lg:px-10 text-center  py-5 lg:text-4xl  font-bold text-3xl text-black">
                        10th - 11th August ,
                        2024
                    </p>
                </div>

            </div>
            <div className="bg-pink-100  py-20 lg:flex  lg:px-20">
                <p className="lg:px-10  lg:w-1/2 bg-pink-100 text-center py-20 lg:pt-40 lg:text-7xl text-white font-outline-4 font-bold text-5xl">LOCATION</p>
                <iframe className="lg:w-1/2 lg:py-20 w-full h-[400px] rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56049.79251485446!2d77.14081611953127!3d28.596415702606613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2edb5f05711%3A0x3b0ae135e9a68300!
2sIndia%20International%20Centre!5e0!3m2!1sen!2sin!4v1707946790669!5m2!1sen!2sin"></iframe>
            </div>

            <div className="bg-pink-100 lg:py-20 flex-col-reverse flex lg:flex-row lg:px-20">
                <div className="lg:w-1/2 w-full">
                    <video width="lg:w-[100px] w-[200px]" height="auto" controls="autoplay">
                        <source src="/nature.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                <p className="lg:px-10 pb-20 lg:pb-0 lg:w-1/2 bg-pink-100 text-center pt-20 lg:pt-40 lg:text-7xl text-white font-outline-4 font-bold text-5xl">ATTRACTIONS</p>
                </div>
            </div>

            <section className="city" id="city ">
                <div className="venue" margin top="10px">
                    <p className="lg:px-10  bg-pink-100 pb-20 text-center pt-20 lg:pt-40 lg:text-7xl text-white font-outline-4 font-bold text-5xl">ABOUT
                        THE CITY</p>
                    <div className="lg:flex bg-pink-100 block text-black">
                        <div className="px-10 bg-cover lg:w-1/2">
                            <h1 className="lg:text-5xl text-4xl pt-10 font-bold">
                                NEW DELHI, INDIA
                            </h1>
                            <p className=" pt-10 lg:text-[15px] text-[13px] pb-20">
                                New Delhi, national capital of India. It is situated in the north-central part of the
                                country on the west bank of the Yamuna River,
                                adjacent to and just south of Delhi city (Old Delhi) and within the Delhi national
                                capital
                                territory.
                                <br/>
                                New Delhi is the most popular, civilized and modernized city in India. All the important
                                work of the Indian central government is held in Delhi. The municipality lies within the
                                range of the National Capital Territory of Delhi. The New Delhi Municipal Council
                                regulates
                                the administration of New Delhi. The New Delhi Municipal Council covers the Lutyens’
                                Delhi
                                area of old Delhi and other related areas, and this area is called New Delhi. The
                                municipal
                                council regulates all the functioning of New Delhi. New Delhi was established in 1911.
                                It is
                                a small part of old Delhi. Although, after establishment, New Delhi was inaugurated in
                                the
                                year 1931. The total area of New Delhi is 42.7 sq. km (16.5 sq mi). The population
                                density
                                of New Delhi is 5,900/sq.km (15,000/sq mi).
                                <br/>
                                New Delhi is one of the most civilized cities of India, where all the main functioning
                                of
                                the whole of India takes place. The individual belongs to all religions and lives in
                                Delhi.
                                Although, the Hindus live in the majority. There are many historical and institutional
                                places situated in Delhi. Although the main judicial powers, the Supreme Court,
                                Rashtrapati
                                Bhavan and the house of parliament are situated in Delhi. Due to this high judiciary
                                body
                                and its highly civilized atmosphere, the business opportunities remain very high. Many
                                people from India come to Delhi for education and settle their careers.
                            </p>


                            <h1 className="lg:text-5xl text-4xl  font-bold">
                                History
                            </h1>
                            <p className=" pt-10 lg:text-[15px] text-[13px] pb-20">
                                The history of the city is as old as the epic Mahabharata. The town was known as
                                Indraprastha, where Pandavas used to live. In due course eight more cities came alive
                                adjacent to Indraprastha: Lal Kot, Siri, Dinpanah, Quila Rai Pithora, Ferozabad,
                                Jahanpanah,
                                Tughlakabad and Shahjahanabad.

                                Delhi has been a witness to the political turmoil for over five centuries. It was ruled
                                by
                                the Mughals in succession to Khiljis and Tughlaqs.

                                India GateIn 1192 the legions of the Afghan warrior Muhammad of Ghori captured the
                                Rajput
                                town, and the Delhi Sultanate was established (1206). The invasion of Delhi by Timur in
                                1398
                                put an end to the sultanate; the Lodis, last of the Delhi sultans, gave way to Babur,
                                who,
                                after the battle of Panipat in 1526, founded the Mughal Empire. The early Mughal
                                emperors
                                favoured Agra as their capital, and Delhi became their permanent seat only after Shah
                                Jahan
                                built (1638) the walls of Old Delhi.

                                From Hindu Kings to Muslim Sultans, the reins of the city kept shifting from one ruler
                                to
                                another. The soils of the city smell of blood, sacrifices and love for the nation. The
                                old
                                'Havelis' and edifices from the past stand silent but their silence also speaks volumes
                                for
                                their owners and people who lived here centuries back.

                                In the year 1803 AD, the city came under the British rule. In 1911, British shifted
                                their
                                capital from Calcutta to Delhi. It again became the center of all the governing
                                activities.
                                But, the city has the reputation of over throwing the occupants of its throne. It
                                included
                                the British and the current political parties that have had the honour of leading free
                                India.

                                After independence in 1947, New Delhi was officially declared as the Capital of India.
                            </p>
                        </div>
                        <div className="lg:w-1/2 lg:block hidden">
                            <img className=" w-[90%] mx-auto" src="/back.webp"/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Attend;