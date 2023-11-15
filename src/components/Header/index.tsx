import { useState } from "react";
import Image from "next/image";
import mks from "../../../public/assets/mks.svg";
import sistemas from "../../../public/assets/sistemas.svg";
import cart from "../../../public/assets/Vector.svg";
import ShoppingCart from "../ShoppingCart";
import * as S from "./styles";

export default function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <main>
      <S.Header>
        <S.ImagesHeader>
          <Image src={mks} alt="MKS Logo" className="image-1" />
          <Image src={sistemas} alt="logo sistemas" className="image-2" />
        </S.ImagesHeader>
        <S.Button onClick={toggleCart}>
          <Image src={cart} alt="logo sistemas" className="img-button-header" />
          0
        </S.Button>
        {isCartVisible && <ShoppingCart />}
      </S.Header>
    </main>
  );
}
