import { useContext } from 'react';
import styled from 'styled-components';
import { CardsContext } from '../contexts/CardsContext';
import { devices } from '../styles/devices';

const Container = styled.div`
    position: relative;
    overflow: hidden;

    width: 400px;
    height: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 3rem;
`;

const CardImage = styled.img`
    height: 600px;
    margin-right: 1rem;
`;

const CardInfoDiv = styled.div`
    position: absolute;
    bottom: 0;

    background-image: linear-gradient(to bottom, rgba(255,0,0,1) 10%, rgba(64,14,14,0));

    width: 100%;
    height: 50%;
    border-radius: 3rem;
    padding: 2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

        ${devices.m1000}{
            height: 60%;
        }
`;

const CardInfoWrapper = styled.div`
    position: relative;
`;
const CardTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'axiforma_bold', sans-serif;
`;
const CardDescription = styled.p`
    font-family: 'axiforma_thin', sans-serif;
`;

const CardDetails = styled.p`
    font-family: 'axiforma_medium', sans-serif;
    cursor: pointer;
`;


interface CardProps {
    card: {
        id: string;
        title: string;
        content: string;
        image: string;
    }
}

export function Card({ card }: CardProps) {
    const {
        openModal,
        setSelectedCard
    } = useContext(CardsContext);

    function handleCard({ card }: CardProps){
        openModal(card.id);
        setSelectedCard(card);
    }

    return (
        <>
            <Container>
                <CardImage src={card.image} alt="Imagem background da Wanda Maximoff" />

                <CardInfoDiv>
                    <CardInfoWrapper>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>
                            {card.content}
                        </CardDescription>
                    </CardInfoWrapper>

                    <CardDetails
                        onClick={() => handleCard({ card })}
                    >
                        ver detalhes
                </CardDetails>
                </CardInfoDiv>
            </Container>
        </>
    )
}
