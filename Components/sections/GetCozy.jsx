import Image from "next/image";
import Button from "../ui/Button"

export default function GetCozy() {
  const brands1 = [
    "/image4.webp",
    "/expertise.webp",
    "/digital.webp",
    "/Best.webp",
  ];
  const brands2 = [
    "/accredited.svg",
    "/top.webp",
    "/agencyvista.png",
    "/image9.png",
    "/Design-Rush.webp",
  ];
  return (
    <div className="background-getCozy">
      <section className=" max-w-[75rem] py-[9rem]  mx-auto  flex  ">
        <div className="flex flex-col max-w-[50rem]  pl-[9rem]   gap-10">
          <p className="text-[1.875rem] font-bold">🌴🐻🇺🇸</p>
          <div>
            <h1 className="text-[4.375rem] text-[#223240] leading-[4.8125rem] font-sans">
              Get Cozy
            </h1>
            <h2 className="text-[2.3125rem] leading-[3.5625rem] text-[#c47d57]">
              Design &amp;&nbsp;digital marketing
              <br />
              in San Diego, California
            </h2>
          </div>
          <p className="text-[1.375rem] font-sans text-[#223240] leading-[2.2rem] w-3/4">
            We’re an award-winning design shop based in South Park, San Diego.
            We efficiently combine the best parts of user experience (UX) with
            creative design and execution to create effective collateral that
            connects with the human beings who interact with them. 🤯
            <br />
            No epic quests for inspiration. Just pragmatic collaboration and
            efficient results from big-agency graduates with decades of
            experience.
            <br />
          </p>
          <div>
            <Button child="why we what we do " />
          </div>
        </div>
        <div className="flex  gap-6  ">
          <div className=" flex flex-col justify-center gap-[1.875rem] pt-12 px-5 ">
            {brands1.map((brand) => (
              <Image
                src={`/assets/images${brand}`}
                alt="brands picture"
                width={200}
                height={200}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center px-5 gap-[2.5rem]">
            {brands2.map((brand) => (
              <Image
                src={`/assets/images${brand}`}
                alt="brands picture"
                width={200}
                height={200}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
