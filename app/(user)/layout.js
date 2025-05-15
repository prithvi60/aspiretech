import NavBar from "@/components/layout/NavBar";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/programs/Banner";
import ExitModalCard from "@/components/features/ExitModalCard";

export default function SiteLayout({ children }) {
  return (
    <div>
      <main className={`relative`}>
        <ExitModalCard />
        <Banner />
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
