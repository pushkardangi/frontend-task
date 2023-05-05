import Carousel from "./Carousel";
import { Header, Logo, Menu, Search } from "../assets";
import "../../src/App.css";

const Head = () => {
  return (
    <>
      <div className="bg-slate-700 grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex justify-center items-center max-sm:hidden">
            <div className="p-5 h-full">
                <img src={Header} className="h-full object-cover rounded-large" alt="image" />
            </div>
        </div>
        
        <div className="flex flex-col justify-between">
            {/* Navbar */}
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <img src={Logo} className="h-16" alt="logo" />
                </div>
                <div className="flex">
                    <img src={Search} className="h-6" alt="logo" />
                    <img src={Menu} className="h-6 mx-8" alt="logo" />
                </div>
            </div>
            {/* Middle */}
            <div className="text-white">
                <div className="text-7xl m-4 dm-sans">
                    <div>Create &</div>
                    <div>Evolve</div>
                </div>
                <div className="text-2xl m-4">
                    Surreal just got real
                </div>
                <div className="m-4">
                    <button className="rounded py-2 px-4 mr-2 bg-[#cda2cc]">Download</button>
                    <button className="rounded py-2 px-4 mr-2 bg-[#efa999]">Learn more</button>
                </div>
            </div>

            <div>
                <Carousel />
            </div>
        </div>
      </div>
    </>
  )
}

export default Head
