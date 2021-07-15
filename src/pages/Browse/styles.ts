import styled from "styled-components";
import { devices } from "../../styles/devices";
import background from "../../assets/bg-5.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;

  background-image: url(${background});
  background-repeat: no-repeat;
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;

  ${devices.m1600} {
    gap: 2rem;
  }
`;

export const ArrowIcon = styled.img`
  height: 40px;
  cursor: pointer;
  margin: 0 1rem;
`;

export const CardModalBackground = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: -4px;
  z-index: 99;

  background: linear-gradient(
    0.25turn,
    #000,
    #000 61%,
    rgba(255, 255, 255, 0.15) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  ${devices.m1600} {
    top: -2%;
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const SliderWrapper = styled.div`
  width: 95%;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const Attribution = styled.a`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
