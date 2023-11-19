import { FC, MouseEvent } from "react";
import Image from "next/image";
import watch from "../../../public/assets/apple-watch.svg";
import jbl from "../../../public/assets/jbl-speaker.svg";
import iphone from "../../../public/assets/iphone-x.svg";
import beats from "../../../public/assets/beats-headphones.svg";
import macbook from "../../../public/assets/macbook-pro.svg";
import ipad from "../../../public/assets/ipad-pro.svg";
import homepod from "../../../public/assets/homepod.svg";
import jlab from "../../../public/assets/jlab-audio-wireless.svg";

import bag from "../../../public/assets/shopping-bag.svg";

import * as S from "./styles";

interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
}

interface CardProps {
  addToCart?: (item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => void;
}

const Card: FC<CardProps> = ({ addToCart }) => {
  const products: Product[] = [
    { id: 1, name: "Apple Watch Series 4 GPS", price: 399, image: watch },
    { id: 2, name: "JBL Speaker", price: 199, image: jbl },
    { id: 3, name: "Apple iPhone X 128GB", price: 899, image: iphone },
    { id: 4, name: "Beats Headphones", price: 459, image: beats },
    { id: 5, name: "Apple Macbook Pro", price: 2499, image: macbook },
    { id: 6, name: "Apple iPad Pro 64GB", price: 899, image: ipad },
    { id: 7, name: "Apple Homepod", price: 399, image: homepod },
    { id: 8, name: "JBuds Air Wireless", price: 249, image: jlab },
  ];

  return (
      <S.Container>
        <S.Main>
          {products.map((product) => (
            <S.Card key={product.id}>
              <S.ContainerImage className="Container-image">
                <Image
                  src={product.image}
                  alt={`${product.name} Image`}
                  className="image-card"
                />
              </S.ContainerImage>
              <S.DivValue>
                <S.H3>{product.name}</S.H3>
                <p>R${product.price.toFixed(2)}</p>
              </S.DivValue>
              <S.P>Redesigned from scratch and completely revised.</S.P>
              <S.Button
                onClick={(event: MouseEvent) => {
                  event.stopPropagation();
                  if (addToCart) {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                    });
                  }
                }}
              >
                <Image src={bag} alt="Image Bag" />
                Comprar
              </S.Button>
            </S.Card>
          ))}
        </S.Main>
      </S.Container>
  );
};

export default Card;
