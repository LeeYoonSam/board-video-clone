"use client";

import { useSelf } from "@liveblocks/react/suspense";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
  boardId: string;
};

export const Canvas = ({
  boardId,
}: CanvasProps) => {
  
  const { name } = useSelf((me) => me.info);
  console.log(name)

  return (
    <main
      className="h-full w-full flex bg-neutral-100 touch-none"
    >
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
}; 