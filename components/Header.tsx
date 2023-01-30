import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 ">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className=" rounded-full object-cover"
            src="/MID-Purple.png"
            width={200}
            height={100}
            // fill
            alt="logo"
            priority
          />
        </Link>
        {/* <h1 className=" font-mono">MI&D Visions</h1> */}
      </div>
      <div>
        <Link href="https://www.midvisions.co.za/"
        className=" px-5 py-3 text-sm md:text-base bg-[#f5f5f5] text-[#4d0679] flex items-center rounded-lg text-center">Come visit and learn about MI&D Visions | MID Visions</Link>
      </div>
    </header>
  );
}

export default Header;
