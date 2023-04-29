import { AppBar } from "@mui/material";
import React from "react";
import { MiddleHeader } from "./middle-header";
import { TopHeader } from "./top-header";
import "./header.css";
import { BottomHeader } from "./bottom-header";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar className="appbar">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </AppBar>
  );
};

export { Header };
