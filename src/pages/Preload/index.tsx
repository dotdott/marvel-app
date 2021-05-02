import { motion } from "framer-motion";
import { useHistory } from 'react-router';
import { imageVariants, logoVariants, variants } from "../../components/MotionVariants";

import {
    Container,

    MarvelRedBackground,
    MarvelTitle,
    MarvelWrapper,
    SloganWrapper
} from './styles';

export function Preload() {
    const history = useHistory();

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{    
                position: 'absolute',
                background: '#000',
                width: '100%',
                height: '100%',
                right: 0,
                zIndex: -1,
            }}
        >
            <Container>
                <motion.div 
                    className="WrapperImage"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <motion.img 
                        src='/assets/background.svg' 
                        alt="pre loading" 
                        className="MarvelImage" 
                        initial="exit" 
                        animate="enter" 
                        exit="exit" 
                        variants={imageVariants}
                        onAnimationComplete={() => history.push('/login')}
                    />
                </motion.div>

                <MarvelWrapper>
                    <motion.div
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        variants={logoVariants}
                    >
                        <SloganWrapper>
                            <MarvelRedBackground />
                            <MarvelTitle>
                                ma <br />
                            rve <br />
                            l
                            </MarvelTitle>
                        </SloganWrapper>
                    </motion.div>
                </MarvelWrapper>
            </Container>
        </motion.div>
    )
}
