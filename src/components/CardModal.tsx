import { useContext } from 'react';
import styled from 'styled-components';
import { CardsContext } from '../contexts/CardsContext';

interface Props {
    reverse: string;
}

const Container = styled.div<Props>`
    z-index: 999;

    display: flex;
    flex-direction: ${Props => Props.reverse !== '1' && 'row-reverse'};

    background: ${Props => Props.reverse === '1' 
    ? 'linear-gradient(to right, rgb(255,0,0) 50%, rgba(64,14,14,9))'
    : 'linear-gradient(to bottom, rgb(255,0,0) 10%, rgba(64,14,14,9))'};
    border-radius: 2rem;
`;

const CardImage = styled.img`
    border-radius: 2rem;
    padding: 1px;
    height: 600px;
`;

const CardInfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
`;
const CardTitle = styled.h2`
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-family: 'axiforma_bold', sans-serif;
`;
const CardInfo = styled.p`
    font-family: 'axiforma_bold', sans-serif;
`;
const CardInfoSpan = styled.p``;

const CardReviewsStarTitle = styled.h3`
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    font-family: 'axiforma_regular', sans-serif;
    font-weight: normal;
`;
const CardStar = styled.img`
    width: 36px;
    height: 36px;
`;

const CloseModal = styled.img`
    width: 30px;
    height: 30px;

    position: relative;
    bottom: -20%;
    right: -90%;
    
    cursor: pointer;
`;


interface CardProps{
    card: {
        id: string;
        title: string;
        content: string;
        image: string;
    }
}

export default function CardModal({card}: CardProps) {
    const { closeModal } = useContext(CardsContext);

    return (
        <Container reverse={card.id}>
            <CardImage src={card.image} alt="Card image"/>

            <CardInfoWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardInfo>Aparições:</CardInfo>
                <CardInfoSpan>Vingadores - era de Ultron</CardInfoSpan>
                <CardInfoSpan>Vingadores - era de Ultron</CardInfoSpan>
                <CardInfoSpan>Vingadores - era de Ultron</CardInfoSpan>
                <CardInfoSpan>Vingadores - era de Ultron</CardInfoSpan>

                <CardReviewsStarTitle>Avaliações dos Fãs</CardReviewsStarTitle>

                <div>
                    <CardStar src="/assets/star.svg" alt="star" />
                    <CardStar src="/assets/star.svg" alt="star" />
                    <CardStar src="/assets/star.svg" alt="star" />
                    <CardStar src="/assets/star.svg" alt="star" />
                    <CardStar src="/assets/star_empty.svg" alt="star" />
                </div>

                <CloseModal 
                    onClick={() => closeModal(card.id)}
                    src="/assets/close_x.svg"
                    alt="Botão de fechar"
                />
            </CardInfoWrapper>
        </Container>
    )
}
