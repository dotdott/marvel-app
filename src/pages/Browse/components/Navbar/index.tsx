import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../../../auth/auth";
import { Types } from "../../../../store/reducers/userReducer";
import { Types as TypesCard } from "../../../../store/reducers/cardsReducer";
import { WindowResize } from "../../../../Utils/WindowResize";

import {
  LogoRedBackground,
  LogoTitle,
  LogoWrapper,
  Navbar,
  Navigation,
  NavItem,
  UserIcon,
  MenuMobile,
  CloseMenuButton,
} from "./styles";
import { useCallback } from "react";

function BrowseNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const size = WindowResize();

  const handleTabAction = useCallback(
    (route: string) => {
      return dispatch({
        type: TypesCard.CARDS_STORE_REQUEST,
        route,
      });
    },
    [dispatch]
  );

  async function handleLogout() {
    await logout();

    dispatch({
      type: Types.CLEAN_USER_STORE,
    });

    return history.push("/");
  }

  return (
    <Navbar>
      <LogoWrapper>
        <LogoRedBackground />
        <LogoTitle>
          ma <br />
        </LogoTitle>
      </LogoWrapper>

      {size.width !== undefined && size.width < 768 && (
        <MenuMobile
          src="/assets/menu.svg"
          alt="menu de hamburgue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}

      <Navigation active={isMenuOpen}>
        {size.width !== undefined && size.width < 768 && isMenuOpen && (
          <CloseMenuButton
            src="/assets/close_x.svg"
            alt="Botão de fechar menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavItem>
            <NavLink
              to="/browse"
              exact={true}
              activeClassName="active"
              onClick={() => handleTabAction("/characters")}
            >
              Characters
            </NavLink>
          </NavItem>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavItem>
            <NavLink
              to="/browse/series"
              activeClassName="active"
              onClick={() => handleTabAction("/series")}
            >
              Series
            </NavLink>
          </NavItem>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavItem>
            <NavLink
              to="/browse/comics"
              activeClassName="active"
              onClick={() => handleTabAction("/comics")}
            >
              Comics
            </NavLink>
          </NavItem>
        </motion.div>

        <NavItem last onClick={handleLogout}>
          <UserIcon src="/assets/avatar.png" alt="dummy photo" />
          Logout
        </NavItem>
      </Navigation>
    </Navbar>
  );
}

export default BrowseNavbar;
