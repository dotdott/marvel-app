import styled from "styled-components";
import { devices } from "../../../../styles/devices";

interface Props {
  active?: boolean;
  last?: boolean;
}

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  width: 100%;
  height: 90px;

  padding: 2rem;
  padding-right: 0;
  background: #000;
  box-shadow: 1px 0px 10px red;
`;

export const LogoWrapper = styled.div`
  position: relative;
  top: 2.3rem;

  margin-left: 8rem;
  width: 30%;

  ${devices.m1280} {
    margin-left: 2rem;
  }
`;

export const LogoRedBackground = styled.div`
  background: #ff0000;

  width: 120px;
  height: 45px;
`;

export const LogoTitle = styled.h1`
  position: relative;
  left: 1rem;
  bottom: 2.5rem;

  font-family: "Marvel", sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 100;
`;

export const Navigation = styled.ol<Props>`
  display: flex;
  justify-content: space-evenly;

  padding-top: 2rem;
  width: 80%;
  font-family: "axiforma_medium", sans-serif;

  ${devices.m768} {
    position: absolute;
    top: 0;
    left: 0;

    display: ${(Props) => (Props.active ? "block" : "none")};
    width: 100%;
    height: 100vh;
    background: #000;
  }
`;

export const NavItem = styled.ul<Props>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #84848d;
  font-size: ${(Props) => (Props.last ? 1.2 : 1.5)}rem;
  font-weight: 600;

  text-decoration: none;
  cursor: pointer;

  & a {
    color: #84848d;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
  }

  & a.active {
    color: #fff;
  }

  ${devices.m768} {
    margin-left: 2rem;
    font-size: 2.5rem;

    & a {
      font-size: 2.5rem;
    }
  }
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
`;

export const MenuMobile = styled.img`
  height: 30px;
  cursor: pointer;

  margin-right: 2rem;
`;

export const CloseMenuButton = styled.img`
  height: 50px;
  cursor: pointer;

  position: absolute;
  right: 5%;
`;
