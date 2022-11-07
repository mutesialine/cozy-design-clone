import Navbar from "../Components/layouts/Header";
import GetCozy from "../Components/layouts/sections/GetCozy";
import Hero from "../Components/layouts/sections/HomePage/Hero";
export default function Home() {
  return (
    <>
      <title>Cozy: Honest, real-world digital design & marketing</title>
      <meta name="description" content="NEAR dev 101" />
      <link rel="icon" href="/favicon.ico" />
      <Navbar />
      <Hero/>
      <GetCozy/>
    </>
  );
}
