import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
