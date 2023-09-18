import React from "react";
import style from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
        <Link
          href="/blog?cat=style"
          className={`${style.category} ${style.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            className={style.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${style.category} ${style.fashion}`}
        >
          <Image
            src="/fashion.png"
            width={32}
            height={32}
            className={style.image}
          />
          fashion
        </Link>
        <Link href="/" className={`${style.category} ${style.food}`}>
          <Image
            src="/food.png"
            width={32}
            height={32}
            className={style.image}
          />
          food
        </Link>
        <Link href="/" className={`${style.category} ${style.travel}`}>
          <Image
            src="/travel.png"
            width={32}
            height={32}
            className={style.image}
          />
          travel
        </Link>
        <Link href="/" className={`${style.category} ${style.culture}`}>
          <Image
            src="/culture.png"
            width={32}
            height={32}
            className={style.image}
          />
          culture
        </Link>
        <Link href="/" className={`${style.category} ${style.coding}`}>
          <Image
            src="/coding.png"
            width={32}
            height={32}
            className={style.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};
