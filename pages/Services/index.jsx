import Footer from "../../Components/layouts/Footer";
import Header from "../../Components/layouts/Header";

export default function Services() {
  return (
    <>
      <Header />
      <div className="bg-gradientHero">
        <div className="flex flex-col justify-center items-center text-center max-w-[50rem] mx-auto space-y-10 py-36 text-primary">
          <h2 className="text-7xl text-secondary font-fauBold">Our services</h2>
          <p className="text-xl">
            Two collaboration models and a wide range of capabilities aimed at
            providing the reliability of a design department for about the cost
            of a design salary.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
