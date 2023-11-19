import styled from "styled-components";

export const Header = styled.header`
  background: #0f52ba;
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 60px;

  @media (max-width: 434px) {
    padding: 0 20px;
  }
`;

export const ImagesHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 6px;

  .image-1 {
    display: flex;
  }

  .image-2 {
    display: flex;
    margin-top: 8px;
    margin-left: 10px;
  }

  @media (max-width: 340px) {
    .image-1,
    .image-2 {
      width: 50px;
      height: auto;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: #fff;
  border: none;

  margin: auto 10px;

  color: #000;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  gap: 3px;

  cursor: pointer;

  .img-button-header {
    margin-right: 13px;
  }
  @media (max-width: 340px) {
    width: 77px;
    height: 34px;
    transition: 0.3s ease;
  }
`;
