import type { NextPage } from "next";
import Head from "next/head";
import SupportPage from "../../src/pages/support_page";

const Supprot: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MEDBOX | Почта</title>
        <meta name="description" content="" />
      </Head>
      <SupportPage />
    </div>
  );
};

export default Supprot;
