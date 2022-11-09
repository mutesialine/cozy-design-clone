import Footer from "../../Components/layouts/Footer";
import Header from "../../Components/layouts/Header";

export default function Services() {
  return (
    <>
      <Header />
      <div className="bg-gradientHero">
        <div className="flex flex-col justify-center items-center text-center max-w-[50rem] mx-auto space-y-10 py-36 text-primary">
          <h2 className="text-7xl text-secondary font-fauBold">The portfolio</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
