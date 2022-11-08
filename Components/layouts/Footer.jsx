import Link from "next/link";
export default function Footer(){
  const LogoIcon=[
    "facebook.svg",
    "instagram.svg",
    "linkedln.svg",
    "youtube.svg",
    "twitter.svg"
  ]
  return (
    <section className=" bg-lightBrown">
      <div className="max-w-[61rem] mx-auto pt-12 pb-32">
        <div className="flex justify-between">
          <div className="flex">
            <img className="w-[4.5625rem]" src="/assets/images/svg/footerlogo.svg" />
            <div className="flex space-x-6 text-[#c47d57] font-sans">
              <Link href="#">About</Link>
              <Link href="#">Service</Link>
              <Link href="#">Work</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-2 font-sans">
            <img className="w-5 h-5" src="/assets/images/emoji@2x.webp" />
            <p className=" text-lightred">San Diego Digital Designers</p>
          </div>
          <div className="flex space-x-3">
           {
            LogoIcon.map((social)=>(
              <img src={`/assets/images/svg/ ${social}`}  className="w-3 h-3"/>
            ))
           }
          </div>
        </div>
      </div>
    </section>
  );
}