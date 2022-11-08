import Link from "next/link";
export default function Navbar() {
  let menulink = [
    {
      name: "Get Cozy",
      href: "",
    },
    {
      name: "What we do",
      href: "",
    },
    {
      name: "Our Work",

      href: "",
    },
    {
      name: "The Blog",
      href: "",
    },
    {
      name: "Say hi",
      href: "",
    },
  ];

  return (
    <div className="background-gradient-header pl-14 pr-6 py-6 flex justify-between items-center">
      <img
        className="w-[6.25rem] h-[4.3125rem] "
        src="/assets/images/svg/logo.svg"
        alt="logo"
      />
      <div className="  flex justify-end  font-sans font-semibold space-x-6  ">
        {menulink.map((v, i) => {
          return (
            <Link
              className="  hover:text-secondary transition text-[25px] leading-[1.875rem] text-primary  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              key={i}
              href={v.href}
            >
              <p>{v.name}</p>{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
