"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ 
  children,
  roomId,
  fallback,
}: RoomProps) => {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_qM-qRxOtSJhtMJ-JRKOH4sDlW1ZUdfnsg-vnQwzcgckjq057v3qJpb2Dq7B6yWhj"}>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={fallback}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}