import { Button } from "../Button/Button";
import Image from "../Image/Image";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <section className={s.section}>
      <Image />
      <div className={s.blockBtn}>
        <Button className={s.item}>contact</Button>
        <Button className={s.item}>company</Button>
        <Button className={s.item}>social networks</Button>
      </div>
    </section>
  );
};

export default Navigation;
