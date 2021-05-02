import styled from 'styled-components';
import { devices } from '../../styles/devices';

export const Container = styled.div`
    position: absolute;
    top: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    & .WrapperImage{
        z-index: -1;

        position: relative;
        left: 19%;
        bottom: 1%;
        width: 100vw;
        height: 100%;

        ${devices.m1280}{
            position: unset;
            height: 104%;
        }
    }

    & .MarvelImage {
        width: 114%;
        height: 104vh;
        

        ${devices.m1280}{
            object-fit: cover;
            width: 100%;
            height: 103%;
        }
            ${devices.m768}{
                width: 100%;
                height: 100%;
            }
    }
`;

export const SloganWrapper = styled.div`
    position: relative;
    right: 25%;
`;

export const MarvelWrapper = styled.div`
    position: absolute;

    background: linear-gradient(0.25turn, #000, #000 50%, rgba(0,0,0,0));

    display: flex;
    width: 100%;
    height: 100vh;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MarvelTitle = styled.p`
    color: #fff;

    font-size: 6rem;
    font-family: 'Marvel', sans-serif;
    font-weight: 100;
    text-transform: uppercase;

    position: relative;
    bottom: 66px;
    right: -31px;
`;

export const MarvelRedBackground = styled.div`
    background: #ff0000;

    width: 350px;
    height: 150px;
    margin-top: 10rem;
`;
