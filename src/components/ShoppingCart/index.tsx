"use client";
import { useState } from "react";

import Image from "next/image";
import watch from "../../../public/assets/apple-watch.svg";

import * as S from "./styles";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <S.Container>
      <S.DivTop>
        <S.H1>Carrinho de compras</S.H1>
        <S.ButtonCloseTop className="close">X</S.ButtonCloseTop>
      </S.DivTop>

      <S.DivCenter>
        <ul>
          <li>
            <S.DivItensCenter>
              <Image src={watch} alt="Watch Image" className="image-cards" />
              <S.NameProductCard>Apple Watch Series 4 GPS</S.NameProductCard>
              <S.QuantityContainer>
                <p>Qtd:</p>
                <div className="div-button-sum">
                  <S.QuantityButton onClick={decreaseQuantity}>
                    -
                  </S.QuantityButton>
                  <input type="number" value={quantity} readOnly />
                  <S.QuantityButton onClick={increaseQuantity}>
                    +
                  </S.QuantityButton>
                </div>
              </S.QuantityContainer>
              <S.Price>R$399</S.Price>
              <div className="close-card">
                <p>X</p>
              </div>
            </S.DivItensCenter>
          </li>
        </ul>
      </S.DivCenter>

      <S.DivBottom>
        <h1>Total:</h1>
        <p>R$798</p>
      </S.DivBottom>

      <S.ButtonmFooter>
        <h1>Finalizar Compra</h1>
      </S.ButtonmFooter>
    </S.Container>
  );
}
