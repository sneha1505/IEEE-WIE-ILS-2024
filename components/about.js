const About = () => {
    return (
        <>
            <section className="about">
                <img src="/about us.png" alt="Italian Trulli" width="1600" height="300" className="abi"/>
            </section>
            <div className="flex bg-white text-black">
                <section className="lg:w-1/2 w-full">
                    <div className="px-10 bg-cover ">
                        <h1 className="text-7xl pt-10 font-bold">
                            IEEE WIE ILS
                        </h1>
                        <p className=" pt-10 text-[17px] pb-20">
                            The IEEE WIE International Leadership Summit (ILS) is an annual program by IEEE WIE,
                            addressing
                            the under representation of women in science, engineering, and technology. IEEE WIE ILS
                            began in
                            2015 in Chennai with the theme 'Beyond Yourself – Leveraging Strengths, Breaking Barriers,'
                            drawing over 200 participants. IEEE WIE ILS is known for its networking, mentorship, and
                            collaboration opportunities. These regional summits continue to empower and support women in
                            education and career development, part of IEEE WIE's global initiatives in Empowerment,
                            Entrepreneurship, Leadership, and Emerging Technology.
                            IEEE WIE ILS provide regional opportunities to foster networking, mentorship, and
                            collaboration.
                            With the leadership and creativity of volunteers, WIE will continue the WIE ILS program in
                            2020
                            as part of the portfolio of global initiatives that focus on Empowerment, Entrepreneurship,
                            Leadership, and Emerging/Future Technology
                        </p>
                    </div>

                    <div className="px-10 bg-cover ">
                        <h1 className="text-7xl pt-10 font-bold">
                            VISION
                        </h1>
                        <p className=" pt-10 text-[17px] pb-20">
                            To bring together visionary leaders, innovators, and change-makers from diverse backgrounds
                            and
                            nations to foster collaboration, share knowledge, and inspire transformative leadership.
                            <br/>
                            To cultivate a new generation of leaders who can drive innovation, promote sustainable
                            development, and foster peace and prosperity worldwide.
                        </p>
                    </div>

                </section>
                <section className="w-1/2 lg:block hidden">
                    <img className=" w-[90%] mx-auto" src="/back.webp"/>
                </section>
            </div>

        </>
    );
};

export default About;