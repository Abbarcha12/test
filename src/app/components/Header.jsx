import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="container mx-auto h-auto  md:h-[70px] flex  justify-between items-center">
        <div className="h-[158px] w-[200px] bg-[white] rounded-lg  flex justify-center items-center align-baseline ">
           <Image
           className="mt-10"
           src={'/logo.png'}
           height={130}
           width={130}
           />
        </div>
        <div className="flex flex-wrap flex-col md:flex-row items-center space-y-2 md:space-y-0 justify-between">
            <Link href="/" className="font-[400] text-[18px] text-[#000] mr-6 ">
            Brows Profile
            </Link>
            <Link href="/" className="font-[400] text-[18px] text-[#000] mr-6">
            Member Login
            </Link> 
            <Link href="/" className="font-[400] rounded-lg text-[16px] text-[#fff] py-2 px-2  md:py-[16px]  md:px-[32px] bg-[#ED6C0E] flex justify-center items-center mr-6">
            Register Free
            </Link> 
        </div>
    </div>
  )
}

export default Header