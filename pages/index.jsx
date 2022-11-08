import Footer from "../Components/layouts/Footer";
import Navbar from "../Components/layouts/Header";
import GetCozy from "../Components/layouts/sections/GetCozy";
import Clients from "../Components/layouts/sections/HomePage/Clients";
import Designer from "../Components/layouts/sections/HomePage/Designer";
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
      <Clients/>
      <Designer/>
      <Footer/>
    </>
  );
}
