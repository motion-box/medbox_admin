import type { NextPage } from "next";
import Head from "next/head";
import MainPage from "../src/pages/main_page";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MEDBOX | Главная</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <MainPage />
    </div>
  );
};
export default Home;
