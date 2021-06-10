import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  color: #fff;
`;

export const CardWrapper = styled.div`
  position: absolute;
  top: 10%;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  ${devices.m1600} {
    gap: 2rem;
  }
`;

export const ArrowIcon = styled.img`
  height: 40px;
  cursor: pointer;
  margin: 0 1rem;
`;
