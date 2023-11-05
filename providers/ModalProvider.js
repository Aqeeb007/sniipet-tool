"use client";

import { useEffect, useState } from "react";

import { ViewDetailsModal } from "@/components/modal/ViewDetailsModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ViewDetailsModal />
    </>
  );
};
