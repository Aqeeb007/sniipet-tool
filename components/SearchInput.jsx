import { Search } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Input } from "./ui/input";
import { data } from "@/public/staticData";
import Link from "next/link";
import { onOpen } from "@/redux/ModalSlices/ViewDetailsModalSlice";
import { useDispatch } from "react-redux";
import { ViewDetailsModal } from "./modal/ViewDetailsModal";
import Image from "next/image";

export const SearchInput = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const dispatch = useDispatch();
  const [searchedData, setSearchedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const closeSearchResults = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (value !== "") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    const filterData = data.filter((d) => {
      return d.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedData(filterData);
  }, [value]);

  useEffect(() => {
    document.addEventListener("click", closeSearchResults);

    return () => {
      document.removeEventListener("click", closeSearchResults);
    };
  }, []);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="relative flex flex-col">
      <ViewDetailsModal item={selectedItem} />

      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        ref={inputRef}
        onClick={handleInputClick}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className={
          !isOpen && searchedData
            ? "w-72 lg:w-[1000px] h-[40px] pl-9 rounded-full bg-gray-100 border-none right-0 focus-visible:ring-transparent"
            : "rounded-t-3xl rounded-b-none w-72 lg:w-[1000px] h-[40px] pl-9 bg-gray-100 border-none right-0 focus-visible:ring-transparent"
        }
        placeholder="Search for code snippets..."
      />

      {isOpen && searchedData.length > 0 ? (
        <div>
          <div className="absolute flex flex-col  min-h-fit w-72 lg:w-[1000px] bg-gray-100 shadow-sm-2 z-[9] p-6 rounded-b-[24px]">
            {searchedData.map((i) => (
              <button
                key={i.id}
                onClick={() => {
                  dispatch(onOpen());
                  setSelectedItem(i);
                }}
              >
                <div className="flex gap-3 bg-blue-100 hover:bg-blue-200 my-2 p-2 rounded-lg">
                  <div className="w-full flex items-center text-sm gap-2">
                    <Image
                      className=" h-8
                     w-8 object-cover rounded-full"
                      src={i.image}
                      alt={i.title}
                      width={50}
                      height={50}
                    />
                    <h1>{i.title}</h1>
                    <h1 className="ml-auto">{i.description}</h1>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          {value && isOpen && (
            <div className="absolute min-h-[30vh] w-72 lg:w-[1000px] bg-gray-100 shadow-sm-2 z-[9] p-6 rounded-b-[24px] flex justify-center items-center text-xl text-red-500">
              No Match
            </div>
          )}
        </div>
      )}
    </div>
  );
};
