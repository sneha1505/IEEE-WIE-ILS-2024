import Head from "next/head";

import Navbar from "../../components/navbar";

import Footer from "../../components/footer";
import Attend from "../../components/attend";


const Home = () => {
    return (
        <>
            <Head>
                <title>IEEE WIE </title>

                <link rel="icon" href="" />
            </Head>
            <Navbar />

            <Attend/>

            <Footer />

        </>
    );
}

export default Home;