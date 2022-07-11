import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import {
  deleteAuthFromLocalStorage,
  getAuthFromLocalStorage,
} from "../lib/AuthHelper";
import AlertContainer from "../components/alert/AlertContainer";

const progress = new ProgressBar({
  size: 3,
  color: "RGB(20, 184, 166)",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const auth = getAuthFromLocalStorage();
    const now = new Date();

    if (auth) {
      if (now > auth.data.expired_at) {
        deleteAuthFromLocalStorage();
        router.replace("/login");
      } else {
        console.log("Anda Login");
      }
    } else {
    }

    console.log({ now, authDate: auth?.data?.expired_at });
  }, []);
  return (
    <Layout>
      <Component key={router.asPath} {...pageProps} />
      <AlertContainer />
    </Layout>
  );
}

export default MyApp;
