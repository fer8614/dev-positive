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
import TopLeftImg from "../components/TopLeftImg";
import ScrollProgress from "../components/ScrollProgress";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <ScrollProgress />
      <TopLeftImg />
      <Nav />
      <Header />
      <main className="min-h-screen overflow-y-auto" style={{WebkitOverflowScrolling: 'touch', touchAction: 'pan-y'}}>{children}</main>
    </div>
  );
};

export default Layout;
