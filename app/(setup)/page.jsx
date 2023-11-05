"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onOpen } from "@/redux/ModalSlices/ViewDetailsModalSlice";
import { Copy, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { data } from "@/public/staticData";
import { ViewDetailsModal } from "@/components/modal/ViewDetailsModal";
import Image from "next/image";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState("Code");
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Card
              style={{ backgroundImage: `url(/public/cardImage.png)` }}
              key={item.id}
              className="bg-blue-100 rounded-2xl shadow-lg h-48 lg:h-[230px]"
            >
              <CardHeader>
                <div className="flex">
                  <div>
                    <CardTitle className="text-md lg:text-2xl">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </div>
                  <div className="ml-auto lg:hidden">
                    <Button
                      variant="icon"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(item.code);
                      }}
                    >
                      <Copy />
                    </Button>
                    <Button
                      variant="icon"
                      size="sm"
                      onClick={() => {
                        dispatch(onOpen());
                        setSelectedItem(item);
                      }}
                    >
                      <Eye />
                    </Button>
                  </div>
                  <div className="ml-auto hidden lg:block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      className=" h-10
                       w-10 object-fill"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="p-0">{item.content}</p>
              </CardContent>
              <CardFooter className=" gap-2 hidden lg:flex">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(item.code);
                  }}
                  className="bg-blue-500 rounded-xl hover:bg-blue-600 flex gap-2"
                >
                  <Copy />
                  Copy code
                </Button>
                <Button
                  onClick={() => {
                    dispatch(onOpen());
                    setSelectedItem(item);
                  }}
                  className="bg-green-700 rounded-xl hover:bg-green-800 flex gap-2"
                >
                  <Eye /> View details
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
      <ViewDetailsModal item={selectedItem} />
    </div>
  );
}
