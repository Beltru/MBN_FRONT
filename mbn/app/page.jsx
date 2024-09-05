import Image from "next/image";
import ScrollCards from "../components/Cards-Scroll";

export default function Home() {
  return (
  <div className="h-[200vh] bg-gradient-to-r from-[#0f0015] via-[#080c2c] to-black overflow-hidden">
    <header>
      <nav className="flex justify-between flex-row items-center fixed bottom-[5vh] mx-[20vw] bg-[rgb(26,26,26,0.8)] w-[55vw] rounded-xl px-4 py-1 ">
        <div className="flex flex-row items-center">
          <div>
            <Image
              src={"/mbn.png"}
              width={55}
              height={55}
            />
          </div>
          <div className="divider">
            <hr className="line mx-2 mr-2"/>
          </div>
          <ul className="flex flex-row">
            <li className=" p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1">
              <Image 
                src={"/bank.svg"}
                width={18}
                height={18}
              />
            </li>
            <li className=" p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1">
              <Image 
                src={"/graph-up.svg"}
                width={18}
                height={18}
              />
            </li>
            <li className=" p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1">
              <Image 
                src={"/wallet2.svg"}
                width={18}
                height={18}
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center">
          <ul className="flex flex-row">
            <li className="px-2 py-1 rounded-lg flex items-center justify-center hover:hover:bg-[#303030] duration-500 cursor-pointer mr-4 text-[0.95rem] font-medium">
              Team
            </li>
            <li className="px-2 py-1 rounded-lg flex items-center justify-center hover:hover:bg-[#303030] duration-500 cursor-pointer mr-4 text-[0.95rem] font-medium">
              Support
            </li>
            <li className="px-2 py-1 rounded-lg flex items-center justify-center hover:hover:bg-[#303030] duration-500 cursor-pointer mr-4 text-[0.95rem] font-medium">
              Login
            </li>
            <li className="px-3 py-1 rounded-lg flex items-center justify-center bg-red-600 hover:hover:bg-red-700 duration-500 cursor-pointer mr-2 text-[0.95rem] font-bold">
              Sign Up
            </li> 
          </ul>
        </div>
      </nav>
    </header>
    <main className="mt-[70vh]">
      <ScrollCards  />
      {/* <section className="grid grid-rows-3 grid-cols-2 h-[100vh] w-[100vw] pl-[6vw] py-[8vh] pb-[16vh] gap-[16vw]">
        <aside className="row-span-3 col-span-1 bg-black rounded-2xl flex items-center justify-center">
          <video src="/graph.mp4" className="w-[50vw] h-[50vh]" autoPlay loop></video>
        </aside>
      </section> */}
    </main>
  </div>
  );
}
