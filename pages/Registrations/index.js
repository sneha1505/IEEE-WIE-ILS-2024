import Head from "next/head";

import Navbar from "../../components/navbar";

import Footer from "../../components/footer";

import Ticket from "../../components/ticket";

const Home = () => {
    return (
        <>
            <Head>
                <title>IEEE WIE </title>

                <link rel="icon" href="" />
            </Head>
            <Navbar />

            <Ticket/>

            <Footer />

        </>
    );
}

export default Home;