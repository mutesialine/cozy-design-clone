import Button from "../../ui/Button";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-gradientHero ">
      <div className=" relative max-w-screen-2xl mx-auto  pt-24  grid grid-cols-2 overflow-hidden  ">
        <div className=" flex flex-col gap-4 pt-12 pb-16 pl-12 ">
          <h1 className="text-[5.625rem] font-fauBold font-bold leading-[6.1875rem] bg-image">
            Your design teamfor the cost
            <br /> of a salary.
          </h1>
          <p className="text-[2.5rem] text-primary opacity-70 font-sans font-semibold ">
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don't?
          </p>
          <div className="pt-6">
            <Button
              variant="bg-[url('/assets/images/noise.webp')]"
              child="SEE HOW WE WORK & WHAT WE CAN DO"
            />
          </div>
        </div>
        <div className=" absolute -right-64 bottom-0">
          <Image src="/assets/images/getcozy.png" width={846} height={861} />
        </div>
      </div>
    </section>
  );
}
