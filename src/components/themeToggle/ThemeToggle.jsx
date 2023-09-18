"use client";
import React, { useContext } from "react";
import Image from "next/image";
import style from "./themeToggle.module.css";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={style.container}
      onClick={toggle}
      style={
        theme === "dark" ? { background: "white" } : { background: "#0f172a" }
      }
    >
      <Image src="/moon.png" height={14} width={14} />
      <div
        className={style.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" height={14} width={14} />
    </div>
  );
};
