import Footer from "../../Components/layouts/Footer";
import Header from "../../Components/layouts/Header";

export default function Blogs() {
  return (
    <>
      <Header />
      <div className="bg-gradientHero">
        <div className="flex flex-col justify-center items-center text-center max-w-[50rem] mx-auto space-y-10 py-36 text-primary">
          <h2 className="text-7xl text-secondary font-fauBold">Our thoughts</h2>
          <p className="text-xl">
            Valuable stuff from the best that ever breathed. 😆
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
