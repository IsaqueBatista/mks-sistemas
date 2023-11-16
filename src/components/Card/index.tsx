import { FC, MouseEvent } from "react";
import Image from "next/image";
import watch from "../../../public/assets/apple-watch.svg";
import jbl from "../../../public/assets/jbl-speaker.svg";
import iphone from "../../../public/assets/iphone-x.svg";
import beats from "../../../public/assets/beats-headphones.svg";
import macbook from "../../../public/assets/macbook-pro.svg";
import ipad from "../../../public/assets/ipad-pro.svg";
import Homepod from "../../../public/assets/homepod.svg";
import jlab from "../../../public/assets/jlab-audio-wireless.svg";

import bag from "../../../public/assets/shopping-bag.svg";

import * as S from "./styles";

interface CardProps {
  addToCart?: (item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => void;
}

const Card: FC<CardProps> = ({ addToCart }) => {
  return (
    <S.Container>
      <S.Main>
        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={watch} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>Apple Watch Series 4 GPS</S.H3>
            <p>R$399,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
              if (addToCart) {
                addToCart({
                  id: 1,
                  name: "Apple Watch Series 4 GPS",
                  price: 399,
                  quantity: 1,
                });
              }
            }}
          >
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>
        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={jbl} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>JBL Speaker</S.H3>
            <p>R$199,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>

        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={iphone} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>Apple iPhone X 128GB</S.H3>
            <p>R$899,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>

        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={beats} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>Beats Headphones</S.H3>
            <p>R$459,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>

        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={macbook} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>Apple Macbook Pro</S.H3>
            <p>R$2.499,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>

        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={ipad} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>Apple iPad Pro 64GB</S.H3>
            <p>R$899,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>

        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={Homepod} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>Apple Homepod</S.H3>
            <p>R$399,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>

        <S.Card>
          <S.ContainerImage className="Container-image">
            <Image src={jlab} alt="Watch Image" className="image-card" />
          </S.ContainerImage>
          <S.DivValue>
            <S.H3>JBuds Air Wireless</S.H3>
            <p>R$249,00</p>
          </S.DivValue>
          <S.P>Redesigned from scratch and completely revised.</S.P>
          <S.Button>
            <Image src={bag} alt="Image Bag" />
            Comprar
          </S.Button>
        </S.Card>
      </S.Main>
    </S.Container>
  );
};
export default Card;
