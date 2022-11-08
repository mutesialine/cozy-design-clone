import Button from "../../../ui/Button"

export default function Hero() {
  return (
    <section className="bg-gradientHero ">
      <div className=" relative max-w-screen-2xl mx-auto  grid grid-cols-2 overflow-hidden  ">
        <div className=" flex flex-col gap-4 py-12 pl-4  ">
          <h1 className="text-[5.625rem] font-fauBold font-bold leading-[6.1875rem] bg-image">
            Your design
            <br /> teamfor the <br />
            cost of a <br /> salary.
          </h1>
          <p className="text-[2.5rem] text-third font-sans font-semibold ">
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don't?
          </p>
          <div>
            <Button child="SEE HOW IT WORKS & WHAT WE CAN DO" />
          </div>
        </div>
        <div className=" absolute -right-64 bottom-0">
          <img
            className="w-[52.875rem] h-[53.8125rem]"
            src="/assets/images/getcozy.png"
          />
        </div>
      </div>
    </section>
  );
}
