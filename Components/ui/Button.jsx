import react from "react";
export default function Button({ child, variant, onClick, noPattern, className }) {
  return (
    <button
      onClick={onClick}
      className={
        `hover:bg-opacity-75 rounded-[10px] text-opacity-90 text-primary font-bold justify-center tracking-[2px] leading-5 py-8 px-6  text-center uppercase bg-[#b55730] items-center text-[20px] ${variant}
      `}
    >{child}</button>
  );
}