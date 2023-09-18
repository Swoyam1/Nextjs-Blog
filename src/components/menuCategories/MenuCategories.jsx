import React from "react";
import Link from "next/link";
import style from "./menuCategories.module.css";

export const MenuCategories = () => {
  return (
    <div className={style.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.culture}`}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};
