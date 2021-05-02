import { motion } from 'framer-motion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { WindowResize } from '../../../Utils/WindowResize';

import {
    LogoRedBackground,
    LogoTitle,
    LogoWrapper,
    Navbar,

    Navigation,
    NavItem,

    MenuMobile,
    CloseMenuButton,
} from './styles';


function BrowseNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dispatch = useDispatch();

    const size = WindowResize();

    return (
        <Navbar>
            <LogoWrapper>
                <LogoRedBackground />
                <LogoTitle>
                    ma <br />
                </LogoTitle>
            </LogoWrapper>

            {size.width !== undefined && size.width < 768 &&
                <MenuMobile
                    src="/assets/menu.svg"
                    alt="menu de hamburgue"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            }

            <Navigation active={isMenuOpen}>
                {size.width !== undefined && size.width < 768 && isMenuOpen &&
                    <CloseMenuButton
                        src="/assets/close_x.svg"
                        alt="Botão de fechar menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                }
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavItem>
                        <NavLink
                            to="/browse"
                            exact={true}
                            activeClassName="active"
                            onClick={() => dispatch({ type: 'FETCH_CHARACTERS' })}
                        >
                            Personagens
                        </NavLink>
                    </NavItem>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavItem>
                        <NavLink
                            to="/browse/movies"
                            activeClassName="active"
                            onClick={() => dispatch({ type: 'FETCH_MOVIES' })}
                        >
                            Filmes
                        </NavLink>
                    </NavItem>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavItem>
                        <NavLink
                            to="/browse/HQs"
                            activeClassName="active"
                            onClick={() => dispatch({ type: 'FETCH_HQS' })}
                        >
                            HQs
                        </NavLink>
                    </NavItem>
                </motion.div>

                <NavItem>
                    Sair
                </NavItem>
            </Navigation>

        </Navbar>
    )
}

export default BrowseNavbar;