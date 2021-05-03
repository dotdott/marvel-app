import { createContext, useState } from "react";

interface CardsContextData {
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
    showDetails: boolean;
    setCardId: React.Dispatch<React.SetStateAction<string>>;
    cardId: string;
    openModal: (id: string) => void;
    closeModal: (id: string) => void;
    setSelectedCard: React.Dispatch<React.SetStateAction<CardProps>>
    selectedCard: CardProps;
}

interface CardsProviderProps {
    children: React.ReactNode;
}

type CardProps = {
    id: string;
    title: string;
    image: string;
    content: string;
}


export const CardsContext = createContext({} as CardsContextData);

export function CardsProvider({ children }: CardsProviderProps) {
    const [showDetails, setShowDetails] = useState(false);
    const [cardId, setCardId] = useState('');
    const [selectedCard, setSelectedCard] = useState<CardProps>({} as CardProps)

    function openModal(id: string) {
        setShowDetails(true);
        setCardId(id);
    }

    function closeModal(id: string) {
        setShowDetails(false);
        setCardId(id);
    }

    return (
        <CardsContext.Provider value={{
            setShowDetails,
            showDetails,
            setCardId,
            cardId,
            openModal,
            closeModal,
            setSelectedCard,
            selectedCard
        }}>
            {children}
        </CardsContext.Provider>
    )
}