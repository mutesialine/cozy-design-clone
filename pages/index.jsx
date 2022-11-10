import Footer from "../Components/layouts/Footer";
import Header from "../Components/layouts/Header";
import GetCozy from "../Components/sections/GetCozy";
import Clients from "../Components/sections/HomePage/Clients";
import Designer from "../Components/sections/HomePage/Designer";
import Hero from "../Components/sections/HomePage/Hero";
export default function Home() {
  return (
    <>
      <title>Cozy: Honest, real-world digital design & marketing</title>
      <meta name="description" content="NEAR dev 101" />
      <link rel="icon" href="/favicon.ico" />
      <Header/>
      <Hero/>
      <GetCozy/>
      <Clients/>
      <Designer/>
      <Footer/>
    </>
  );
}
