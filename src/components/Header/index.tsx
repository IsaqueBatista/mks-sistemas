import React, { useState } from "react";
import Image from "next/image";
import mks from "../../../public/assets/mks.svg";
import sistemas from "../../../public/assets/sistemas.svg";
import cart from "../../../public/assets/Vector.svg";
import ShoppingCart from "../ShoppingCart";
import * as S from "./styles";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Header: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Apple Watch Series 4 GPS", price: 399, quantity: 1 },
  ]);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main>
      <S.Header>
        <S.ImagesHeader>
          <Image src={mks} alt="MKS Logo" className="image-1" />
          <Image src={sistemas} alt="logo sistemas" className="image-2" />
        </S.ImagesHeader>
        <S.Button onClick={toggleCart}>
          <Image src={cart} alt="logo sistemas" className="img-button-header" />
          {totalItems}
        </S.Button>
        {isCartVisible && <ShoppingCart />}
      </S.Header>
    </main>
  );
};

export default Header;
