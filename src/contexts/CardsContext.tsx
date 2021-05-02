import { createContext, useState } from "react";

interface CardsContextData {
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
    showDetails: boolean;
    setCardId: React.Dispatch<React.SetStateAction<string>>;
    cardId: string;
    openModal: (id: string) => void;
    closeModal: (id: string) => void;
}

interface CardsProviderProps {
    children: React.ReactNode;
}


export const CardsContext = createContext({} as CardsContextData);

export function CardsProvider({ children }: CardsProviderProps) {
    const [showDetails, setShowDetails] = useState(false);
    const [cardId, setCardId] = useState('');

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
        }}>
            {children}
        </CardsContext.Provider>
    )
}