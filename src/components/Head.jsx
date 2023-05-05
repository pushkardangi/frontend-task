import Carousel from "./Carousel";
import { Header, Logo, Menu, Search } from "../assets";
import "../../src/App.css";

const Head = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="bg-[#444f62] flex justify-center items-center max-sm:hidden">
            <div className="p-5 h-full">
                <img src={Header} className="h-full object-cover rounded-large" alt="image" />
            </div>
        </div>
        <div className="bg-purple-300 flex flex-col justify-between">
            {/* Navbar */}
            <div className="bg-[#444f62] flex justify-between items-center">
                <div>
                    <img src={Logo} className="h-16" alt="logo" />
                </div>
                <div className="flex">
                    <img src={Search} className="h-6 mx-2" alt="logo" />
                    <img src={Menu} className="h-6 mx-4" alt="logo" />
                </div>
            </div>

            {/* Middle */}
            <div className="bg-green-100">
                <div className="text-7xl m-4 dm-sans">
                    <div>Create & </div>
                    Evolve
                </div>
                <div className="text-2xl m-4">
                    surreal just got real
                </div>
                <div className="m-4">
                    <button className="rounded py-2 px-4 mr-2 bg-blue-300">Download</button>
                    <button className="rounded py-2 px-4 mr-2 bg-blue-300">Learn more</button>
                </div>
            </div>

            <div className="bg-orange-100">
                <Carousel />
            </div>
        </div>
      </div>
    </>
  )
}

export default Head
