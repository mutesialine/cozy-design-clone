import Button from "../../ui/Button";

export default function GetCozy(){
return (
  <div className="bg-[#d6c9bd]">
    <section className=" max-w-[1200px] mx-auto py-[140px] px-6 flex ">
      <div className="flex flex-col gap-10">
        <p className="text-[30px] font-bold">🌴🐻🇺🇸</p>
        <div>
          <h1 className="text-[70px] text-[#223240] leading-[77px] font-sans">
            Get Cozy
          </h1>
          <h2 className="text-[37px] leading-[57px] text-[#c47d57]">
            Design &amp;&nbsp;digital marketing
            <br />
            in San Diego, California
          </h2>
        </div>
        <p className="text-[22px] font-sans text-[#223240] leading-[35.2px]">
          We’re an award-winning design shop based in South Park, San Diego. We
          efficiently combine the best parts of user experience (UX) with
          creative design and execution to create effective collateral that
          connects with the human beings who interact with them. 🤯
          <br />
          No epic quests for inspiration. Just pragmatic collaboration and
          efficient results from big-agency graduates with decades of
          experience.
          <br />
        </p>
        <div>
          <Button child="why we what we do "/>
        </div>
      </div>
      <div>
        im
      </div>
    </section>
  </div>
);
}
