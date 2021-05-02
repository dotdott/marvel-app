import { 
    INITIAL_STATE,
    MoviesSection, 
    MoviesChronology,
    HQsSection
} from '../actions';

interface ActionsProps {
    type: string;
}

const cardsReducer = (state = INITIAL_STATE, action: ActionsProps) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            console.log('Fetched characters');
            return state = INITIAL_STATE;

        case 'FETCH_MOVIES':
            console.log('fetched movies');
            return state = MoviesSection;

        case 'FETCH_MOVIES_CHRONOLOGY':
            console.log('fetched movies CHRONOLOGY');
            return state = MoviesChronology;

        case 'FETCH_HQS':
            console.log('fetched HQs');
            return state = HQsSection;

        default:
            return state;
    }
}

export default cardsReducer;