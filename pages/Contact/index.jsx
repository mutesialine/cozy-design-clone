import Footer from "../../Components/layouts/Footer";
import Header from "../../Components/layouts/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="bg-lightBrown">
        <div className="flex flex-col justify-center items-center text-center max-w-[50rem] mx-auto space-y-10 py-36 text-primary">
          <h2 className="text-[3.8125rem] font-sans text-basic  font-bold leading-[4.0625rem] ">
            Hello!
          </h2>
          <div className="w-10 h-[0.3125rem] bg-[#d4ac8e] mt-5"></div>
          <p className="text-4xl text-darkorange text">
            We’re a digital design shop in sunny San Diego, California. Who are
            you? 👋😆
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
