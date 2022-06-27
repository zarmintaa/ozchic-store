import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";

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
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
