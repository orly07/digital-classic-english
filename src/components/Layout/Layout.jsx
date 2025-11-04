import { memo } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = memo(({ children }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 160px)",
          overflowX: "hidden",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
});

Layout.displayName = "Layout";
export default Layout;
