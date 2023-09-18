"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from "./authLinks.module.css";
import { signOut, useSession } from "next-auth/react";

export const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>
            Write
          </Link>
          <span className={style.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/">HomePage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <>
              <Link href="/">Write</Link>
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
