import Image from "../Image/Image";
import s from "./AppBar.module.css";
import Navigation from "../Navigetion/Navigation";

export const AppBar = () => {
  return (
    <header className={s.wrapper}>
      <h1 className={s.title}>business card</h1>
    </header>
  );
};
