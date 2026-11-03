// fonts
import { Sora } from "@next/font/google";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div
      className={`page site-root text-white ${sora.variable} font-sora relative isolate pb-28 xl:pb-0`}
    >
      <ScrollProgress />
      <Header />
      <Nav />
      <main id="main-content" tabIndex={-1} className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
