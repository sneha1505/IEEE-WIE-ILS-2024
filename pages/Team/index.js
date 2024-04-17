import Head from "next/head";

import Navbar from "../../components/navbar";
import Team from "../../components/team";
import Footer from "../../components/footer";



const Home = () => {
    return (
        <>
            <Head>
                <title>IEEE WIE </title>

                <link rel="icon" href="" />
            </Head>
            <Navbar />

            <Team/>

            <Footer />

        </>
    );
}

export default Home;