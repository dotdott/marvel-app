/*eslint-disable*/
import { useState } from "react";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { ICard } from "../types_global";

import CardModal from "../components/CardModal";
import { useDispatch } from "react-redux";
import { Types } from "../store/reducers/cardsReducer";

const Container = styled.div`
  position: relative;
  overflow: hidden;

  min-width: 400px;
  max-width: 400px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3rem;

  ${devices.m1280} {
    min-width: 315px;
    max-width: 315px;
  }
  ${devices.m850} {
    min-width: 280px;
    max-width: 280px;
  }
  ${devices.m768} {
    min-width: 400px;
    max-width: 400px;
  }
`;

const CardImage = styled.img`
  height: 600px;
  margin-right: 1rem;
  min-width: 415px;
  max-width: 415px;

  ${devices.m1280} {
    min-width: 340px;
    max-width: 340px;
  }
  ${devices.m850} {
    min-width: 350px;
    max-width: 350px;
  }

  ${devices.m768} {
    min-width: 420px;
    max-width: 420px;
  }
`;

const CardInfoDiv = styled.div`
  position: absolute;
  bottom: 0;

  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 1) 10%,
    rgba(64, 14, 14, 0)
  );

  width: 100%;
  height: 50%;
  border-radius: 3rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${devices.m1000} {
    height: 60%;
  }

  ${devices.m768} {
    min-width: 400px;
    max-width: 400px;
  }
`;

const CardInfoWrapper = styled.div`
  position: relative;
`;
const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-family: "axiforma_bold", sans-serif;
`;
const CardDescription = styled.p`
  font-family: "axiforma_thin", sans-serif;
`;

const CardDetails = styled.p`
  font-family: "axiforma_medium", sans-serif;
  cursor: pointer;
`;

interface ICardProps {
  card: ICard;
  route: string;
}

export function Card({ card, route }: ICardProps) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  function handleShowModal() {
    return dispatch({
      type: Types.SET_SELECTED_CARD,
      selectedCard: card,
      showModal: true,
    });
  }

  const title = route === "/characters" ? card.name : card.title;

  return (
    <Container>
      <CardImage
        src={card.thumbnail.path + "." + card.thumbnail.extension}
        alt={title}
      />

      <CardInfoDiv>
        <CardInfoWrapper>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {card.description || "No description avaliable"}
          </CardDescription>
        </CardInfoWrapper>

        <CardDetails onClick={handleShowModal}>Show Details</CardDetails>
      </CardInfoDiv>
    </Container>
  );
}
