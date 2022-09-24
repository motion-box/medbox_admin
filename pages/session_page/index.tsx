import type { NextPage } from "next";
import Head from "next/head";
import SessionPage from "../../src/pages/session_page";

const Session: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MEDBOX | Посещения </title>
        <meta name="description" content="" />
      </Head>
      <SessionPage />
    </div>
  );
};

export default Session;
