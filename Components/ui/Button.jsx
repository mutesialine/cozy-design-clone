import react from "react";
export default function Button({ child, variant, onClick, noPattern, className }) {
  return (
    <button
      onClick={onClick}
      className={
        `hover:bg-opacity-75 rounded-[0.625rem] text-opacity-90 text-primary font-bold justify-center tracking-[0.125rem] leading-5 py-8 px-6  text-center uppercase bg-[#b55730] items-center text-[1.25rem] ${variant}
      `}
    >{child}</button>
  );
}