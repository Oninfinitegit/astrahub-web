"use client";
import React, { FC, PropsWithChildren } from "react";
import { AudioPlayerProvider } from "react-use-audio-player";

export const PlayerProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AudioPlayerProvider>{children}</AudioPlayerProvider>;
};
