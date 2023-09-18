import React from "react";
import style from "./menu.module.css";
import Link from "next/link";
import { MenuPosts } from "../menuPosts/MenuPosts";
import { MenuCategories } from "../menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"Whats's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      <MenuCategories />
      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};
