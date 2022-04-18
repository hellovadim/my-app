import img from "../../img/ava.jpg";
import Image from "react-bootstrap/Image";

import "./MyAvatar.scss";
const MyAvatar = () => {
  return (
    <div className="avatar">
      <Image
        roundedCircle={true}
        src={img}
        style={{ width: "96px", height: "103px" }}
        alt="ava"
      />
      <adress>
        Вадим Гетта <br /> Мой email:
        <a href="mailto:hellovados@gmail.com">hellovados@gmail.com</a>
      </adress>
    </div>
  );
};
export default MyAvatar;
