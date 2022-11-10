import Footer from "../../Components/layouts/Footer";
import Header from "../../Components/layouts/Header";

export default function About(){
  return (
    <>
      <Header />
      <div className="bg-gradientHero">
        <div className="flex flex-col justify-center items-center text-center max-w-[50rem] mx-auto space-y-10 py-36 text-primary">
          <h2 className="text-7xl text-secondary font-fauBold">Who we are</h2>
          <p className="text-xl">
            We aim to alleviate the anxiety companies and execs feel knowing
            that they don’t have the design and related marketing expertise (or
            capacity) to attain their goals. We do that by efficiently and
            reliably delivering quality work you can trust. It’s not rocket
            surgery. 🧠
          </p>
          <p className="text-xl">
            No bullshit. No precious vision quests for inspiration. That stuff
            is expensive and not likely what you need. Pragmatic collaboration,
            measurable results, and trustworthy partnership… that’s the stuff.
            🏆
          </p>
          <p className="text-xl">
            There’s too much worry in the world. We want you to feel the
            opposite: Cozy. 🧘
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}