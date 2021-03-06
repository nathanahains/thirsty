import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../organisms/navBar/NavBar";
import AppContext from "../context";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState([]);
  return (
    <NavBar>
      <Head>
        <title>Thirsty</title>
      </Head>
      <AppContext.Provider
        value={{
          data: data,
          setData: setData,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </NavBar>
  );
}

export default MyApp;
