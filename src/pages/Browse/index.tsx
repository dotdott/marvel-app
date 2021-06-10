import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Background } from "../../components/Background";
import { Card } from "../../components/Card";
import { Dropdown } from "../../components/Dropdown";
import { CardsContext } from "../../contexts/CardsContext";
import BrowseNavbar from "./Navbar";

import { CardWrapper, Container } from "./styles";

import { WindowResize } from "../../Utils/WindowResize";
import { useContext } from "react";
import { devices } from "../../styles/devices";
import CardModal from "../../components/CardModal";
import styled from "styled-components";

interface stateProps extends Element {
  card: CardProps[];
}

type CardProps = {
  id: string;
  title: string;
  image: string;
  content: string;
};

const CardModalBackground = styled.div`
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

function Browse() {
  const { showDetails } = useContext(CardsContext);

  const location = useLocation();

  function fetchCards(card: CardProps[]) {
    // return card.map((card: CardProps) => <Card key={card.id} card={card} />);
  }

  const displayCards = useSelector((state: stateProps) => {
    const card = state.card;

    return fetchCards(card);
  });

  const size = WindowResize();

  return (
    <Container>
      <BrowseNavbar />
      <Background />

      {location.pathname === "/browse/movies" && <Dropdown />}

      {showDetails && (
        <CardModalBackground>
          <CardModal />
        </CardModalBackground>
      )}

      {size.width !== undefined && (
        <CardWrapper>{/* {displayCards} */}</CardWrapper>
      )}
    </Container>
  );
}

export default Browse;
