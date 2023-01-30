import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    // prevents the default navbar elements from dissapearing allowing us to add other elements allowing with it.
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className=" text-[#4d0679] flex items-center">
          <ArrowUturnLeftIcon className=" h-6 w-6 text-[#4d0679] mr-2"/>
          Go to website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;
