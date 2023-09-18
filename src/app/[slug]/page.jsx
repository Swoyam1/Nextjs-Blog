import React from "react";
import style from "./singlePage.module.css";
import { Menu } from "@/components/Menu/Menu";
import Image from "next/image";
import { Comments } from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={style.avatar} />
            </div>
            <div className={style.userTextContainer}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>09.13.2024</span>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={style.image} />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div className={style.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              dolor saepe perspiciatis odio ipsa doloribus molestias nemo, a
              dicta sunt velit est. Quibusdam fugiat molestias vitae asperiores
              error, dignissimos molestiae illum! Iusto saepe laboriosam tempore
              similique veniam rem, voluptas cumque!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              dolor saepe perspiciatis odio ipsa doloribus molestias nemo, a
              dicta sunt velit est. Quibusdam fugiat molestias vitae asperiores
              error, dignissimos molestiae illum! Iusto saepe laboriosam tempore
              similique veniam rem, voluptas cumque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              dolor saepe perspiciatis odio ipsa doloribus molestias nemo, a
              dicta sunt velit est. Quibusdam fugiat molestias vitae asperiores
              error, dignissimos molestiae illum! Iusto saepe laboriosam tempore
              similique veniam rem, voluptas cumque!
            </p>
          </div>
          <div className={style.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
