import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0;

  width: 486px;
  height: 100%;

  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
`;

// ---------------------------------- //

export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 18px;

    color: #fff;

    width: 38px;
    height: 38px;
    background-color: black;
    border-radius: 50%;

    padding: 19px;
    margin-right: 22px;
    margin-top: 39px;

    cursor: pointer;
  }
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 27px;
  font-weight: 700;

  width: 180px;
  height: 56px;

  margin-top: 36px;
  margin-left: 46px;
`;

export const ButtonCloseTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 18px;

  color: #fff;

  width: 38px;
  height: 38px;
  background-color: black;
  border-radius: 50%;

  padding: 19px;
  margin-right: 22px;
  margin-top: 39px;
`;

// ---------------------------------- //

export const DivCenter = styled.div`
  color: #fff;
  font-size: 27px;
  font-weight: 700;

  height: 60%;
  width: 80%;

  margin-top: 36px;
  margin-left: 46px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 10px;

  ul {
    list-style-type: none;
  }
`;

export const DivItensCenter = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;

  width: 379px;
  height: 95px;

  margin-bottom: 20px;

  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  color: #2c2c2c;

  .image-cards {
    width: 46px;
    height: 57px;
    margin-left: 23px;
    margin-right: 21px;
  }

  .close-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 12px;
    color: #fff;
    width: 12px;
    height: 19px;
    background-color: black;
    border-radius: 50%;
    padding: 9px;
    top: 10px;

    position: relative;
    margin-bottom: 112px;
    margin-left: 6px;

    cursor: pointer;
  }
`;
export const NameProductCard = styled.p`
  max-width: 113px;

  color: #2c2c2c;

  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

export const QuantityContainer = styled.div`
  p {
    color: #000;

    font-size: 5px;
    font-weight: 400;

    margin-bottom: 5px;
  }
  .div-button-sum {
    border-radius: 4px;
    background: #fff;
    height: 19px;
    border: 0.3px solid #bfbfbf;
    display: flex;
  }

  input {
    text-align: center;
    width: 35px;
    border: none;
  }
`;

export const QuantityButton = styled.button`
  width: 17px;
  border: none;

  cursor: pointer;
`;

export const Price = styled.p`
  margin-left: 40px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

// ---------------------------------- //

export const DivBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 5px 46px;

  h1,
  p {
    color: #fff;

    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
  }
`;

// ---------------------------------- //

export const ButtonmFooter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 97px;
  background: #000;

  border: none;
  color: #ffffff;
  margin-top: 66px;

  cursor: pointer;
`;
