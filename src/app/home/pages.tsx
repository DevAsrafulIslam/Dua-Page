"use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../navigation/navigation";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Settings } from "../settings/pages";

export const HomePage = () => {
  return (
    <div className="flex justify-between text-black">
      <div className="flex justify-between flex-col gap-4 w-2/12 text-center rounded-3xl px-5 py-7 shadow  ">
        <img
          className="w-[73px] items-center mx-auto mb-16"
          src="/images/f49d5cb63d9a02588cddba5d7357d8ab.png"
          alt=""
        />
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105  hover:scale transition duration-75  px-4 py-4 rounded-md"
          href="/"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="/images/home.svg" />
            <button>Home</button>
          </div>
        </Link>
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
          href="/alldua"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="/images/alldua.svg" />
            <button>Alldua</button>
          </div>
        </Link>
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
          href="/memorize"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="images/memorize.svg" />
            <button>Memorize</button>
          </div>
        </Link>
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
          href="/bookmark"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="/images/bookmark.svg" />
            <button>Bookmark</button>
          </div>
        </Link>
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
          href="/ruqyah"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="/images/ruqyah.svg" />
            <button>Ruqyah</button>
          </div>
        </Link>
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
          href="/dua-info"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="/images/dua-info.svg" />
            <button>Dua Info</button>
          </div>
        </Link>
        <Link
          className="bg-[#f7f8fa] hover:text-[#20a45b] hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
          href="/books"
        >
          <div className="flex items-center  text-center justify-around">
            <img src="/images/books.svg" />
            <button>Books</button>
          </div>
        </Link>
        <FaHandHoldingHeart className="text-white bg-[#20a45b] w-[73px] rounded-xl h-[73px] items-center mx-auto mt-16" />
      </div>
      <div className="flex-1 mx-7">
        <Navigation></Navigation>
        <div className="flex mt-4 gap-4 justify-between">
          <div className="border w-4/12 text-center rounded-t-xl shadow-md">
            <h1 className="bg-[#20a45b] text-white  py-4 rounded-t-xl">
              Categories
            </h1>
            <input
              className="px-3 py-4 w-11/12 my-4 border rounded-md"
              type="search"
              placeholder="Search by Categories"
              name=""
              id=""
            />
          </div>
          <div className="grid gap-4 w-6/12">
            <div className="border rounded-md p-4  shadow-md">
              <h1 className="">
                <span className="text-[#20a45b]">Section:</span> The servant is
                dependent on his Lord
              </h1>
            </div>
            <div className="border rounded-md p-4  shadow-md">
              <h1 className="text-[#20a45b] mb-4">
                1. The servant is dependent on his Lord #1
              </h1>
              <p>
                All human beings depend on Allah for their welfare and
                prevention of evil in various matters of their religion and
                world. Allah says (interpretation of the meaning): O mankind,
                you are those in need of Allah, while Allah is the Free of need,
                the Praiseworthy.
              </p>
              <h4 className="text-[#20a45b] mt-3">Reference</h4>
              <h4>Surah Al-Fatir 35:15</h4>
            </div>
          </div>
          <div className="border rounded-3xl px-4">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};
