import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Team from "../../components/team";
import Footer from "../../components/footer";
import Track from "../../components/track";
import About from "../../components/about";

const Home = () => {
    return (
        <>
            <Head>
                <title>IEEE WIE </title>

                <link rel="icon" href="" />
            </Head>
            <Navbar />

            <Track/>

            <Footer />

        </>
    );
}

export default Home;