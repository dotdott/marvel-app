import styled from 'styled-components';
import { devices } from '../styles/devices';

 const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        0.25turn
        ,#000,#000 50%,
        rgba(255,255,255,.15) 100%
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    z-index: -1;

        ${devices.m768}{
            background: rgba(0,0,0,.8);
        }
`;

 const WrapperImage = styled.div`
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
`;


 const MarvelImage = styled.img`
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
`;


export function Background() {
    return (
        <Container>
            <WrapperImage>
                <MarvelImage src='/assets/background.svg' alt="pre loading" />
            </WrapperImage>
        </Container>
    )
}
