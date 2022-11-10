export default function Designer(){
  return (
    <>
      <div className="bg-fullblackblue">
        <div className="max-w-[75rem] mx-auto py-16 px-20 space-y-14 overflow-hidden">
          <h2 className=" text-center text-secondary font-semibold opacity-70 italic font-sans text-[1.875rem] ">
            More than 150 happy clients
          </h2>
          <div className="flex justify-center gap-10">
            <img
              className="h-7"
              src="/assets/images/svg/logo - light.svg"
              alt="logo"
            />
            <img className="h-7" src="/assets/images/svg/lightstreamlogo.svg" />
            <img className="h-7" src="/assets/images/svg/nationafull.svg" />
            <img className="h-8" src="/assets/images/svg/Sapient.svg" />
            <img className="h-7" src="/assets/images/svg/sdge.svg" />
            <img
              className=" w-[6.25rem] h-7"
              src="/assets/images/svg/sonylogo.svg"
            />
            <img className="h-7" src="/assets/images/svg/thermofisher.svg" />
          </div>
        </div>
      </div>
      <div className=" relative overflow-hidden">
        <div className="absolute w-full h-full">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full"
            src="/assets/video/Computer-transcode.mp4 "
          />
        </div>
        <div className="bg-black opacity-70 w-full z-10">
          <div className="relative max-w-[58.75rem] mx-auto flex px-6 py-[8.75rem] justify-between space-y-6 z-50 ">
            <img className="w-[7.5rem]" src="/assets/images/svg/reverse.svg" />
            <div className=" space-y-8 text-[#e4ded5] pl-[6.25rem] font-sans ">
              <h2 className="text-5xl font-bold  ">
                <span className="italic">Psst…</span>
                <br /> are you a designer?
              </h2>
              <p className="text-xl ">
                Consider joining our{" "}
                <span className="text-lightred hover:underline font-sans font-bold">
                  {" "}
                  San Diego Design Designers
                </span>{" "}
                group. More than 700 people, we meet online via Slack and in
                person at social events around the city. It’s a great
                opportunity to share ideas, get inspired, find support, and
                celebrate great design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative bg-[#b55730] ">
        <p className="text-5xl leading-[54px] text-white font-sans font-bold text-center py-[60px] px-[3.4688rem]">
          🙋 How can we help?
        </p>
      </div>
    </>
  );
}