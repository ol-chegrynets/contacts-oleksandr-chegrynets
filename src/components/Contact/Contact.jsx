import s from "./Contact.module.css";
const Contact = () => {
  return (
    <div>
      <h4 className={s.title}>Number Phone</h4>
      <p className={s.text}>+49 151 27 26 4225</p>
      <hr />
      <h4 className={s.title}>Email</h4>
      <p className={s.text}>ol.chegrynets@dmail.com</p>
      <hr />
      <h4 className={s.title}>Address</h4>
      <p className={s.text}>81375, Munich, Germany</p>
    </div>
  );
};

export default Contact;
