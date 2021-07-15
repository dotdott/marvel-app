import styled from "styled-components";
import { devices } from "../styles/devices";
import { ICard } from "../types_global";

interface Props {
  reverse?: string;
}

const Container = styled.div<Props>`
  z-index: 999;
  position: fixed;
  top: 27.7%;
  left: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(Props) => Props.reverse !== "1" && "row-reverse"};

  background: ${(Props) =>
    Props.reverse === "1"
      ? "linear-gradient(to right, rgb(255,0,0) 50%, rgba(64,14,14,9))"
      : "linear-gradient(to bottom, rgb(255,0,0) 10%, rgba(64,14,14,9))"};
  border-radius: 2rem;

  ${devices.m768} {
    right: auto;
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  border-radius: 2rem;
  padding: 1px;
  object-fit: cover;

  height: 600px;

  min-width: 390px;
  max-width: 390px;
  ${devices.m768} {
    height: auto;
  }
`;

const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  min-width: 330px;
  max-width: 330px;
`;
const CardTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: "axiforma_bold", sans-serif;
`;
const CardInfo = styled.p`
  font-family: "axiforma_bold", sans-serif;
`;
const CardInfoSpan = styled.p``;

const CardReviewsStarTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: "axiforma_regular", sans-serif;
  font-weight: normal;
`;
const CardStar = styled.img`
  width: 36px;
  height: 36px;
`;

const CloseModal = styled.img`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 33rem;
  right: 26rem;

  cursor: pointer;
`;

interface ICardModalProps {
  hide: () => void;
  card: ICard;
  type: string;
}

export default function CardModal({ hide, card, type }: ICardModalProps) {
  const comicsShow = card.comics?.items?.map((item) => (
    <CardInfoSpan>{item.name}</CardInfoSpan>
  ));

  const seriesShow = <CardInfoSpan>{card.series?.name}</CardInfoSpan>;

  const storiesShow = card.stories?.items?.map((item) => (
    <CardInfoSpan>{item.name}</CardInfoSpan>
  ));

  return (
    <Container reverse={card.id}>
      <CardImage
        src={card.thumbnail.path + "." + card.thumbnail.extension}
        alt="Card image"
      />

      <CardInfoWrapper>
        <CardTitle>{card.title}</CardTitle>
        <CardInfo>Shows:</CardInfo>
        {type === "/browse"
          ? comicsShow ?? "No data available"
          : type === "/browse/comics"
          ? seriesShow ?? "No data available"
          : storiesShow ?? "No data available"}

        <CardReviewsStarTitle>Stars</CardReviewsStarTitle>

        <div style={{ display: "flex" }}>
          <CardStar src="/assets/star.svg" alt="star" />
          <CardStar src="/assets/star.svg" alt="star" />
          <CardStar src="/assets/star.svg" alt="star" />
          <CardStar src="/assets/star.svg" alt="star" />
          <CardStar src="/assets/star_empty.svg" alt="star" />
        </div>

        <CloseModal
          onClick={hide}
          src="/assets/close_x.svg"
          alt="Botão de fechar"
        />
      </CardInfoWrapper>
    </Container>
  );
}
