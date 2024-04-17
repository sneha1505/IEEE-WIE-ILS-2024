import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import About from "../../components/about";

const Home = () => {
    return (
        <>
            <Head>
                <title>IEEE WIE </title>

                <link rel="icon" href="" />
            </Head>
            <Navbar />
            <About/>


            <Footer />

        </>
    );
}

export default Home;