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
        className="w-[100px] h-[69px] "
        src="/assets/images/svg/logo.svg"
        alt="logo"
      />
      <div className="  flex justify-end  font-sans font-semibold  space-x-6 text-2xl  leading-[30px] text-primary">
        {menulink.map((v, i) => {
          return (
            <Link
              className="hover:text-secondary transform:5sec"
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
