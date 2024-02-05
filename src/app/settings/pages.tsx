import Link from "next/link";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

export const Settings = () => {
  return (
    <div className="flex justify-between flex-col gap-4 py-4 text-center">
      <h3>Settings</h3>
      <Link
        className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105  hover:scale transition duration-75  px-4 py-4 rounded-md"
        href="/#"
      >
        <div className="flex items-center  text-center justify-around">
          <img src="/images/home.svg" />
          <button>Language Settings</button>
        </div>
      </Link>
      <Link
        className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href=""
      >
        <div className="flex items-center  text-center justify-around">
          <img src="/images/alldua.svg" />
          <button>General Settings</button>
        </div>
      </Link>
      <Link
        className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/memorize"
      >
        <div className="flex items-center  text-center justify-around">
          <img src="images/memorize.svg" />
          <button>Font Settings</button>
        </div>
      </Link>
      <Link
        className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/bookmark"
      >
        <div className="flex items-center  text-center justify-around">
          <img src="/images/bookmark.svg" />
          <button>Appearance Settings</button>
        </div>
      </Link>
    </div>
  );
};
