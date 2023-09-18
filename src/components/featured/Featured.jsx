import React from "react";
import style from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey, Swoyam here!</b> Discover my stories and creative ideas{" "}
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image src="/culture.png" alt="" fill className={style.image} />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            esse.
          </h1>
          <p className={style.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            alias nobis v oluptatum harum vitae, unde magnam repudiandae
            deserunt laborum iusto earum neque modi similique? Adipisci
            reiciendis natus id error quos?
          </p>
          <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
