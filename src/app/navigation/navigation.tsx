import { Avatar } from "@mantine/core";
import React from "react";
import { GoSearch } from "react-icons/go";

export const Navigation = () => {
  return (
    <div className=" flex  justify-between">
      <h2 className="text-2xl text-[#393939] font-semibold">Dua Page</h2>
      <div className="relative ">
        <input
          type="search"
          placeholder="Search by Dua Name"
          className="border outline-none focus:border-[#20a45b]  text-black rounded-md px-3 py-3"
        />
        <button className="absolute inset-y-1 right-1 w-16 text-black bg-slate-100 rounded-md  ">
          <GoSearch className="m-auto" />
        </button>
      </div>
      <div className="overflow-hidden">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/images/748aa77fcf63b492fde808a15eeeb535.png"
          alt=""
        />
      </div>
    </div>
  );
};
