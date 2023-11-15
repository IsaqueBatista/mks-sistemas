import React, { useState } from "react";
import Image from "next/image";
import watch from "../../../public/assets/apple-watch.svg";
import * as S from "./styles";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Apple Watch Series 4 GPS", price: 399, quantity: 1 },
  ]);

  const increaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const closeModal = () => {
    setIsCartVisible(false);
  };

  const deleteItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      {isCartVisible && (
        <S.Container>
          <S.DivTop>
            <S.H1>Carrinho de compras</S.H1>
            <S.ButtonCloseTop className="close" onClick={closeModal}>
              X
            </S.ButtonCloseTop>
          </S.DivTop>

          <S.DivCenter>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <S.DivItensCenter>
                    <Image
                      src={watch}
                      alt="Watch Image"
                      className="image-cards"
                    />
                    <S.NameProductCard>{item.name}</S.NameProductCard>
                    <S.QuantityContainer>
                      <p>Qtd:</p>
                      <div className="div-button-sum">
                        <S.QuantityButton
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </S.QuantityButton>
                        <input type="number" value={item.quantity} readOnly />
                        <S.QuantityButton
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </S.QuantityButton>
                      </div>
                    </S.QuantityContainer>
                    <S.Price>R${item.price * item.quantity}</S.Price>
                    <div
                      className="close-card"
                      onClick={() => deleteItem(item.id)}
                    >
                      <p>X</p>
                    </div>
                  </S.DivItensCenter>
                </li>
              ))}
            </ul>
          </S.DivCenter>

          <S.DivBottom>
            <h1>Total:</h1>
            <p>
              R$
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </S.DivBottom>

          <S.ButtonmFooter>
            <h1>Finalizar Compra</h1>
          </S.ButtonmFooter>
        </S.Container>
      )}
    </>
  );
};

export default ShoppingCart;
