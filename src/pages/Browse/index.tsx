import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Background } from '../../components/Background';
import { Card } from '../../components/Card';
import { Dropdown } from '../../components/Dropdown';
import { CardsProvider } from '../../contexts/CardsContext';
import BrowseNavbar from './Navbar';

import {
    CardWrapper,
    Container
} from './styles';


interface stateProps extends Element {
    card: CardProps[];
}

type CardProps = {
    id: string;
    title: string;
    image: string;
    content: string;
}


function Browse() {
    const location = useLocation();

    const displayCards = useSelector((state: stateProps) => {
        const card = state.card;

        return card.map((card: CardProps) => (
            <Card
                key={card.id}
                card={card}
            />
        ))
    });


    return (
        <CardsProvider>
            <Container>
                <BrowseNavbar />
                <Background />

                {location.pathname === '/browse/movies' &&
                    <Dropdown />
                }

                <CardWrapper>
                    {displayCards}
                </CardWrapper>
            </Container>
        </CardsProvider>

    )
}

export default Browse;