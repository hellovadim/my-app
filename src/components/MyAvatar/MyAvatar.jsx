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

      <h4>Вадим Гетта</h4>
      <span>Мой email:</span>
      <a href="mailto:hellovados@gmail.com">hellovados@gmail.com</a>
    </div>
  );
};
export default MyAvatar;
