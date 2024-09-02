import Image from "next/image";

export default function Home() {
  return (
    <header>
      <nav className="fixed bottom-[5vh] mx-[20vw] bg-black/70 w-[55vw] rounded-xl px-2 py-1">
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
            <li className="bg-black p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1">
              <Image 
                src={"/bank.svg"}
                width={18}
                height={18}
              />
            </li>
            <li className="bg-black p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1">
              <Image 
                src={"/graph-up.svg"}
                width={18}
                height={18}
              />
            </li>
            <li className="bg-black p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1">
              <Image 
                src={"/wallet2.svg"}
                width={18}
                height={18}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
