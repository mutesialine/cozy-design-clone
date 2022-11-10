import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const LogoIcon = [
    "facebook.svg",
    "instagram.svg",
    "linkedln.svg",
    "youtube.svg",
    "twitter.svg",
  ];
  return (
    <section className=" hidden lg:block bg-lightBrown ">
      <div className="max-w-[75rem] mx-auto pt-16 pb-14">
        <div className="flex  justify-between items-center pb-16 border-b-[0.125rem] border-[#d4ac8e]">
          <div className="flex items-center gap-12">
            <img
              className="w-[4.5625rem]"
              src="/assets/images/svg/footerlogo.svg"
            />
            <div className="flex space-x-8 text-sm text-darkorange font-sans ">
              <Link href="#">About</Link>
              <Link href="#">Service</Link>
              <Link href="#">Work</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex justify-center items-center space-x-4 font-sans">
              <Image
                src="/assets/images/emoji@2x.webp"
                alt="emogi"
                width={20}
                height={20}
              />
              <p className=" text-lightred">San Diego Digital Designers</p>
            </div>
            <div className="flex space-x-2">
              <div className="p-1.5 h-fit rounded-sm shadow-sm  bg-[#1da1f2]">
                <Image
                  src="/assets/images/svg/twitter.svg"
                  alt="icons"
                  width={12}
                  height={16}
                />
              </div>
              <div className="p-1.5 h-fit rounded-sm shadow-sm bg-[#2977c9]">
                <Image
                  src="/assets/images/svg/linkedln.svg"
                  alt="icons"
                  width={12}
                  height={16}
                />
              </div>
              <div className="p-1.5 h-fit rounded-sm shadow-sm bg-[#4267b2]">
                <Image
                  src="/assets/images/svg/facebook.svg"
                  alt="icons"
                  width={12}
                  height={16}
                />
              </div>
              <div className="p-1.5 h-fit rounded-sm shadow-sm bg-[#dd7a8d]">
                <Image
                  src={`/assets/images/svg/instagram.svg`}
                  alt="icons"
                  width={12}
                  height={16}
                />
              </div>
              <div className="p-1.5 h-fit rounded-sm shadow-sm bg-[#c4302b] ">
                <Image
                  src={`/assets/images/svg/youtube.svg`}
                  alt="icons"
                  width={10}
                  height={16}
                />
              </div>
              <div className="p-1.5 h-fit rounded-sm shadow-sm bg-[#16313a] ">
                <Image
                  src={`/assets/images/svg/clutch.svg`}
                  alt="icons"
                  width={12}
                  height={16}
                />
              </div>
              <div className="p-1.5 h-fit rounded-sm shadow-sm bg-[#16313a] ">
                <Image
                  src={`/assets/images/svg/envelope.svg`}
                  alt="icons"
                  width={13}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-8 items-center justify-between ">
          <div className="flex  items-center gap-8">
            <div>
              <Image
                src="/assets/images/accredited.svg"
                alt="brands picture"
                width={140}
                height={200}
              />
              <p className="font-sans uppercase text-sm pl-2 pt-2 font-bold text-[#2d4850] text-center">
                BBB rating: A+
              </p>
            </div>
            <Image
              src="/assets/images/Bureau.png"
              alt="brands picture"
              width={140}
              height={150}
            />
            <Image
              src="/assets/images/Capture.webp"
              alt="brands picture"
              width={220}
              height={200}
            />
          </div>
          <div className=" flex gap-6 flex-end">
            <p className="text-xs text-darkblue">
              Made with ❤️ in beautiful, sunny San Diego. ©2021
            </p>
            <div className=" space-x-4 text-xs leading-4 text-darkorange font-sans">
              <Link href="#">Privacy</Link>
              <Link href="#">Photo Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
