import Image from "next/image"
const Header = () => {
  return (
    <div className="fixed top-0 flex justify-between items-center w-full p-4 md:px-24 bg-[#1c1d26]">
      <span className="tracking-widest">
        WebCrafter
      </span>
      <button className="rounded-md font-bold text-xs text-white bg-[#ff6663] p-4 ">
        HIRE ME
      </button>
    </div>
  )
}

export default Header