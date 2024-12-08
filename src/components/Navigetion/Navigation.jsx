import { Button } from "../Button/Button";
import Image from "../Image/Image";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <section className={s.section}>
      <Image />
      <div className={s.blockBtn}>
        <Button>Contact</Button>
        <Button>Company</Button>
        <Button>Social Networks</Button>
      </div>
    </section>
  );
};

export default Navigation;
