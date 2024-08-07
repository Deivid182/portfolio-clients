import Image from "next/image"
const Header = () => {
  
  return (
    <div className="flex items-center justify-between my-10 container mx-auto">
      <span className="text-2xl text-white font-bold">
        davepm
      </span>
      <div className="flex items-center gap-8">
        <Image src="/icons/github.png" alt="github icono" width={30} height={30}/>
        <Image src="/icons/linkedin.png" alt="linkedin icono" width={30} height={30}/>
        <Image src="/icons/twitter.png" alt="twitter icono" width={30} height={30}/>
      </div>
    </div>
  )
}

export default Header