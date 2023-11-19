import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  margin: 50px auto;
`;

export const Main = styled.main`
  width: 938px;
  height: 601px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  gap: 10px;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
  @media (max-width: 700px) {
    width: auto;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  @media (max-width: 500px) {
    width: auto;
    height: auto;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 217.562px;
  height: 285px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  .image-card {
    height: 138px;
    margin-top: 18px;
    margin-bottom: 14px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  p {
    width: 65px;
    height: 27px;

    border-radius: 5px;
    background: #373737;

    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 13px;
    font-weight: 700;
    line-height: 15px;
    padding: 15px 35px;
  }
`;

export const H3 = styled.h3`
  width: 124px;
  height: 38px;
  display: flex;
  align-items: center;

  color: #2c2c2c;

  font-size: 16px;
  font-weight: 400;
  line-height: 19px;

  margin-bottom: 8px;
`;

export const P = styled.p`
  width: 192px;
  height: 25px;

  display: flex;
  justify-content: center;
  text-align: start;

  color: #2c2c2c;

  font-size: 10px;
  font-weight: 300;
  line-height: 12px;

  padding: 0 15px 0 12px;

  margin-bottom: 12px;
`;

export const Button = styled.button`
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  width: 100%;
  height: 31px;
  color: white;
  border: none;
  gap: 14px;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
