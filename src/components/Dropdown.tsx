import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const FilterDiv = styled.div`
    position: absolute;
    left: 12%;
    top: 22%;
    width: 130px;
    cursor: default;
    z-index: 999;
`;

const FilterSelect = styled.div`
    width: 100%;

    padding: .5rem 1rem;
    padding-bottom: .2rem;
    border: 1px solid #ff0000;
    background: #000;
    color: #ff0000;
    border-radius: 8px;

    appearance: none;
`;

const FilterOption = styled.option`
    color: #ff0000;
    margin-bottom: .3rem;
`;

const FilterCustomArrow = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;

    width: 15px;
    height: 15px;
    pointer-events: none;
`;

export function Dropdown() {
    const [selectedOption, setSelectedOption] = useState('Lançamento');
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    function handleFilterDropdown(){
        setIsOpen(!isOpen);
    }

    async function handleSelectedOption(e: any){
        if(e.target.value === 'Lançamento'){
            dispatch({type: 'FETCH_MOVIES'})
        }        
        
        if(e.target.value === 'Cronologia'){
            dispatch({type: 'FETCH_MOVIES_CHRONOLOGY'})
        }

        setSelectedOption(e.target.value);
        setIsOpen(!isOpen);
    }

    return (
        <FilterDiv>
            <FilterSelect onClick={handleFilterDropdown}>
                {isOpen === false ? 
                    <FilterOption>{selectedOption}</FilterOption>
                :
                <>
                    <FilterOption>
                        Filtrar por
                    </FilterOption>
                    <FilterOption 
                        value="Lançamento"
                        onClick={e => handleSelectedOption(e)}
                    >
                        Lançamento
                    </FilterOption>
                    <FilterOption 
                        value="Cronologia"
                        onClick={e => handleSelectedOption(e)}
                    >
                        Cronologia
                    </FilterOption>
                </>
                }
            </FilterSelect>
            <FilterCustomArrow src="/assets/angle_down.svg" alt="custom arrow" />
        </FilterDiv>
    )
}
