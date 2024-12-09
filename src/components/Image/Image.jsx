import { Button } from "../Button/Button";
import s from "./Image.module.css";
const Image = () => {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src="../../../public/Oleksandr-Chegrynets.png"
        alt="My Photo"
      />
      <h2 className={s.name}>Oleksandr Chegrynets</h2>
      <Button>+ Add to Contacts</Button>
    </div>
  );
};

export default Image;
