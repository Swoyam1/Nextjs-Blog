import React from "react";
import style from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={style.write}>
          <textarea placeholder="write a comment..." className={style.input} />
          <button className={style.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={style.comments}>
        <div className={style.comment}>
          <div className={style.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={style.image}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>13.09.2023</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex,
            reiciendis ut animi quasi perspiciatis? Illum corrupti alias
            inventore magnam minus perferendis, nulla, dignissimos dolor tenetur
            sint porro veritatis quod nostrum voluptas mollitia. Dicta
            recusandae animi saepe maxime quis. Quidem.
          </p>
        </div>
        <div className={style.comment}>
          <div className={style.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={style.image}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>13.09.2023</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex,
            reiciendis ut animi quasi perspiciatis? Illum corrupti alias
            inventore magnam minus perferendis, nulla, dignissimos dolor tenetur
            sint porro veritatis quod nostrum voluptas mollitia. Dicta
            recusandae animi saepe maxime quis. Quidem.
          </p>
        </div>
        <div className={style.comment}>
          <div className={style.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={style.image}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>13.09.2023</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex,
            reiciendis ut animi quasi perspiciatis? Illum corrupti alias
            inventore magnam minus perferendis, nulla, dignissimos dolor tenetur
            sint porro veritatis quod nostrum voluptas mollitia. Dicta
            recusandae animi saepe maxime quis. Quidem.
          </p>
        </div>
        <div className={style.comment}>
          <div className={style.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={style.image}
            />
            <div className={style.userInfo}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>13.09.2023</span>
            </div>
          </div>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex,
            reiciendis ut animi quasi perspiciatis? Illum corrupti alias
            inventore magnam minus perferendis, nulla, dignissimos dolor tenetur
            sint porro veritatis quod nostrum voluptas mollitia. Dicta
            recusandae animi saepe maxime quis. Quidem.
          </p>
        </div>
      </div>
    </div>
  );
};
