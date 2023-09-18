import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={style.image} />
      </div>
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>11.09.2023 - </span>
          <span className={style.category}>CULTURE</span>
        </div>
      </div>
      <Link href="/">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      </Link>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut quos
        sapiente impedit eveniet dolorum hic debitis asperiores, quisquam magni
        doloremque obcaecati odit! Nam laborum adipisci maiores eligendi eius!
        Saepe...
      </p>
      <Link href="/" className={style.link}>
        Read More
      </Link>
    </div>
  );
};
