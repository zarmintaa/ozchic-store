import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router, { useRouter } from "next/router";

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
  return (
    <Layout>
      <Component key={router.asPath} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
