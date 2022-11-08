export default function Clients() {
  return (
    <section className=" bg-lightBrown flex flex-col space-y-10 justify-center items-center pb-[140px]">
      <div className=" flex flex-col justify-center items-center max-w-[75rem] py-[8.75rem] px-6 mx-auto ">
        <h2 className="text-[3.8125rem] font-sans text-basic  font-bold leading-[4.0625rem] pt-[3.75rem]  pb-[1.875rem]">
          ❤️ from our clients
        </h2>
        <div className="w-10 h-[0.3125rem] bg-[#d4ac8e] mt-5"></div>
      </div>
      <div className=" max-w-[1200px] mx-auto flex justify-center space-x-10 ">
        <div className=" flex items-end justify-end w-full">
          <div className=" flex flex-col py-20 w-[80%] mt-auto h-fit pr-10 pl-[3.75rem] space-y-6 text-white bg-[url('/assets/images/noise.webp')] bg-[#223240] rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[80%]">
            <img
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp"
              alt="boy profile"
              className="m-auto"
              width={74}
              height={74}
            />
            <h5 className="font-sans text-right text-secondary text-[1.25rem] ">
              “One of the top design professionals…”
            </h5>
            <p className="text-lg text-right font-sans mx-auto w-full text-[#e4ded5]">
              I connect with hundreds of talented folks on a<br /> regular
              basis, and I can say with
              <br /> complete confidence that Lee is one of the best UX
              designers in Aquent/Vitamin T's global network.
            </p>
            <div className="text-xs text-[#e4ded5] text-right">
              Susie Pollasky
            </div>
            <div className="text-[0.75rem] text-right">
              Now: Leadership Recruiting @ Product Design <br />
              at Facebook
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" w-[65%]   py-[5rem] pr-10 pl-[3.75rem] bg-[url('/assets/images/noise.webp')] bg-[#2d4850] rounded-t-[100%] rounded-br-[50%] ">
            <img
              src="	https://assets.website-files.com/5b60dd35a56ec7bab…03d2d/604fb5a50fc9931734c91126_1517679695814.webp"
              alt="girl profile"
              className="m-auto"
              width={74}
              height={74}
            />
            <h5 className="font-sans text-secondary text-[1.25rem] ">
              “They’re a very well-rounded organization…””
            </h5>
            <p className="text-lg font-sans  text-[#e4ded5]">
              Cost per conversion and all of those metrics have dropped
              significantly. We used to pay an average of $100 per lead that
              converts… now we have that down to about $20. Sessions and
              contacts have also gone up astronomically, at least threefold.
              Organic search and social media referrals have all continued to
              skyrocket. We’re really pleased.
            </p>
            <div className="text-xs text-[#e4ded5] uppercase ">
              MARTIN SPRITZER
            </div>
            <div className="text-[0.75rem] text-white ">
              General Manager @ iQuoteXpress
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto  flex justify-center items-start  space-x-10  ">
        <div className=" flex justify-end w-full">
          <div className="bg-[url('/assets/images/noise.webp')] bg-whiteBrown w-[85%] py-20 mt-auto h-fit px-[60px] space-y-6 text-white rounded-br-[60%] rounded-bl-[60%] rounded-tl-[80%]">
            <img
              src="https://assets.website-files.com/5b60dd35a56ec7bab…03d2d/604fb7dda4eebc035f1c0beb_1565729526231.webp"
              alt="boy profile"
              className="m-auto"
              width={74}
              height={74}
            />
            <h5 className="font-sans font-bold  text-white text-[1.25rem] ">
              “The project was successful”
            </h5>
            <p className="text-lg text-right font-sans mx-auto w-full text-[#e4ded5]">
              They were a pleasure to work with and I'm really happy with the
              results. They pretty much nailed it.
            </p>
            <div className="text-xs text-[#e4ded5] text-right">
              MICHAEL WEISFELD
            </div>
            <div className="text-[0.75rem] text-right text-[#e4ded5]">
              Director of Digital Marketing @ National Funding
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" bg-[url('/assets/images/noise.webp')] bg-darkorange w-[85%] rounded-tr-[100%] space-y-6 rounded-br-[60%] pr-10 rounded-bl-[60%] py-20 pl-[60px]  ">
            <img
              src="https://assets.website-files.com/5b60dd35a56ec7bab…03d2d/604fb7dda4eebc035f1c0beb_1565729526231.webp"
              alt="boy profile"
              width={74}
              height={74}
            />
            <h5 className="font-sans text-white text-[1.25rem] ">
              “One of the top design professionals…”
            </h5>
            <p className="text-lg  font-sans mx-auto w-full text-[#e4ded5]">
              They strive to come up with good design, and they focus on all the
              right things. The quality of their work is high, and all the
              deliverables are very well-organized and professional.
            </p>
            <div className="text-xs text-[#e4ded5] ">Eric weiss</div>
            <div className="text-[0.75rem] text-xs text-[#e4ded5]">
              Director of Digital Marketing @ National Funding
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
