import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import Footer from "../components/footer";

import Team from "../components/team";
const Home = () => {
  return (
    <>
      <Head>
        <title>IEEE WIE </title>

        <link rel="icon" href="" />
      </Head>

      <Navbar />
      <Hero />
<Team/>
      <Footer />

    </>
  );
}

export default Home;