import Image from "next/image";
export default function Clients() {
  return (
    <section className=" bg-lightBrown flex flex-col space-y-10 justify-center items-center pb-[8.75rem]">
      <div className=" flex flex-col justify-center items-center max-w-[75rem] py-[8.75rem] px-6 mx-auto ">
        <h2 className="text-[3.8125rem] font-sans text-basic  font-bold leading-[4.0625rem] pt-[3.75rem]  pb-[1.875rem]">
          ❤️ from our clients
        </h2>
        <div className="w-10 h-[0.3125rem] bg-[#d4ac8e] mt-5"></div>
      </div>

      <div className="relative space-y-7">
        <div className=" max-w-[75rem] mx-auto flex justify-center space-x-8 ">
          <div className=" relative  flex items-end justify-end w-full">
            <div className=" -bottom-20 -right-20 p-2 absolute  border-2 border-white rounded-full border-opacity-20">
              <div className="p-2 border-2 border-white rounded-full border-opacity-50">
                <div className="bg-lightBrown p-10 rounded-full flex justify-center  items-center ">
                  <Image
                    src="/assets/images/svg/chaticon.svg"
                    alt="chat icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className=" flex flex-col py-20 w-[80%] mt-auto h-fit pr-10 pl-[3.75rem] space-y-4 text-white bg-[url('/assets/images/noiseonclients.webp')] bg-[#223240] rounded-tr-[60%] rounded-tl-[60%] rounded-bl-[80%]">
              <Image
                src="/assets/images/susie.webp"
                alt="boy profile"
                className="m-auto border-2 border-white rounded-2xl mb-6"
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
              <div className="space-y-1">
                <p className="text-xs text-primary text-right uppercase font-bold leading-4 tracking-[0.25rem]">
                  Susie Pollasky
                </p>
                <p className="text-xs text-right text-primary leading-4 opacity-70">
                  Now: Leadership Recruiting @ Product Design <br />
                  at Facebook
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" w-[65%]   py-[5rem] pr-10 pl-[3.75rem] bg-[url('/assets/images/noiseonclients.webp')] bg-[#2d4850] rounded-t-[100%] rounded-br-[50%] space-y-4 ">
              <Image
                src="/assets/images/profile2.webp"
                alt="girl profile"
                className="m-auto border-2 border-white rounded-2xl mb-4"
                width={74}
                height={74}
              />
              <h5 className="font-sans text-secondary text-[1.25rem] ">
                “They’re a very well-rounded organization…””
              </h5>
              <p className="text-lg font-sans  text-primary">
                Cost per conversion and all of those metrics have dropped
                significantly. We used to pay an average of $100 per lead that
                converts… now we have that down to about $20. Sessions and
                contacts have also gone up astronomically, at least threefold.
                Organic search and social media referrals have all continued to
                skyrocket. We’re really pleased.
              </p>
              <div className="space-y-1">
                <p className="text-xs text-primary uppercase font-bold leading-4 tracking-[0.25rem] ">
                  MARTIN SPRITZER
                </p>
                <p className="text-[0.75rem] text-primary opacity-70 ">
                  General Manager @ iQuoteXpress
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[75rem] mx-auto  flex justify-center items-start  space-x-8 ">
          <div className=" flex justify-end w-full ">
            <div className="bg-[url('/assets/images/noiseonclients.webp')] bg-whiteBrown w-[68%] py-20 mt-auto h-fit px-[4rem] space-y-4 text-white rounded-br-[60%] rounded-bl-[60%] rounded-tl-[80%] text-end ">
              <Image
                src="/assets/images/blackmanprofile.webp"
                alt="black profile"
                className="ml-auto border-2 border-white rounded-2xl  saturate-0 mix-blend-luminosity mb-8"
                width={74}
                height={74}
              />
              <h5 className="font-sans font-bold  text-primary text-[1.25rem] ">
                “They're just good people.”
              </h5>
              <p className="text-lg text-right font-sans font-semibold mx-auto w-full text-primary">
                They were a pleasure to work with and I'm really happy with the
                results. They pretty much nailed it.
              </p>
              <div className="space-y-1">
                <p className="text-xs text-primary uppercase text-right tracking-[0.25rem]">
                  Eric weiss
                </p>
                <p className="text-xs text-right text-primary opacity-70">
                  Founder @ Full Cycle Product Development
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bg-[url('/assets/images/noiseonclients.webp')] bg-darkorange w-[85%] rounded-tr-[100%] space-y-4 rounded-br-[60%] pr-10 rounded-bl-[60%] py-20 pl-[3.75rem] text-start  ">
              <Image
                src="/assets/images/whitemanprofile.webp"
                alt="boy profile"
                width={74}
                height={74}
                className="mr-auto border-2 border-white rounded-2xl saturate-0 mix-blend-luminosity mb-8"
              />
              <h5 className="font-sans font-bold text-primary text-[1.25rem]  ">
                “The project was successful”
              </h5>
              <p className="text-lg  font-sans font-semibold mx-auto w-full text-primary">
                They strive to come up with good design, and they focus on all
                the right things. The quality of their work is high, and all the
                deliverables are very well-organized and professional.
              </p>
              <div className="space-y-1">
                <p className="text-xs text-primary uppercase tracking-[0.25rem] ">
                  MICHAEL WEISFELD
                </p>
                <p className=" leading-4 text-xs text-primary opacity-70">
                  Director of Digital Marketing @ National Funding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
