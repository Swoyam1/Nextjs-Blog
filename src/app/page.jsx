import Link from "next/link";
import style from "./homepage.module.css";
import { Featured } from "@/components/featured/Featured";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
