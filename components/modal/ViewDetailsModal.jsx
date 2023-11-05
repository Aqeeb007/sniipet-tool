import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Copy, Pencil, Save, XSquare } from "lucide-react";

import { ScrollArea } from "../ui/scroll-area";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";

import { onOpen, onClose } from "@/redux/ModalSlices/ViewDetailsModalSlice";

export const ViewDetailsModal = ({ item }) => {
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.ViewDetailsModal.isOpen);

  const onOpenChange = () => {
    setEditable(false);
    dispatch(onClose());
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-blue-50 text-black p-0 overflow-x-scroll lg:overflow-hidden w-[95%] lg:min-w-[80%] h-auto">
        {editable ? (
          <>
            <div className="pt-8 pl-10 flex">
              <div className="flex items-center gap-4">
                <div className="font-semibold text-xl">{item.title}</div>
                <div className="text-sm">{item.description}</div>
              </div>
              <div className="ml-auto pr-12">
                <Button
                  onClick={() => {
                    setEditable(false);
                  }}
                  size="sm"
                  variant="icon"
                  className="hover:text-blue-500"
                >
                  <Save />
                </Button>
                <Button
                  onClick={() => {
                    setEditable(false);
                  }}
                  size="sm"
                  variant="icon"
                  className="hover:text-red-500"
                >
                  <XSquare />
                </Button>
              </div>
            </div>
            <ScrollArea className="px-10 max-h-[600px] h-auto rounded-lg">
              <Textarea
                style={{ overflow: "hidden", whiteSpace: "pre-wrap" }}
                className="p-1 max-h-[600] h-screen focus:outline-none bg-white rounded-lg"
              >
                {item.code}
              </Textarea>
            </ScrollArea>
            <div className="pt-1"></div>
          </>
        ) : (
          <>
            <div className="pt-8 pl-10 flex">
              <div className="flex items-center gap-4">
                <div className="font-semibold text-xl">{item.title}</div>
                <div className="text-sm">{item.description}</div>
              </div>
              <div className="ml-auto pr-12">
                <Button
                  onClick={() => {
                    setEditable(true);
                  }}
                  size="sm"
                  variant="icon"
                  className="hover:text-blue-500"
                >
                  <Pencil />
                </Button>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(item.code);
                  }}
                  size="sm"
                  variant="icon"
                  className="hover:text-green-500"
                >
                  <Copy />
                </Button>
              </div>
            </div>
            <ScrollArea className="px-10 max-h-[600px] rounded-lg">
              <pre className="p-1 min-h-[600] h-auto w-full bg-gray-900 text-white rounded-lg">
                {item.code}
              </pre>
            </ScrollArea>
            <div className="pt-1"></div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
